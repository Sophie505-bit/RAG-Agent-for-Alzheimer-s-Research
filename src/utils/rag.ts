import { articles, Article, getFullText } from "@/data/articles";

// Simple tokenizer
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9α-ωβγδεζηθικλμνξοπρστυφχψω\s'-]/g, " ")
    .split(/\s+/)
    .filter(t => t.length > 2)
    .filter(t => !STOP_WORDS.has(t));
}

const STOP_WORDS = new Set([
  "the", "and", "for", "are", "but", "not", "you", "all", "can", "had",
  "her", "was", "one", "our", "out", "has", "have", "been", "from",
  "this", "that", "with", "they", "will", "each", "make", "like",
  "been", "have", "many", "some", "them", "than", "its", "over",
  "such", "into", "other", "which", "their", "these", "then", "also",
  "may", "more", "most", "through", "including", "both", "between",
  "being", "while", "about", "would", "could", "should", "what",
  "when", "where", "who", "how", "does", "did", "very", "just",
  "here", "there", "those"
]);

// Build TF-IDF index
interface DocTerms {
  articleId: string;
  terms: Map<string, number>;
  totalTerms: number;
}

function buildIndex(): { docs: DocTerms[]; idf: Map<string, number> } {
  const docs: DocTerms[] = [];
  const docFreq = new Map<string, number>();

  articles.forEach(article => {
    const text = getFullText(article) + " " + article.keywords.join(" ") + " " + article.targets.join(" ");
    const tokens = tokenize(text);
    const termFreq = new Map<string, number>();
    const uniqueTerms = new Set<string>();

    tokens.forEach(token => {
      termFreq.set(token, (termFreq.get(token) || 0) + 1);
      uniqueTerms.add(token);
    });

    uniqueTerms.forEach(term => {
      docFreq.set(term, (docFreq.get(term) || 0) + 1);
    });

    docs.push({
      articleId: article.id,
      terms: termFreq,
      totalTerms: tokens.length
    });
  });

  const idf = new Map<string, number>();
  docFreq.forEach((freq, term) => {
    idf.set(term, Math.log(docs.length / (1 + freq)));
  });

  return { docs, idf };
}

const index = buildIndex();

// Compute TF-IDF similarity
function computeScore(queryTokens: string[], doc: DocTerms, idf: Map<string, number>): number {
  let score = 0;
  queryTokens.forEach(token => {
    const tf = (doc.terms.get(token) || 0) / doc.totalTerms;
    const idfVal = idf.get(token) || 0;
    score += tf * idfVal;
  });
  return score;
}

export interface RetrievalResult {
  article: Article;
  score: number;
  relevantSnippet: string;
}

function extractSnippet(article: Article, queryTokens: string[]): string {
  const fullText = getFullText(article);
  const sentences = fullText.split(/(?<=[.!?])\s+/);
  
  let bestSentence = "";
  let bestScore = -1;

  sentences.forEach(sentence => {
    const sentTokens = tokenize(sentence);
    let overlap = 0;
    queryTokens.forEach(qt => {
      if (sentTokens.some(st => st.includes(qt) || qt.includes(st))) {
        overlap++;
      }
    });
    if (overlap > bestScore) {
      bestScore = overlap;
      bestSentence = sentence;
    }
  });

  if (bestSentence.length > 300) {
    return bestSentence.substring(0, 297) + "...";
  }
  return bestSentence || article.sections.abstract.substring(0, 200) + "...";
}

