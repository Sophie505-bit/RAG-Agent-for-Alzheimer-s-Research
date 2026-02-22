import { Brain, Cpu, Database, FlaskConical, Layers, Lightbulb, MessageSquare, Search, Zap } from "lucide-react";

export function Methodology() {
  return (
    <div className="p-6 space-y-8 overflow-y-auto max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Methodology & Questions</h2>
        <p className="text-slate-500">Technical approach, model choices, metrics, and answers to the assignment questions</p>
      </div>

      {/* Pipeline Overview */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-500" />
          RAG Pipeline Architecture
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: Database, title: "1. Data Collection", desc: "30 curated articles from PubMed/bioRxiv on AD therapeutic targets. Extracted abstracts, introductions, and conclusions.", color: "indigo" },
            { icon: FlaskConical, title: "2. Preprocessing", desc: "Tokenization, stopword removal, TF-IDF index construction. Keywords and targets extracted as metadata.", color: "purple" },
            { icon: Search, title: "3. Retrieval", desc: "TF-IDF cosine similarity scoring. Top-K documents retrieved based on query-document relevance scores.", color: "pink" },
            { icon: MessageSquare, title: "4. Generation", desc: "Template-based response synthesis with intent detection. Responses grounded in retrieved sources with citations.", color: "emerald" },
          ].map((step, i) => (
            <div key={i} className={`p-4 rounded-xl border-2 border-${step.color}-100 bg-${step.color}-50/30`}>
              <step.icon className={`w-8 h-8 text-${step.color}-500 mb-3`} />
              <h4 className="font-semibold text-slate-800 text-sm mb-2">{step.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          Quality Metrics & Evaluation
        </h3>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 font-medium text-slate-600">Metric</th>
                  <th className="text-left p-3 font-medium text-slate-600">Description</th>
                  <th className="text-left p-3 font-medium text-slate-600">Method</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Retrieval Precision", "Fraction of retrieved documents that are relevant to the query", "TF-IDF cosine similarity score threshold"],
                  ["Coverage Ratio", "Proportion of the knowledge base searched per query", "Retrieved docs / Total docs"],
                  ["Query Latency", "Time from query submission to response generation", "Performance.now() timing"],
                  ["Target Coverage", "Number of unique therapeutic targets in retrieved results", "Unique target count across results"],
                  ["Source Diversity", "Distribution of retrieved sources across topics", "Journal and topic distribution analysis"],
                  ["Response Groundedness", "Degree to which generated text is supported by sources", "All responses include explicit citations"],
                ].map(([metric, desc, method], i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="p-3 font-medium text-slate-700">{metric}</td>
                    <td className="p-3 text-slate-600">{desc}</td>
                    <td className="p-3 text-slate-500 text-xs">{method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 text-sm mb-2">Conclusion on Quality</h4>
            <p className="text-sm text-amber-700 leading-relaxed">
              The TF-IDF retrieval system provides fast (&lt;5ms) and deterministic document retrieval with reasonable relevance ranking. 
              For a production system, embedding-based retrieval (e.g., using sentence-transformers or OpenAI embeddings) would significantly improve 
              semantic matching quality. The template-based generation ensures 100% groundedness but lacks the fluency and adaptability of LLM-based generation. 
              A hybrid approach combining dense retrieval with LLM generation (e.g., GPT-4, LLaMA) would provide optimal results.
            </p>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          Answers to Assignment Questions
        </h3>

        {/* Question 1 */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-3">На какие модальности данных можно расширить решение?</h4>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>The solution can be expanded to incorporate the following data modalities:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Structured biomedical data:</strong> Gene/protein databases (UniProt, PDB), drug-target interaction databases (ChEMBL, DrugBank), pathway databases (KEGG, Reactome), and clinical trial registries (ClinicalTrials.gov)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Genomic & transcriptomic data:</strong> GWAS summary statistics, single-cell RNA-seq data from AD brain tissue, bulk RNA-seq differential expression profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Imaging data:</strong> Brain MRI/PET scans with amyloid and tau PET tracers, histopathology images of brain tissue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Chemical/molecular data:</strong> SMILES representations of small molecules, protein 3D structures, molecular fingerprints for drug-target interaction prediction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Knowledge graphs:</strong> Biomedical knowledge graphs linking genes, diseases, drugs, pathways, and phenotypes (e.g., Hetionet, BioKG)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Clinical data:</strong> Electronic health records (EHR), patient cohort data, biomarker measurements from clinical trials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-3">Как это можно сделать?</h4>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>Integration of multi-modal data requires a layered approach:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Unified embedding space:</strong> Use multi-modal embedding models (e.g., BiomedCLIP for text+images, Mol-BERT for molecules) to project different data types into a shared vector space for cross-modal retrieval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Knowledge graph integration:</strong> Build a heterogeneous graph connecting entities from different modalities (genes → proteins → pathways → diseases → drugs). Use graph neural networks (GNNs) or graph RAG for reasoning over connected data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Multi-index retrieval:</strong> Maintain separate vector stores for each modality (text, molecular structures, images) with a meta-retriever that selects relevant indices based on query intent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Tool-augmented LLM:</strong> Equip the LLM with tools/APIs for querying structured databases (SQL for clinical data, SPARQL for ontologies, REST APIs for PubChem/UniProt)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Agentic RAG:</strong> Implement an agent-based architecture where specialized sub-agents handle different data modalities and a coordinator agent synthesizes multi-modal responses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-3">Какие модели и почему вы выбрали для решения?</h4>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p className="font-medium text-slate-700">Current prototype (browser-based):</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>TF-IDF for retrieval:</strong> Chosen for simplicity, speed, and zero-dependency operation in the browser. Provides interpretable scoring and deterministic results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Template-based generation:</strong> Ensures 100% groundedness and reproducibility. Detects query intent (targets, druggability, mechanisms, studies) and formats responses accordingly</span>
                  </li>
                </ul>

                <p className="font-medium text-slate-700 mt-4">Recommended production system:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs mt-2">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-2 font-medium">Component</th>
                        <th className="text-left p-2 font-medium">Model</th>
                        <th className="text-left p-2 font-medium">Rationale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Embedding", "PubMedBERT / BioLinkBERT", "Domain-specific pre-training on biomedical text, superior semantic understanding of medical terminology"],
                        ["Retrieval", "ColBERT v2 / FAISS + dense vectors", "Late interaction provides fine-grained token-level matching; FAISS enables efficient ANN search at scale"],
                        ["Reranking", "cross-encoder/ms-marco-MiniLM", "Cross-encoder reranking improves precision of initial retrieval results"],
                        ["Generation", "GPT-4 / LLaMA-3 70B / Mistral", "Strong instruction following, citation capability, biomedical knowledge. LLaMA/Mistral for self-hosted option"],
                        ["NER", "BioBERT-NER / SciSpaCy", "Extract gene/protein/drug entities for knowledge graph construction and structured retrieval"],
                        ["Chunking", "LangChain RecursiveTextSplitter", "Semantic chunking with overlap preserves context across chunk boundaries"],
                        ["Vector DB", "Chroma / Weaviate / Pinecone", "Purpose-built for embedding storage and ANN search with metadata filtering"],
                      ].map(([comp, model, rationale], i) => (
                        <tr key={i} className="border-t border-slate-100">
                          <td className="p-2 font-medium text-slate-700">{comp}</td>
                          <td className="p-2 text-indigo-600">{model}</td>
                          <td className="p-2 text-slate-500">{rationale}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-3">
                  <h5 className="font-medium text-indigo-800 text-sm mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Key Design Decisions
                  </h5>
                  <ul className="space-y-1 text-xs text-indigo-700">
                    <li>• <strong>PubMedBERT over general BERT:</strong> 3-5% improvement on biomedical NLP benchmarks due to domain-specific pre-training</li>
                    <li>• <strong>Hybrid retrieval (sparse + dense):</strong> Combines BM25 lexical matching with dense semantic search for best recall</li>
                    <li>• <strong>RAG over fine-tuning:</strong> Enables grounded responses with citations, avoids hallucination, and allows easy knowledge base updates</li>
                    <li>• <strong>Chunk size 512 tokens with 50-token overlap:</strong> Balances context preservation with retrieval granularity</li>
                    <li>• <strong>Cross-encoder reranking:</strong> Significantly improves precision@5 compared to bi-encoder retrieval alone</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan-500" />
          Current Implementation Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "React 19", desc: "UI framework" },
            { name: "TypeScript", desc: "Type safety" },
            { name: "Tailwind CSS", desc: "Styling" },
            { name: "Recharts", desc: "Visualizations" },
            { name: "Vite", desc: "Build tool" },
            { name: "TF-IDF", desc: "Retrieval" },
            { name: "Template Engine", desc: "Generation" },
            { name: "Lucide Icons", desc: "Iconography" },
          ].map((tech, i) => (
            <div key={i} className="p-3 bg-slate-50 rounded-lg">
              <p className="font-medium text-slate-700 text-sm">{tech.name}</p>
              <p className="text-xs text-slate-400">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