export function retrieve(query: string, topK: number = 5): RetrievalResult[] {
  const queryTokens = tokenize(query);
  
  const scored = index.docs.map(doc => ({
    articleId: doc.articleId,
    score: computeScore(queryTokens, doc, index.idf)
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, topK)
    .filter(s => s.score > 0)
    .map(s => {
      const article = articles.find(a => a.id === s.articleId)!;
      return {
        article,
        score: s.score,
        relevantSnippet: extractSnippet(article, queryTokens)
      };
    });
}

// Template-based generation
export function generateResponse(query: string, results: RetrievalResult[]): string {
  if (results.length === 0) {
    return "I couldn't find relevant information in the knowledge base for your query. Please try rephrasing your question or using different keywords related to Alzheimer's disease therapeutic targets.";
  }

  const queryLower = query.toLowerCase();
  
  // Detect query intent
  const isTargetQuery = /target|potential|candidate|novel|new/.test(queryLower);
  const isDruggabilityQuery = /druggable|drug|small molecule|biologic|antibod|modality|modalit/.test(queryLower);
  const isStudyQuery = /stud|advance|future|direction|needed|research|clinical trial/.test(queryLower);
  const isMechanismQuery = /mechanism|pathway|how|why|role|function|involve/.test(queryLower);

  let response = "";

  if (isTargetQuery) {
    response += "**Potential Therapeutic Targets for Alzheimer's Disease:**\n\n";
    response += "Based on the analysis of the retrieved scientific literature, several promising therapeutic targets have been identified:\n\n";
    
    results.forEach((r, i) => {
      const targets = r.article.targets.join(", ");
      response += `${i + 1}. **${r.article.title.split(":")[0]}** — Key targets include: ${targets}. `;
      response += `${r.relevantSnippet}\n\n`;
    });

    response += "\n**Summary:** The landscape of AD therapeutic targets spans multiple pathological mechanisms, from classical amyloid and tau pathology to emerging areas such as neuroinflammation, metabolic dysfunction, and epigenetic dysregulation. ";
    response += "The most validated targets include Aβ (with approved therapies), tau protein, TREM2, and GSK-3β, while emerging targets like TFEB, the gut microbiome, and σ1R offer novel therapeutic paradigms.";
  } else if (isDruggabilityQuery) {
    response += "**Druggability Assessment of Alzheimer's Disease Targets:**\n\n";
    
    const smallMolecule: string[] = [];
    const biologics: string[] = [];
    const other: string[] = [];

    results.forEach(r => {
      r.article.targets.forEach(t => {
        const tLower = t.toLowerCase();
        if (/kinase|receptor|enzyme|pde|hdac|sirt|mao|ache|bace|secretase|channel|transporter/.test(tLower)) {
          if (!smallMolecule.includes(t)) smallMolecule.push(t);
        }
        if (/antibod|amyloid|tau|α-syn|c1q|c3|trem2|protofibril/.test(tLower)) {
          if (!biologics.includes(t)) biologics.push(t);
        }
        if (/gene|crispr|aso|mirna|mir-|apoe4.*gene/.test(tLower)) {
          if (!other.includes(t)) other.push(t);
        }
      });
    });

    response += "**Small Molecules:**\n";
    response += "Many AD targets are amenable to small molecule intervention, including kinases (GSK-3β, CDK5, DYRK1A, Fyn), ";
    response += "enzymes (BACE1, AChE, MAO-B, PDE4/5/9), receptors (NMDA, mGluR5, M1 mAChR, α7-nAChR, GLP-1R, σ1R), ";
    response += "and epigenetic regulators (HDAC2, BET bromodomain). These targets have well-defined binding pockets suitable for structure-based drug design.\n\n";

    response += "**Biologics (Antibodies & Proteins):**\n";
    response += "Several targets are best addressed with biological therapeutics: anti-Aβ antibodies (lecanemab, donanemab) targeting amyloid protofibrils, ";
    response += "anti-tau antibodies (semorinemab), TREM2 agonistic antibodies, anti-C1q antibodies (ANX005), and anti-α-synuclein antibodies. ";
    response += "Neurotrophic factors (BDNF, NGF) require protein or gene therapy delivery.\n\n";

    response += "**Other Modalities:**\n";
    response += "Emerging modalities include antisense oligonucleotides (ASOs for tau, ApoE4), CRISPR gene editing (APOE4→APOE2 conversion, APP protective variants), ";
    response += "PROTACs for targeted protein degradation, microRNA therapeutics (miR-132 mimics), and microbiome-based interventions (probiotics, FMT, GV-971).\n\n";

    results.forEach((r, i) => {
      response += `[${i + 1}] ${r.article.authors} (${r.article.year}). ${r.article.title}. *${r.article.journal}*.\n`;
    });
  } else if (isStudyQuery) {
    response += "**Additional Studies Needed to Advance Alzheimer's Disease Targets:**\n\n";
    
    results.forEach((r, i) => {
      response += `${i + 1}. **${r.article.title.split(":")[0]}:**\n`;
      response += `   ${r.article.sections.conclusion.substring(0, 300)}...\n\n`;
    });

    response += "\n**Cross-cutting Research Needs:**\n";
    response += "- **Biomarker development:** Validated biomarkers for target engagement, patient stratification, and treatment monitoring\n";
    response += "- **Combination therapy trials:** Testing synergistic combinations (e.g., anti-Aβ + anti-tau, anti-amyloid + anti-inflammatory)\n";
    response += "- **Earlier intervention:** Prevention trials in preclinical and prodromal stages using genetic and biomarker risk stratification\n";
    response += "- **Improved delivery:** Brain-penetrant formulations and novel delivery systems (intranasal, gene therapy, nanoparticles)\n";
    response += "- **Precision medicine:** Genotype-guided treatment selection (e.g., ApoE4 status, TREM2 variants)\n";
    response += "- **Multi-omics integration:** Combining genomics, proteomics, metabolomics, and imaging data for comprehensive disease understanding";
  } else if (isMechanismQuery) {
    response += "**Mechanisms and Pathways in Alzheimer's Disease:**\n\n";
    
    results.forEach((r, i) => {
      response += `${i + 1}. **${r.article.title}**\n`;
      response += `   ${r.relevantSnippet}\n`;
      response += `   *Key targets:* ${r.article.targets.join(", ")}\n\n`;
    });
  } else {
    // Generic response
    response += "**Analysis Based on Retrieved Literature:**\n\n";
    
    results.forEach((r, i) => {
      response += `${i + 1}. **${r.article.title}** (${r.article.authors}, ${r.article.year})\n`;
      response += `   ${r.relevantSnippet}\n`;
      response += `   *Targets:* ${r.article.targets.join(", ")}\n\n`;
    });

    response += "\n**Key Insights:**\n";
    const allTargets = new Set<string>();
    results.forEach(r => r.article.targets.forEach(t => allTargets.add(t)));
    response += `The retrieved literature identifies ${allTargets.size} unique therapeutic targets across ${results.length} relevant publications. `;
    response += `These span multiple therapeutic categories and disease mechanisms, reflecting the multifactorial nature of Alzheimer's disease.`;
  }

  return response;
}

// Metrics
export interface RAGMetrics {
  queryTime: number;
  documentsRetrieved: number;
  avgRelevanceScore: number;
  maxRelevanceScore: number;
  minRelevanceScore: number;
  coverageRatio: number;
  uniqueTargetsFound: number;
}

export function computeMetrics(results: RetrievalResult[], queryTimeMs: number): RAGMetrics {
  const scores = results.map(r => r.score);
  const allTargets = new Set<string>();
  results.forEach(r => r.article.targets.forEach(t => allTargets.add(t)));

  return {
    queryTime: queryTimeMs,
    documentsRetrieved: results.length,
    avgRelevanceScore: scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0,
    maxRelevanceScore: scores.length > 0 ? Math.max(...scores) : 0,
    minRelevanceScore: scores.length > 0 ? Math.min(...scores) : 0,
    coverageRatio: results.length / articles.length,
    uniqueTargetsFound: allTargets.size
  };
}
