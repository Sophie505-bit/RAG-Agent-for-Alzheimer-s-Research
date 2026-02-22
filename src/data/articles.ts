export interface Article {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  doi: string;
  source: "PubMed" | "bioRxiv";
  pmid?: string;
  sections: {
    abstract: string;
    introduction: string;
    conclusion: string;
  };
  keywords: string[];
  targets: string[];
}

export const articles: Article[] = [
  {
    id: "art-001",
    title: "Amyloid-beta as a therapeutic target in Alzheimer's disease: current status and future directions",
    authors: "Hardy J, Selkoe DJ",
    year: 2023,
    journal: "Nature Reviews Neuroscience",
    doi: "10.1038/nrn.2023.001",
    source: "PubMed",
    pmid: "36500001",
    sections: {
      abstract: "Amyloid-beta (Aβ) peptide remains the most extensively studied therapeutic target in Alzheimer's disease (AD). The amyloid cascade hypothesis posits that accumulation of Aβ in the brain is the primary driver of AD pathogenesis. Recent clinical trials with anti-Aβ antibodies, including lecanemab and aducanumab, have demonstrated that reducing amyloid burden can slow cognitive decline, providing the first disease-modifying therapies for AD. This review examines the current landscape of Aβ-targeted therapies, including BACE1 inhibitors, γ-secretase modulators, and passive immunotherapy approaches. We discuss the challenges of targeting Aβ, including the need for early intervention, biomarker-guided patient selection, and management of amyloid-related imaging abnormalities (ARIA).",
      introduction: "Alzheimer's disease affects over 50 million people worldwide and represents the most common cause of dementia. The amyloid cascade hypothesis, first proposed in 1992, suggests that the accumulation and aggregation of amyloid-beta peptides in the brain initiates a cascade of events leading to neurodegeneration. Aβ is generated through sequential cleavage of amyloid precursor protein (APP) by β-secretase (BACE1) and γ-secretase complex. The resulting peptides, primarily Aβ40 and Aβ42, aggregate to form oligomers, protofibrils, and eventually amyloid plaques. Multiple therapeutic strategies have been developed to target different aspects of Aβ biology, including reducing production, enhancing clearance, and preventing aggregation. Small molecule inhibitors of BACE1 and γ-secretase have been extensively investigated, though clinical trials have yielded mixed results. Immunotherapy approaches, both active and passive, represent the most successful strategy to date.",
      conclusion: "The approval of lecanemab and the clinical data from donanemab represent landmark achievements in AD therapeutics, validating Aβ as a druggable target. However, the modest clinical benefits observed highlight the need for combination therapies and earlier intervention. Future directions include developing more potent and selective anti-Aβ antibodies, combining Aβ-targeted therapies with tau-directed approaches, and identifying optimal treatment windows through advanced biomarker strategies. The field must also address the safety concerns related to ARIA and develop strategies to improve the therapeutic index of anti-amyloid therapies. Small molecule approaches targeting Aβ production remain viable if selectivity and safety profiles can be optimized."
    },
    keywords: ["amyloid-beta", "BACE1", "γ-secretase", "immunotherapy", "lecanemab", "aducanumab", "drug target"],
    targets: ["Amyloid-beta (Aβ)", "BACE1", "γ-secretase", "APP"]
  },
  {
    id: "art-002",
    title: "Tau protein as a drug target in Alzheimer's disease: mechanisms and therapeutic strategies",
    authors: "Iqbal K, Liu F, Gong CX",
    year: 2023,
    journal: "Acta Neuropathologica",
    doi: "10.1007/s00401-023-002",
    source: "PubMed",
    pmid: "36500002",
    sections: {
      abstract: "Tau protein hyperphosphorylation and aggregation into neurofibrillary tangles (NFTs) is a hallmark of Alzheimer's disease and correlates more closely with cognitive decline than amyloid pathology. Tau-targeted therapeutic strategies include kinase inhibitors (targeting GSK-3β, CDK5), tau aggregation inhibitors, anti-tau immunotherapy, and antisense oligonucleotides (ASOs). Recent clinical trials with anti-tau antibodies such as semorinemab and zagotenemab have shown mixed results, while tau-targeted ASOs represent a promising new approach. This review discusses the biology of tau in AD, current therapeutic strategies, and future directions for tau-targeted drug development.",
      introduction: "Tau is a microtubule-associated protein predominantly expressed in neurons, where it plays crucial roles in microtubule stabilization, axonal transport, and neuronal signaling. In Alzheimer's disease, tau becomes abnormally hyperphosphorylated at multiple sites, leading to its detachment from microtubules, misfolding, and aggregation into paired helical filaments (PHFs) and neurofibrillary tangles (NFTs). The spread of tau pathology follows a stereotypical pattern described by Braak staging, progressing from the entorhinal cortex to the hippocampus and eventually throughout the neocortex. Multiple kinases have been implicated in tau hyperphosphorylation, including glycogen synthase kinase 3-beta (GSK-3β), cyclin-dependent kinase 5 (CDK5), and dual-specificity tyrosine phosphorylation-regulated kinase 1A (DYRK1A). Targeting these kinases represents a viable therapeutic strategy.",
      conclusion: "Tau-targeted therapies represent a critical complement to anti-amyloid approaches in AD treatment. The correlation between tau pathology and cognitive decline provides a strong rationale for targeting tau, particularly in later disease stages where amyloid-targeted therapies may be less effective. Anti-tau immunotherapy, tau aggregation inhibitors, and ASO-based approaches each offer distinct advantages. Combination therapies targeting both Aβ and tau simultaneously may provide synergistic benefits. Future research should focus on identifying the most toxic tau species, developing biomarkers for patient stratification, and optimizing delivery of tau-targeted therapeutics to the brain."
    },
    keywords: ["tau protein", "neurofibrillary tangles", "GSK-3β", "CDK5", "immunotherapy", "antisense oligonucleotides"],
    targets: ["Tau protein", "GSK-3β", "CDK5", "DYRK1A"]
  },
  {
    id: "art-003",
    title: "Neuroinflammation in Alzheimer's disease: the role of microglia and TREM2 as therapeutic targets",
    authors: "Heneka MT, Carson MJ, El Khoury J",
    year: 2023,
    journal: "The Lancet Neurology",
    doi: "10.1016/S1474-4422(23)003",
    source: "PubMed",
    pmid: "36500003",
    sections: {
      abstract: "Neuroinflammation is increasingly recognized as a key driver of Alzheimer's disease pathogenesis rather than a mere bystander. Microglia, the brain's resident immune cells, play dual roles in AD—providing neuroprotection through phagocytosis of Aβ while also contributing to neurotoxicity through release of pro-inflammatory cytokines. TREM2 (triggering receptor expressed on myeloid cells 2) has emerged as a critical regulator of microglial function in AD, with loss-of-function variants conferring significant disease risk. Therapeutic strategies targeting neuroinflammation include TREM2 agonists, NLRP3 inflammasome inhibitors, and modulators of the complement system. This review examines the role of neuroinflammation in AD and evaluates current anti-inflammatory therapeutic approaches.",
      introduction: "The role of the innate immune system in Alzheimer's disease has gained substantial attention following genome-wide association studies (GWAS) that identified numerous AD risk genes involved in immune function. Among these, TREM2 variants (particularly R47H) confer one of the strongest genetic risk factors for late-onset AD after APOE ε4. Microglia undergo phenotypic changes in AD, transitioning from homeostatic surveillance to disease-associated microglia (DAM) states. The NLRP3 inflammasome, a multiprotein complex that activates caspase-1 and promotes IL-1β release, has been implicated in Aβ-induced neuroinflammation. Complement system activation, particularly the C1q-C3 pathway, contributes to synapse elimination and neurodegeneration. Understanding these inflammatory pathways provides multiple therapeutic intervention points.",
      conclusion: "Targeting neuroinflammation represents a paradigm shift in AD therapeutics. TREM2 agonistic antibodies are currently in clinical development and may enhance microglial phagocytosis of Aβ and damaged neurons. NLRP3 inflammasome inhibitors have shown promise in preclinical models by reducing IL-1β-mediated neuroinflammation. Complement pathway inhibitors may preserve synapses by preventing C1q-mediated synaptic stripping. The challenge lies in modulating inflammation to preserve beneficial immune functions while suppressing detrimental responses. Biomarkers of neuroinflammation, such as sTREM2 and GFAP, will be essential for patient selection and monitoring therapeutic responses. Combination approaches targeting both amyloid/tau pathology and neuroinflammation may offer the most comprehensive therapeutic strategy."
    },
    keywords: ["neuroinflammation", "microglia", "TREM2", "NLRP3", "complement system", "cytokines", "innate immunity"],
    targets: ["TREM2", "NLRP3 inflammasome", "Complement C1q-C3", "Microglia"]
  },
  {
    id: "art-004",
    title: "ApoE4 as a therapeutic target: lipid metabolism and Alzheimer's disease risk",
    authors: "Yamazaki Y, Zhao N, Caulfield TR, Liu CC, Bu G",
    year: 2022,
    journal: "Nature Reviews Drug Discovery",
    doi: "10.1038/nrd.2022.004",
    source: "PubMed",
    pmid: "36500004",
    sections: {
      abstract: "Apolipoprotein E4 (ApoE4) is the strongest genetic risk factor for late-onset Alzheimer's disease, increasing risk 3-12 fold depending on zygosity. ApoE4 influences AD pathogenesis through multiple mechanisms including impaired Aβ clearance, enhanced tau phosphorylation, blood-brain barrier dysfunction, and altered lipid metabolism. Therapeutic strategies targeting ApoE4 include structure correctors that convert ApoE4 to ApoE3-like conformation, ApoE4 antisense oligonucleotides, gene therapy approaches, and small molecules that modulate ApoE lipidation. This review discusses the multifaceted role of ApoE4 in AD and evaluates emerging therapeutic strategies targeting this critical risk factor.",
      introduction: "The APOE gene exists in three common allelic variants: ε2, ε3, and ε4. The ε4 allele is present in approximately 14% of the general population but is found in 40-65% of AD patients. ApoE is the primary lipid transport protein in the brain, mediating cholesterol and phospholipid delivery to neurons through receptor-mediated endocytosis. ApoE4 differs from ApoE3 by a single amino acid substitution (C112R), which dramatically alters protein folding and function. ApoE4 shows reduced lipidation capacity, impaired receptor binding, and increased tendency to form neurotoxic fragments. Recent studies have revealed that ApoE4 also impairs microglial function, disrupts blood-brain barrier integrity, and promotes neuroinflammation through interaction with TREM2 signaling pathways.",
      conclusion: "ApoE4 represents a high-value therapeutic target given its strong genetic association with AD and its involvement in multiple pathogenic mechanisms. Structure correctors and gene therapy approaches offer the potential for fundamental correction of ApoE4-associated dysfunction. Small molecule modulators of ApoE lipidation status represent a more conventional pharmacological approach. The development of ApoE4-targeted therapies will benefit from advances in structural biology, gene editing technologies, and delivery systems capable of crossing the blood-brain barrier. Combination of ApoE4-targeted therapies with anti-amyloid or anti-tau approaches may be particularly effective in APOE4 carriers, who represent a substantial proportion of AD patients."
    },
    keywords: ["ApoE4", "lipid metabolism", "cholesterol", "blood-brain barrier", "gene therapy", "structure correctors"],
    targets: ["ApoE4", "ABCA1", "LXR receptors", "ApoE receptors"]
  },
  {
    id: "art-005",
    title: "Synaptic dysfunction in Alzheimer's disease: targeting glutamate excitotoxicity and synaptic plasticity",
    authors: "Bhatt DK, Bhatt S, Bhatt R",
    year: 2023,
    journal: "Molecular Neurobiology",
    doi: "10.1007/s12035-023-005",
    source: "PubMed",
    pmid: "36500005",
    sections: {
      abstract: "Synaptic loss is the strongest pathological correlate of cognitive decline in Alzheimer's disease. Glutamate excitotoxicity, mediated through excessive NMDA receptor activation, contributes to synaptic dysfunction and neuronal death. Beyond memantine, novel therapeutic approaches target specific NMDA receptor subunits (GluN2A, GluN2B), metabotropic glutamate receptors (mGluR5), and downstream signaling pathways including PSD-95/nNOS interaction. Additionally, compounds enhancing synaptic plasticity through AMPA receptor potentiation, BDNF/TrkB signaling, and CREB activation show promise in preclinical models. This review discusses mechanisms of synaptic dysfunction in AD and evaluates emerging synaptic targets for drug development.",
      introduction: "Synaptic dysfunction and loss represent early events in AD pathogenesis, preceding neuronal death by years or even decades. The number of synapses in the neocortex and hippocampus correlates more strongly with cognitive performance than amyloid plaques or neurofibrillary tangles. Glutamate, the primary excitatory neurotransmitter in the brain, plays a central role in synaptic transmission and plasticity. In AD, disrupted glutamate homeostasis leads to excessive extrasynaptic NMDA receptor activation, triggering excitotoxic cascades involving calcium influx, mitochondrial dysfunction, and activation of cell death pathways. Aβ oligomers directly interact with synaptic proteins and receptors, causing internalization of AMPA and NMDA receptors and disrupting long-term potentiation (LTP), the cellular basis of learning and memory.",
      conclusion: "Targeting synaptic dysfunction offers a direct approach to addressing cognitive symptoms in AD. Subunit-selective NMDA receptor modulators may provide better therapeutic windows than broad-spectrum antagonists like memantine. Enhancement of BDNF/TrkB signaling through small molecule TrkB agonists represents a promising neuroprotective strategy. CREB-activating compounds, including PDE4 inhibitors, can enhance synaptic plasticity and memory formation. The combination of synapse-protective therapies with disease-modifying approaches targeting Aβ and tau may provide both symptomatic relief and neuroprotection. Advanced imaging techniques for measuring synaptic density in vivo, such as SV2A PET, will be crucial for evaluating the efficacy of synapse-directed therapies in clinical trials."
    },
    keywords: ["synaptic dysfunction", "glutamate", "NMDA receptor", "BDNF", "TrkB", "synaptic plasticity", "excitotoxicity"],
    targets: ["NMDA receptor (GluN2B)", "mGluR5", "PSD-95", "TrkB", "PDE4", "CREB"]
  },
  {
    id: "art-006",
    title: "Mitochondrial dysfunction and oxidative stress as therapeutic targets in Alzheimer's disease",
    authors: "Swerdlow RH, Burns JM, Khan SM",
    year: 2023,
    journal: "Free Radical Biology and Medicine",
    doi: "10.1016/j.freeradbiomed.2023.006",
    source: "PubMed",
    pmid: "36500006",
    sections: {
      abstract: "Mitochondrial dysfunction is an early and prominent feature of Alzheimer's disease, contributing to bioenergetic failure, oxidative stress, and apoptosis. The mitochondrial cascade hypothesis proposes that inherited mitochondrial dysfunction drives AD pathogenesis independently of amyloid. Therapeutic targets include mitochondrial complex I (NADH dehydrogenase), sirtuins (SIRT1, SIRT3) that regulate mitochondrial biogenesis, the Nrf2/ARE antioxidant pathway, and the mitochondrial permeability transition pore (mPTP). NAD+ precursors, mitochondria-targeted antioxidants (MitoQ, SS-31), and SIRT1 activators show neuroprotective effects in preclinical AD models. This review examines the role of mitochondrial dysfunction in AD and evaluates mitochondria-directed therapeutic approaches.",
      introduction: "Mitochondria are the primary source of cellular energy through oxidative phosphorylation, and neurons are particularly dependent on mitochondrial function due to their high energy demands. In AD, mitochondrial abnormalities include reduced complex IV (cytochrome c oxidase) activity, decreased membrane potential, impaired dynamics (fission/fusion), and defective mitophagy. Aβ accumulates in mitochondria, interacting with cyclophilin D (CypD), a component of the mPTP, leading to membrane permeability and release of pro-apoptotic factors. Oxidative stress, resulting from mitochondrial electron transport chain dysfunction, generates reactive oxygen species (ROS) that damage lipids, proteins, and DNA. The transcription factor Nrf2, which activates antioxidant response element (ARE)-dependent gene expression, is impaired in AD brains.",
      conclusion: "Mitochondrial-targeted therapies represent an important but underexplored avenue for AD treatment. NAD+ boosting strategies using nicotinamide riboside (NR) or nicotinamide mononucleotide (NMN) can restore mitochondrial function and enhance neuronal resilience. Mitochondria-targeted antioxidants may provide more effective neuroprotection than conventional antioxidants by accumulating at the site of ROS production. SIRT1/SIRT3 activators can promote mitochondrial biogenesis and quality control through PGC-1α activation. The mPTP inhibitor CypD represents a druggable target with direct effects on Aβ-induced mitochondrial toxicity. Future clinical trials should incorporate mitochondrial function biomarkers, such as brain 31P-MRS and blood-based markers of oxidative stress, to evaluate therapeutic efficacy."
    },
    keywords: ["mitochondrial dysfunction", "oxidative stress", "sirtuins", "Nrf2", "NAD+", "mPTP", "ROS"],
    targets: ["SIRT1", "SIRT3", "Nrf2/ARE pathway", "mPTP/Cyclophilin D", "Mitochondrial Complex I"]
  },
  {
    id: "art-007",
    title: "Autophagy and lysosomal dysfunction in Alzheimer's disease: emerging therapeutic targets",
    authors: "Nixon RA, Yang DS",
    year: 2023,
    journal: "Neuron",
    doi: "10.1016/j.neuron.2023.007",
    source: "PubMed",
    pmid: "36500007",
    sections: {
      abstract: "Autophagy-lysosomal pathway (ALP) dysfunction is increasingly recognized as a central mechanism in Alzheimer's disease pathogenesis. Impaired autophagy leads to accumulation of damaged organelles and protein aggregates, while lysosomal acidification defects prevent efficient degradation of Aβ and tau. Key therapeutic targets include TFEB (transcription factor EB), the master regulator of lysosomal biogenesis; mTORC1, a negative regulator of autophagy; Beclin-1, essential for autophagosome formation; and cathepsins, lysosomal proteases involved in Aβ degradation. Small molecule TFEB activators, mTOR inhibitors (rapamycin analogs), and lysosomal acidification agents show promise in preclinical models. This review discusses the role of ALP dysfunction in AD and evaluates emerging therapeutic strategies.",
      introduction: "The autophagy-lysosomal pathway is the primary cellular mechanism for degradation and recycling of damaged organelles, protein aggregates, and long-lived proteins. In neurons, efficient autophagy is critical for maintaining synaptic function and preventing accumulation of toxic protein species. Multiple forms of autophagy—macroautophagy, chaperone-mediated autophagy (CMA), and microautophagy—are impaired in AD. TFEB, a member of the MiT/TFE family of transcription factors, coordinates expression of genes involved in autophagy and lysosomal biogenesis. In AD, TFEB nuclear translocation is impaired due to hyperactivation of mTORC1 signaling. Additionally, presenilin 1 (PS1) mutations, the most common cause of familial AD, directly impair lysosomal acidification by disrupting v-ATPase targeting to lysosomes.",
      conclusion: "The autophagy-lysosomal pathway offers multiple intervention points for AD therapeutics. TFEB activation through mTORC1 inhibition or direct TFEB agonists can enhance cellular clearance of both Aβ and tau aggregates. Beclin-1 enhancement through GATOR1 complex modulation represents another approach to boost autophagy. Restoring lysosomal pH through v-ATPase modulators or acidic nanoparticles may correct the fundamental degradation defect in AD. Gene therapy approaches delivering TFEB or Beclin-1 have shown efficacy in mouse models. The development of brain-penetrant, selective autophagy enhancers that avoid systemic immunosuppression associated with mTOR inhibition remains a key challenge. Biomarkers of autophagy flux and lysosomal function are needed to guide clinical development."
    },
    keywords: ["autophagy", "lysosome", "TFEB", "mTOR", "Beclin-1", "cathepsins", "protein clearance"],
    targets: ["TFEB", "mTORC1", "Beclin-1", "v-ATPase", "Cathepsin D"]
  },
  {
    id: "art-008",
    title: "The gut-brain axis in Alzheimer's disease: microbiome-based therapeutic targets",
    authors: "Vogt NM, Kerby RL, Dill-McFarland KA, Harding SJ",
    year: 2023,
    journal: "Nature Medicine",
    doi: "10.1038/nm.2023.008",
    source: "PubMed",
    pmid: "36500008",
    sections: {
      abstract: "The gut-brain axis has emerged as a novel pathway in Alzheimer's disease pathogenesis. Gut microbiome dysbiosis in AD patients is characterized by reduced microbial diversity and altered composition, with decreased Firmicutes and increased Bacteroidetes. Gut-derived metabolites, including short-chain fatty acids (SCFAs), trimethylamine N-oxide (TMAO), and bacterial amyloids, modulate neuroinflammation and Aβ aggregation through the gut-brain axis. Therapeutic targets include the gut microbiome itself (through probiotics, prebiotics, and fecal microbiota transplantation), bile acid receptors (FXR, TGR5), tryptophan metabolism (IDO1, AhR), and the vagus nerve. Clinical trials of GV-971, a sodium oligomannate that reshapes gut microbiota, have shown cognitive benefits in AD patients.",
      introduction: "The bidirectional communication between the gastrointestinal tract and the central nervous system, known as the gut-brain axis, involves neural, endocrine, immune, and metabolic pathways. The gut microbiome, comprising trillions of microorganisms, produces metabolites that can influence brain function through systemic circulation, vagal afferents, and immune signaling. Studies have consistently demonstrated altered gut microbiome composition in AD patients, including increased abundance of pro-inflammatory Escherichia/Shigella and decreased anti-inflammatory Eubacterium rectale. Gut-derived lipopolysaccharide (LPS) can trigger peripheral and central inflammation, while microbial amyloid proteins may cross-seed Aβ aggregation through molecular mimicry. The tryptophan-kynurenine pathway, modulated by gut bacteria through indoleamine 2,3-dioxygenase (IDO1), produces neuroactive metabolites that influence glutamate excitotoxicity.",
      conclusion: "The gut-brain axis represents a paradigm-expanding therapeutic frontier in AD. Microbiome-based interventions, including defined bacterial consortia and next-generation probiotics, offer the potential for non-invasive modulation of neuroinflammation. GV-971 provides proof-of-concept that gut microbiome modulation can improve cognition in AD. Targeting bile acid signaling through FXR/TGR5 modulators may address both metabolic and inflammatory components of AD. IDO1 inhibitors could shift tryptophan metabolism away from neurotoxic kynurenine pathway metabolites. Dietary interventions, including Mediterranean and ketogenic diets, may provide additional benefits through microbiome modulation. Integration of multi-omics approaches (metagenomics, metabolomics, proteomics) will be essential for understanding individual variation and personalizing microbiome-based therapies."
    },
    keywords: ["gut-brain axis", "microbiome", "neuroinflammation", "SCFAs", "TMAO", "tryptophan", "GV-971"],
    targets: ["Gut microbiome", "FXR/TGR5 receptors", "IDO1", "AhR", "Vagus nerve"]
  },
  {
    id: "art-009",
    title: "Epigenetic mechanisms as drug targets in Alzheimer's disease: HDAC inhibitors and beyond",
    authors: "Gjoneska E, Pfenning AR, Mathys H",
    year: 2022,
    journal: "Cell Reports",
    doi: "10.1016/j.celrep.2022.009",
    source: "PubMed",
    pmid: "36500009",
    sections: {
      abstract: "Epigenetic dysregulation plays a significant role in Alzheimer's disease pathogenesis, with widespread changes in DNA methylation, histone modifications, and non-coding RNA expression observed in AD brains. Histone deacetylase (HDAC) inhibitors, particularly class I HDAC inhibitors targeting HDAC2, have shown neuroprotective and cognitive-enhancing effects in AD models. Additional epigenetic targets include DNA methyltransferases (DNMTs), histone acetyltransferases (HATs such as CBP/p300), bromodomain proteins (BET family), and microRNAs (miR-132, miR-146a). This review discusses the epigenetic landscape of AD and evaluates therapeutic strategies targeting epigenetic mechanisms for AD treatment.",
      introduction: "Epigenetic modifications regulate gene expression without altering the DNA sequence and play crucial roles in neuronal development, synaptic plasticity, and memory formation. In AD, epigenetic changes are widespread and affect genes involved in synaptic function, neuroinflammation, and cell cycle regulation. HDAC2, a class I histone deacetylase, is upregulated in AD brains and contributes to transcriptional repression of synaptic plasticity genes. Conversely, HAT activity is reduced, particularly the CBP/p300 acetyltransferase complex that is essential for memory-related gene expression. DNA methylation patterns are altered at specific CpG sites in AD, affecting expression of genes including ANK1, HOXA3, and BIN1. Non-coding RNAs, including microRNAs and long non-coding RNAs, regulate post-transcriptional gene expression and are dysregulated in AD.",
      conclusion: "Epigenetic therapies offer the unique advantage of potentially reversing disease-associated gene expression changes without permanent DNA modification. Class I HDAC inhibitors, particularly HDAC2-selective compounds, show the most promise for cognitive enhancement in AD. The development of brain-penetrant, isoform-selective HDAC inhibitors is critical to minimize peripheral toxicity. BET bromodomain inhibitors represent a novel approach to modulate neuroinflammatory gene expression. MicroRNA-based therapeutics, including miR-132 mimics and anti-miR-146a oligonucleotides, could restore synaptic gene expression and reduce neuroinflammation. The integration of single-cell epigenomics with bulk tissue analysis will reveal cell-type-specific epigenetic changes and inform more targeted therapeutic approaches. Clinical development of epigenetic therapies for AD should incorporate epigenetic biomarkers in CSF or blood to monitor target engagement."
    },
    keywords: ["epigenetics", "HDAC2", "DNA methylation", "histone acetylation", "microRNA", "BET bromodomain", "gene expression"],
    targets: ["HDAC2", "CBP/p300", "BET bromodomain proteins", "DNMTs", "miR-132"]
  },
  {
    id: "art-010",
    title: "The cholinergic system in Alzheimer's disease: beyond acetylcholinesterase inhibitors",
    authors: "Hampel H, Mesulam MM, Cuello AC",
    year: 2022,
    journal: "Brain",
    doi: "10.1093/brain/awac010",
    source: "PubMed",
    pmid: "36500010",
    sections: {
      abstract: "The cholinergic hypothesis was the first major theory of Alzheimer's disease pathogenesis, leading to the development of acetylcholinesterase (AChE) inhibitors as the first approved AD treatments. While current cholinergic therapies provide modest symptomatic relief, emerging approaches target specific muscarinic (M1, M4) and nicotinic (α7-nAChR) acetylcholine receptor subtypes, choline acetyltransferase (ChAT), and nerve growth factor (NGF) signaling. M1 muscarinic receptor positive allosteric modulators (PAMs) show disease-modifying potential through reduction of Aβ and tau pathology. α7-nAChR agonists and PAMs enhance cognition and reduce neuroinflammation. This review re-evaluates the cholinergic system as a source of therapeutic targets in AD.",
      introduction: "The basal forebrain cholinergic system, including the nucleus basalis of Meynert (NBM), provides the primary cholinergic innervation to the cerebral cortex and hippocampus. Degeneration of these neurons is one of the earliest and most consistent pathological findings in AD, occurring in Braak stage I-II. The resulting cholinergic deficit correlates with cognitive impairment, particularly in attention and memory domains. Current approved therapies—donepezil, rivastigmine, and galantamine—inhibit AChE to enhance cholinergic transmission but do not prevent cholinergic neuron loss. The cholinergic system interacts extensively with amyloid and tau pathology: Aβ oligomers bind to α7-nAChR with high affinity, and muscarinic M1 receptor activation modulates APP processing and tau phosphorylation.",
      conclusion: "The cholinergic system remains a relevant therapeutic target in AD, particularly with the development of subtype-selective receptor modulators. M1 mAChR PAMs offer disease-modifying potential by simultaneously improving cognition and reducing Aβ/tau pathology. The development of biased M1 agonists that avoid β-arrestin recruitment may reduce on-target adverse effects. α7-nAChR-targeted therapies provide both cognitive enhancement and anti-inflammatory effects. NGF-based approaches, including gene therapy delivery of NGF to the basal forebrain, may prevent cholinergic neuron degeneration. Combination of next-generation cholinergic therapies with anti-amyloid or anti-tau treatments could provide both symptomatic and disease-modifying benefits. The field needs validated biomarkers of cholinergic function for clinical trial design and patient selection."
    },
    keywords: ["cholinergic system", "acetylcholinesterase", "muscarinic receptors", "nicotinic receptors", "α7-nAChR", "NGF", "M1 PAM"],
    targets: ["M1 muscarinic receptor", "α7-nAChR", "ChAT", "NGF/TrkA", "AChE"]
  },
  {
    id: "art-011",
    title: "Blood-brain barrier dysfunction in Alzheimer's disease: vascular targets for therapy",
    authors: "Sweeney MD, Sagare AP, Zlokovic BV",
    year: 2023,
    journal: "Nature Reviews Neurology",
    doi: "10.1038/nrn.2023.011",
    source: "PubMed",
    pmid: "36500011",
    sections: {
      abstract: "Blood-brain barrier (BBB) breakdown is an early biomarker of human cognitive dysfunction and is associated with Alzheimer's disease. The neurovascular unit, comprising endothelial cells, pericytes, astrocytes, and smooth muscle cells, undergoes progressive degeneration in AD. Key therapeutic targets include pericyte-derived PDGFRβ signaling, tight junction proteins (claudin-5, occludin), transporters mediating Aβ clearance across the BBB (LRP1, P-glycoprotein), and the RAGE receptor that facilitates Aβ influx into the brain. Angiopoietin-Tie2 signaling and Wnt/β-catenin pathway represent vascular-protective targets. This review examines vascular contributions to AD and evaluates BBB-directed therapeutic strategies.",
      introduction: "The BBB is formed by brain endothelial cells connected by tight junctions and surrounded by pericytes and astrocytic end-feet. In AD, BBB integrity is compromised early in the disease course, as demonstrated by increased CSF albumin ratio and dynamic contrast-enhanced MRI studies. Pericyte degeneration, marked by elevated soluble PDGFRβ (sPDGFRβ) levels in CSF, precedes tau and amyloid biomarker changes. The BBB plays a critical role in Aβ homeostasis: LRP1 mediates Aβ efflux from brain to blood, while RAGE facilitates Aβ influx from blood to brain. In AD, LRP1 expression is reduced and RAGE is upregulated, creating a net increase in brain Aβ levels. P-glycoprotein (ABCB1), another Aβ efflux transporter, is also downregulated in AD.",
      conclusion: "Vascular-directed therapies represent a complementary approach to conventional AD therapeutics. Enhancing BBB Aβ clearance through LRP1 upregulation or RAGE inhibition could reduce brain amyloid burden. Pericyte-protective strategies targeting PDGFRβ signaling may preserve BBB integrity and prevent vascular contributions to neurodegeneration. The Angiopoietin-1/Tie2 pathway offers a druggable target for vascular stabilization. Wnt/β-catenin signaling agonists could restore BBB tight junction integrity. Gene therapy approaches delivering VEGF or angiopoietin-1 to the cerebrovasculature are being explored. Clinical development requires vascular biomarkers, including sPDGFRβ and dynamic contrast-enhanced MRI, for patient selection and efficacy monitoring. The convergence of vascular dysfunction with amyloid and tau pathology supports combination therapeutic strategies."
    },
    keywords: ["blood-brain barrier", "neurovascular unit", "pericytes", "LRP1", "RAGE", "PDGFRβ", "tight junctions"],
    targets: ["LRP1", "RAGE", "PDGFRβ", "P-glycoprotein", "Tie2", "Claudin-5"]
  },
  {
    id: "art-012",
    title: "Insulin signaling and metabolic dysfunction in Alzheimer's disease: targeting brain insulin resistance",
    authors: "Arnold SE, Arvanitakis Z, Macauley-Rambach SL",
    year: 2022,
    journal: "Nature Reviews Neurology",
    doi: "10.1038/nrn.2022.012",
    source: "PubMed",
    pmid: "36500012",
    sections: {
      abstract: "Brain insulin resistance is a feature of Alzheimer's disease, even in patients without diabetes. Impaired insulin/IGF-1 signaling in AD brain leads to reduced glucose metabolism, enhanced tau phosphorylation, and impaired Aβ clearance. Therapeutic strategies targeting brain insulin resistance include intranasal insulin delivery, GLP-1 receptor agonists (liraglutide, semaglutide), insulin-sensitizing agents (pioglitazone), and modulators of downstream signaling including IRS-1, PI3K/Akt, and GSK-3β. Clinical trials with intranasal insulin have shown cognitive benefits in ApoE4 non-carriers. GLP-1 receptor agonists, widely used for diabetes, are being repurposed for AD based on neuroprotective effects in preclinical models.",
      introduction: "The brain was traditionally considered insulin-insensitive, but it is now clear that insulin signaling plays critical roles in neuronal survival, synaptic plasticity, and memory formation. Insulin receptors are highly expressed in the hippocampus and cortex—regions most affected in AD. In AD brain, insulin receptor substrate-1 (IRS-1) is inhibited by serine phosphorylation, leading to impaired PI3K/Akt signaling and disinhibition of GSK-3β, which phosphorylates tau. AD has been described as 'type 3 diabetes' due to the convergence of insulin resistance with neurodegeneration. Epidemiological studies consistently show that type 2 diabetes increases AD risk by 50-100%. Insulin degrading enzyme (IDE), a metalloprotease that degrades both insulin and Aβ, provides a direct molecular link between insulin metabolism and amyloid clearance.",
      conclusion: "Brain insulin resistance represents a modifiable risk factor and therapeutic target in AD. Intranasal insulin delivery bypasses the BBB and provides direct central nervous system effects with minimal systemic side effects. GLP-1 receptor agonists offer a particularly promising approach due to their established safety profile, neuroprotective properties, and anti-inflammatory effects. The ongoing EVOKE trial with semaglutide will provide definitive data on GLP-1RA efficacy in early AD. Combination of insulin-sensitizing approaches with anti-amyloid therapies may address complementary pathogenic mechanisms. Metabolic biomarkers, including FDG-PET and CSF insulin levels, should be incorporated in clinical trials. The high prevalence of metabolic dysfunction in AD patients makes insulin signaling a particularly impactful therapeutic target."
    },
    keywords: ["insulin resistance", "GLP-1", "brain metabolism", "glucose", "PI3K/Akt", "IDE", "type 3 diabetes"],
    targets: ["Insulin receptor/IRS-1", "GLP-1 receptor", "PI3K/Akt", "IDE", "GSK-3β"]
  },
  {
    id: "art-013",
    title: "Calcium dysregulation and ER stress as therapeutic targets in Alzheimer's disease",
    authors: "Bhatt S, Bhatt DK, Bhatt R",
    year: 2023,
    journal: "Neuropharmacology",
    doi: "10.1016/j.neuropharm.2023.013",
    source: "PubMed",
    pmid: "36500013",
    sections: {
      abstract: "Calcium (Ca²⁺) dysregulation is a fundamental mechanism in Alzheimer's disease, disrupting synaptic transmission, activating calpains, and triggering apoptosis. Presenilin mutations alter endoplasmic reticulum (ER) Ca²⁺ release through ryanodine receptors (RyR) and IP3 receptors. ER stress activates the unfolded protein response (UPR) pathways—IRE1α, PERK, and ATF6—which are chronically activated in AD brains. Therapeutic targets include RyR stabilizers (dantrolene), calpain inhibitors, SERCA modulators, and UPR pathway modulators (PERK inhibitors, IRE1α modulators). This review discusses the role of calcium homeostasis and ER stress in AD pathogenesis and evaluates emerging therapeutic strategies.",
      introduction: "Calcium ions serve as universal second messengers in neurons, regulating neurotransmitter release, synaptic plasticity, gene expression, and cell survival. Intracellular Ca²⁺ concentrations are tightly regulated through plasma membrane Ca²⁺-ATPase (PMCA), SERCA pumps, and mitochondrial Ca²⁺ uptake. In AD, multiple mechanisms contribute to Ca²⁺ dysregulation: Aβ oligomers form Ca²⁺-permeable pores in cell membranes, presenilin 1/2 mutations enhance ER Ca²⁺ release through ryanodine receptors, and voltage-gated Ca²⁺ channels (L-type, T-type) are upregulated. Elevated cytosolic Ca²⁺ activates calpains, Ca²⁺-dependent proteases that cleave key synaptic proteins and contribute to tau pathology. The ER stress response, triggered by Ca²⁺ depletion and accumulation of misfolded proteins, activates three UPR branches that initially promote cell survival but under chronic activation drive apoptosis through CHOP induction.",
      conclusion: "Calcium and ER stress pathways offer multiple druggable targets for AD. RyR stabilizers such as dantrolene have shown neuroprotective effects in AD mouse models by normalizing ER Ca²⁺ release. Selective calpain inhibitors can prevent proteolytic degradation of synaptic proteins and reduce tau cleavage. PERK pathway modulation through ISRIB, which enhances eIF2B activity, has shown remarkable neuroprotective effects in preclinical neurodegeneration models. The development of ER stress modulators that selectively activate adaptive UPR while suppressing pro-apoptotic signaling represents a sophisticated therapeutic strategy. L-type Ca²⁺ channel blockers, already approved for cardiovascular indications, could be repurposed for AD. Integration of calcium imaging biomarkers with clinical endpoints will strengthen the development of Ca²⁺-targeted therapies."
    },
    keywords: ["calcium dysregulation", "ER stress", "UPR", "ryanodine receptor", "calpain", "PERK", "presenilin"],
    targets: ["Ryanodine receptors", "Calpains", "PERK/eIF2α", "SERCA", "L-type Ca²⁺ channels"]
  },
  {
    id: "art-014",
    title: "Proteostasis network as a therapeutic target in Alzheimer's disease: ubiquitin-proteasome and heat shock proteins",
    authors: "Klaips CL, Jayaraj GG, Hartl FU",
    year: 2023,
    journal: "Nature Reviews Molecular Cell Biology",
    doi: "10.1038/nrm.2023.014",
    source: "PubMed",
    pmid: "36500014",
    sections: {
      abstract: "The proteostasis network maintains protein homeostasis through coordinated action of molecular chaperones, the ubiquitin-proteasome system (UPS), and autophagy. In Alzheimer's disease, proteostasis collapse leads to accumulation of misfolded Aβ and tau aggregates. Heat shock proteins (HSPs), particularly HSP70, HSP90, and small HSPs, represent therapeutic targets that can prevent protein aggregation and promote degradation of toxic species. HSP90 inhibitors paradoxically induce HSP70 through heat shock factor 1 (HSF1) activation, reducing tau levels. The UPS is impaired in AD, and strategies to enhance proteasomal degradation include 26S proteasome activators and deubiquitinase inhibitors. This review discusses proteostasis dysfunction in AD and evaluates strategies to restore protein quality control.",
      introduction: "Protein homeostasis, or proteostasis, is maintained by an extensive network of approximately 2,000 proteins that govern protein synthesis, folding, trafficking, and degradation. In neurons, proteostasis is particularly important due to the complex morphology of axons and dendrites, which require local protein quality control. The heat shock response (HSR), coordinated by HSF1, upregulates molecular chaperones in response to proteotoxic stress. However, the HSR declines with aging, coinciding with increased risk of neurodegenerative diseases. HSP70 family chaperones play a central role in preventing tau aggregation and promoting its degradation through the CHIP E3 ubiquitin ligase. HSP90, in contrast, can stabilize pathological tau conformations, and its inhibition promotes tau degradation through the proteasome.",
      conclusion: "Restoring proteostasis through pharmacological activation of chaperone networks and enhancement of protein degradation pathways represents a promising therapeutic strategy for AD. HSP70 inducers and HSF1 activators can broadly enhance protein quality control. Selective HSP90 inhibitors that preferentially target the HSP90-tau complex may reduce tau levels without excessive cellular stress. Enhancement of proteasomal activity through 26S proteasome activators or immunoproteasome modulators could accelerate degradation of ubiquitinated substrates. The development of PROTACs (proteolysis-targeting chimeras) for selective degradation of pathological tau represents an innovative approach. Combination of proteostasis-enhancing strategies with autophagy activators may provide comprehensive clearance of toxic protein aggregates."
    },
    keywords: ["proteostasis", "heat shock proteins", "HSP70", "HSP90", "ubiquitin-proteasome", "CHIP", "PROTAC"],
    targets: ["HSP70", "HSP90", "HSF1", "26S Proteasome", "CHIP E3 ligase"]
  },
  {
    id: "art-015",
    title: "Phosphodiesterase inhibitors as cognitive enhancers in Alzheimer's disease",
    authors: "Prickaerts J, Heckman PRA, Blokland A",
    year: 2022,
    journal: "CNS Drugs",
    doi: "10.1007/s40263-022-015",
    source: "PubMed",
    pmid: "36500015",
    sections: {
      abstract: "Phosphodiesterases (PDEs) regulate intracellular cyclic nucleotide signaling essential for synaptic plasticity and memory formation. PDE4, PDE5, and PDE9 have emerged as promising therapeutic targets in Alzheimer's disease. PDE4 inhibitors enhance cAMP/CREB signaling and improve memory in preclinical models, with newer subtype-selective PDE4D inhibitors (BPN14770) showing reduced emetic side effects. PDE5 inhibitors increase cGMP/PKG signaling and have shown neuroprotective effects. PDE9 inhibitors (BI 409306) enhance synaptic plasticity through cGMP elevation at the synapse. This review discusses the role of cyclic nucleotide signaling in AD and evaluates the therapeutic potential of PDE inhibitors.",
      introduction: "Cyclic adenosine monophosphate (cAMP) and cyclic guanosine monophosphate (cGMP) are critical second messengers in neuronal signaling, regulating synaptic plasticity through CREB-dependent gene transcription (cAMP/PKA pathway) and synaptic protein modifications (cGMP/PKG pathway). Both pathways converge on long-term potentiation (LTP), the cellular mechanism of learning and memory. In AD, both cAMP and cGMP signaling are impaired due to Aβ-mediated disruption and potentially increased PDE expression. The PDE superfamily comprises 11 families with distinct substrate specificities, tissue distributions, and subcellular localizations. PDE4 (cAMP-specific) is the most abundant PDE in the brain, while PDE9 (cGMP-specific) is highly expressed in brain regions affected in AD.",
      conclusion: "PDE inhibitors represent a well-validated approach for cognitive enhancement in AD. The next generation of subtype-selective PDE4 inhibitors, particularly PDE4D-negative allosteric modulators, promise to overcome the dose-limiting emetic effects that plagued earlier compounds. PDE9 inhibitors offer a complementary approach through cGMP enhancement, with potential synergistic effects when combined with PDE4 inhibitors. The dual PDE4/PDE5 inhibitor approach could simultaneously boost both cAMP and cGMP signaling. Clinical development should incorporate pharmacodynamic biomarkers, such as CSF cAMP/cGMP levels and EEG-based measures of synaptic function. PDE inhibitors could serve as effective combination partners with disease-modifying therapies, providing symptomatic benefit while anti-amyloid or anti-tau treatments address underlying pathology."
    },
    keywords: ["phosphodiesterase", "PDE4", "PDE5", "PDE9", "cAMP", "cGMP", "CREB", "cognitive enhancement"],
    targets: ["PDE4D", "PDE5", "PDE9", "CREB", "PKA/PKG"]
  },
  {
    id: "art-016",
    title: "Neurogenesis and neurotrophic factors as therapeutic targets in Alzheimer's disease",
    authors: "Choi SH, Bylykbashi E, Chatila ZK, Lee SW",
    year: 2023,
    journal: "Cell Stem Cell",
    doi: "10.1016/j.stem.2023.016",
    source: "PubMed",
    pmid: "36500016",
    sections: {
      abstract: "Adult hippocampal neurogenesis is impaired in Alzheimer's disease and may contribute to memory deficits. Neurotrophic factors, including BDNF, NGF, and GDNF, support neuronal survival and synaptic function but are reduced in AD brains. Therapeutic strategies targeting neurogenesis include enhancing Wnt/β-catenin signaling, modulating Notch pathway, and activating neural stem cells through exercise-mimetic compounds. BDNF delivery through gene therapy, BDNF mimetics (7,8-DHF, LM22A-4), and TrkB receptor agonists show neuroprotective effects. This review examines the therapeutic potential of enhancing neurogenesis and neurotrophic signaling in AD.",
      introduction: "Adult neurogenesis occurs primarily in two brain regions: the subventricular zone (SVZ) and the subgranular zone (SGZ) of the hippocampal dentate gyrus. Hippocampal neurogenesis is critical for pattern separation, memory encoding, and cognitive flexibility. In AD, neurogenesis is severely impaired due to toxic effects of Aβ and tau on neural stem cells, reduced neurotrophic factor support, and altered niche signaling. BDNF, the most abundant neurotrophin in the brain, plays essential roles in LTP, dendritic growth, and neuronal survival. BDNF levels are reduced in AD brain, particularly in the hippocampus and cortex, and this reduction correlates with cognitive decline. The BDNF Val66Met polymorphism, which impairs BDNF secretion, is associated with accelerated cognitive decline in AD.",
      conclusion: "Enhancing neurogenesis and neurotrophic factor signaling represents a restorative therapeutic approach in AD. BDNF-based therapies, including small molecule TrkB agonists and viral vector-mediated BDNF delivery, can promote neuronal survival and synaptic plasticity. Exercise-mimetic compounds that increase BDNF and other neurotrophic factors may provide accessible neuroprotective interventions. Wnt pathway activators can stimulate neural stem cell proliferation and differentiation. The development of blood-brain barrier-penetrant neurotrophin mimetics is a key pharmaceutical challenge. Combination of neurogenesis-promoting strategies with anti-amyloid therapies could provide both neuroprotection and regeneration. Neuroimaging markers of hippocampal volume and dentate gyrus structure can serve as biomarkers for clinical trials targeting neurogenesis."
    },
    keywords: ["neurogenesis", "BDNF", "TrkB", "neurotrophic factors", "Wnt signaling", "neural stem cells", "hippocampus"],
    targets: ["BDNF/TrkB", "Wnt/β-catenin", "Notch pathway", "GDNF/GFRα1"]
  },
  {
    id: "art-017",
    title: "Alpha-synuclein and cross-seeding mechanisms: implications for Alzheimer's disease comorbidity",
    authors: "Marsh SE, Bhatt S",
    year: 2023,
    journal: "Acta Neuropathologica Communications",
    doi: "10.1186/anc.2023.017",
    source: "PubMed",
    pmid: "36500017",
    sections: {
      abstract: "Up to 50% of Alzheimer's disease patients exhibit concomitant Lewy body pathology composed of alpha-synuclein (α-syn). Cross-seeding between Aβ, tau, and α-syn accelerates aggregate formation and exacerbates neurodegeneration. The presence of α-syn in AD brain correlates with more aggressive disease progression, suggesting that targeting α-syn may benefit a substantial subset of AD patients. Therapeutic approaches include anti-α-syn antibodies (prasinezumab), small molecule aggregation inhibitors (anle138b), and GCase (glucocerebrosidase) activators. Understanding cross-seeding mechanisms may enable combination therapies targeting multiple proteinopathies simultaneously.",
      introduction: "Alzheimer's disease and Parkinson's disease/Lewy body dementia were traditionally considered distinct entities, but neuropathological studies reveal substantial overlap. Lewy body pathology is found in approximately 50% of sporadic AD cases and 60-80% of familial AD cases with presenilin mutations. α-Synuclein is a presynaptic protein that regulates vesicle trafficking and neurotransmitter release. In pathological conditions, α-syn misfolds and aggregates into oligomers and fibrils that form Lewy bodies. In vitro and in vivo studies demonstrate that Aβ can directly seed α-syn aggregation, and conversely, α-syn can promote Aβ42 production by modulating γ-secretase activity. Tau and α-syn also exhibit synergistic pathology, with α-syn promoting tau phosphorylation through GSK-3β activation.",
      conclusion: "The high prevalence of α-syn co-pathology in AD underscores the need for therapeutic strategies addressing multiple proteinopathies. Anti-α-syn immunotherapy may benefit the large subset of AD patients with concomitant Lewy body pathology. Small molecule inhibitors of α-syn aggregation could prevent cross-seeding and slow the spread of mixed proteinopathy. GCase activators, which enhance lysosomal degradation of α-syn, may also reduce Aβ and tau burden through improved autophagy-lysosomal function. The development of multi-target directed ligands (MTDLs) that simultaneously inhibit aggregation of multiple misfolded proteins represents an innovative therapeutic approach. Clinical trials should incorporate α-syn PET imaging and CSF α-syn biomarkers to identify AD patients with mixed pathology who may benefit most from combination therapies."
    },
    keywords: ["alpha-synuclein", "Lewy body", "cross-seeding", "proteinopathy", "GCase", "aggregation inhibitors"],
    targets: ["α-Synuclein", "GCase/GBA1", "γ-secretase (in α-syn context)", "GSK-3β"]
  },
  {
    id: "art-018",
    title: "Ferroptosis and iron homeostasis as therapeutic targets in Alzheimer's disease",
    authors: "Ayton S, Lei P, Bush AI",
    year: 2023,
    journal: "Nature Reviews Neuroscience",
    doi: "10.1038/nrn.2023.018",
    source: "PubMed",
    pmid: "36500018",
    sections: {
      abstract: "Iron accumulation in the brain is a consistent feature of Alzheimer's disease and contributes to oxidative damage, Aβ aggregation, and tau phosphorylation. Ferroptosis, an iron-dependent form of regulated cell death characterized by lipid peroxidation, has been implicated in AD neurodegeneration. Therapeutic targets include iron chelators (deferiprone), GPX4 (the key ferroptosis suppressor), system Xc⁻ (cystine/glutamate antiporter), and ferroportin (iron export channel). Deferiprone is currently in Phase 2 clinical trials for AD. Additionally, lipid metabolism enzymes ACSL4 and LPCAT3 that generate ferroptosis-susceptible membrane lipids represent novel targets.",
      introduction: "Iron is essential for numerous cellular processes including mitochondrial respiration, myelination, and neurotransmitter synthesis. However, excess iron catalyzes Fenton chemistry, generating highly reactive hydroxyl radicals. In AD, iron accumulates in brain regions most affected by neurodegeneration—hippocampus and cortex—and correlates with amyloid plaque density. Aβ binds iron through histidine residues, and iron promotes Aβ oligomerization and fibrillization. Tau protein also interacts with iron, and iron overload promotes tau hyperphosphorylation through activation of CDK5 and GSK-3β. Ferroptosis is mechanistically distinct from apoptosis and necrosis, requiring iron-dependent generation of lipid peroxides through the enzyme lipoxygenase (LOX) in the context of glutathione (GSH) depletion and GPX4 inactivation.",
      conclusion: "Iron homeostasis and ferroptosis pathways represent compelling and druggable therapeutic targets in AD. Moderate iron chelation with deferiprone can reduce brain iron levels without inducing systemic iron deficiency, as demonstrated in trials for other neurological conditions. GPX4 activators and enhancers of the cystine/glutamate antiporter system Xc⁻ could prevent ferroptotic cell death. Targeting lipid metabolism through ACSL4 inhibition may reduce the pool of oxidation-susceptible membrane lipids. The development of brain-penetrant, iron-selective chelators with improved pharmacokinetic properties is a priority. Combination of iron-targeted therapies with conventional AD treatments could address oxidative mechanisms not targeted by anti-amyloid or anti-tau approaches. MRI-based iron quantification (QSM) provides a non-invasive biomarker for monitoring iron-targeted therapeutic responses."
    },
    keywords: ["ferroptosis", "iron", "GPX4", "lipid peroxidation", "deferiprone", "iron chelation", "oxidative stress"],
    targets: ["GPX4", "System Xc⁻", "Ferroportin", "ACSL4", "Iron (chelation target)"]
  },
  {
    id: "art-019",
    title: "Circadian rhythm disruption in Alzheimer's disease: clock genes as therapeutic targets",
    authors: "Musiek ES, Holtzman DM",
    year: 2023,
    journal: "Science Translational Medicine",
    doi: "10.1126/scitranslmed.2023.019",
    source: "PubMed",
    pmid: "36500019",
    sections: {
      abstract: "Circadian rhythm disruption is a common and early feature of Alzheimer's disease that exacerbates amyloid and tau pathology. The molecular clock, governed by BMAL1/CLOCK and PER/CRY transcription factor loops, regulates Aβ production and clearance through the glymphatic system. BMAL1 deletion accelerates neurodegeneration in mouse models, while pharmacological enhancement of clock function shows neuroprotective effects. Therapeutic targets include REV-ERBα/β agonists, RORα modulators, casein kinase 1δ/ε (CK1δ/ε) inhibitors, and orexin receptor antagonists (suvorexant). Light therapy and melatonin supplementation represent non-pharmacological approaches to restore circadian function.",
      introduction: "The circadian clock is a molecular oscillator present in virtually every cell, with the suprachiasmatic nucleus (SCN) serving as the master pacemaker. The core clock mechanism involves transcriptional-translational feedback loops: BMAL1 and CLOCK activate transcription of PER and CRY genes, whose protein products accumulate and inhibit BMAL1/CLOCK activity. This cycle takes approximately 24 hours and regulates numerous physiological processes including sleep-wake cycles, hormone secretion, and metabolism. In AD, circadian disruption manifests as sleep fragmentation, sundowning behavior, and altered melatonin secretion. Importantly, sleep disruption appears to precede clinical AD symptoms by years, suggesting a causal role. During sleep, the glymphatic system—a brain-wide paravascular clearance pathway—removes Aβ and other waste products, and this process is circadian-regulated.",
      conclusion: "Restoring circadian function represents a novel and potentially impactful therapeutic strategy in AD. Pharmacological modulation of clock components through REV-ERBα agonists or CK1δ/ε inhibitors could normalize molecular clock function and enhance Aβ clearance. Dual orexin receptor antagonists (DORAs) like suvorexant have shown preliminary evidence of reducing CSF Aβ and tau levels during sleep. Light therapy, timed melatonin administration, and structured sleep-wake schedules can improve circadian alignment in AD patients. The glymphatic system represents a unique target—enhancing its function through AQP4 water channel modulation could improve brain waste clearance. Future research should investigate whether circadian-targeted interventions can prevent or delay AD onset in at-risk populations. Integration of circadian biomarkers (actigraphy, melatonin rhythms) into clinical trial design will be essential."
    },
    keywords: ["circadian rhythm", "BMAL1", "glymphatic system", "sleep", "orexin", "melatonin", "clock genes"],
    targets: ["REV-ERBα/β", "CK1δ/ε", "Orexin receptors", "AQP4", "BMAL1/CLOCK"]
  },
  {
    id: "art-020",
    title: "Lipid metabolism dysregulation in Alzheimer's disease: sphingolipids and cholesterol as therapeutic targets",
    authors: "Di Paolo G, Kim TW",
    year: 2022,
    journal: "Nature Reviews Neuroscience",
    doi: "10.1038/nrn.2022.020",
    source: "PubMed",
    pmid: "36500020",
    sections: {
      abstract: "Lipid metabolism is profoundly altered in Alzheimer's disease, affecting membrane composition, signaling pathways, and protein processing. Brain cholesterol, regulated by the mevalonate pathway and ABCA1/ABCG1 transporters, directly modulates γ-secretase activity and Aβ production. Sphingolipids, including ceramide and sphingosine-1-phosphate (S1P), regulate neuronal survival and neuroinflammation. Therapeutic targets include ACAT1 (acyl-CoA:cholesterol acyltransferase), which esterifies cholesterol and modulates Aβ production; acid sphingomyelinase (ASM), elevated in AD brain; sphingosine kinases (SphK1/2); and CYP46A1 (cholesterol 24-hydroxylase) that mediates brain cholesterol turnover. Statins and LXR agonists also modulate AD-relevant lipid pathways.",
      introduction: "The brain contains approximately 25% of the body's cholesterol, almost entirely synthesized locally due to the impermeability of the blood-brain barrier to peripheral cholesterol. Cholesterol is critical for synaptic vesicle formation, myelination, and lipid raft integrity. Lipid rafts, cholesterol-rich membrane microdomains, concentrate BACE1 and γ-secretase, promoting amyloidogenic APP processing. Perturbation of cholesterol homeostasis alters Aβ generation: increased cholesterol promotes Aβ production, while cholesterol depletion favors non-amyloidogenic α-secretase processing. CYP46A1, the brain-specific enzyme for cholesterol elimination, converts cholesterol to 24S-hydroxycholesterol, which crosses the BBB and activates LXR receptors. Sphingolipid metabolism is also disrupted in AD, with increased ceramide and decreased sphingomyelin levels contributing to apoptosis and inflammation.",
      conclusion: "Lipid-targeted therapies offer a multifaceted approach to AD treatment by modulating Aβ production, neuroinflammation, and neuronal survival. ACAT1 inhibitors can reduce cholesterol esterification and decrease Aβ generation. CYP46A1 activators, such as efavirenz at low doses, enhance brain cholesterol turnover and have shown cognitive benefits in clinical studies. LXR agonists promote ABCA1-mediated cholesterol efflux and reduce neuroinflammation. ASM inhibitors and S1P receptor modulators (fingolimod) can modulate sphingolipid-mediated signaling. The repurposing of existing lipid-modifying drugs, including statins and fibrates, offers an accelerated path to clinical testing. Lipidomic biomarkers can identify patients with specific lipid metabolism disruptions who may benefit most from lipid-targeted therapies. The intersection of lipid metabolism with ApoE biology provides additional rationale for lipid-directed approaches, particularly in APOE4 carriers."
    },
    keywords: ["lipid metabolism", "cholesterol", "sphingolipids", "ceramide", "ACAT1", "CYP46A1", "lipid rafts"],
    targets: ["ACAT1", "CYP46A1", "Acid sphingomyelinase", "SphK1/2", "ABCA1"]
  },
  {
    id: "art-021",
    title: "Targeting protein aggregation in Alzheimer's disease: small molecule and antibody approaches",
    authors: "Cummings J, Lee G, Nahed P",
    year: 2023,
    journal: "Alzheimer's & Dementia",
    doi: "10.1002/alz.2023.021",
    source: "PubMed",
    pmid: "36500021",
    sections: {
      abstract: "Protein aggregation is a hallmark of Alzheimer's disease, with Aβ plaques and tau tangles representing the primary pathological features. Small molecule aggregation inhibitors, including tramiprosate (ALZ-801), EGCG, and methylene blue derivatives (LMTM), target the self-assembly process of Aβ and tau. Monoclonal antibodies against specific aggregate conformations—lecanemab (targeting Aβ protofibrils), donanemab (targeting pyroglutamate Aβ), and gantenerumab (targeting aggregated Aβ)—have shown varying degrees of clinical efficacy. This review provides a comprehensive analysis of anti-aggregation strategies in the current AD therapeutic pipeline and discusses future directions for this approach.",
      introduction: "The aggregation of normally soluble proteins into pathological assemblies is a defining feature of neurodegenerative diseases. In AD, Aβ peptides aggregate through a nucleation-dependent polymerization process, forming dimers, oligomers, protofibrils, and fibrils. Soluble Aβ oligomers are considered the most neurotoxic species, disrupting synaptic function and inducing neuroinflammation. Tau aggregation follows a similar pathway, with the conversion of soluble monomeric tau into paired helical filaments (PHFs) and neurofibrillary tangles. Cryo-EM structures of AD brain-derived tau filaments have revealed specific fold patterns that distinguish AD tau from other tauopathies. Understanding the structural basis of protein aggregation has enabled the development of conformation-specific antibodies and structure-based small molecule inhibitors.",
      conclusion: "The clinical success of anti-Aβ antibodies validates the concept of targeting protein aggregation in AD. However, the modest clinical benefits achieved suggest that combination approaches and earlier intervention are needed. Next-generation antibodies with improved selectivity for toxic species and enhanced Fc-mediated effector functions may provide greater efficacy. Small molecule aggregation inhibitors offer advantages in terms of brain penetrance, oral bioavailability, and cost, but achieving sufficient potency and selectivity remains challenging. The development of tau-specific aggregation inhibitors is an active area, with cryo-EM structural data guiding rational drug design. Multi-target approaches that simultaneously inhibit Aβ and tau aggregation may provide synergistic benefits. Seed amplification assays (SAAs) for Aβ and tau offer sensitive biomarkers for monitoring anti-aggregation therapy efficacy."
    },
    keywords: ["protein aggregation", "amyloid", "protofibrils", "lecanemab", "donanemab", "tau aggregation", "cryo-EM"],
    targets: ["Aβ protofibrils", "Pyroglutamate-Aβ", "Tau PHFs", "Aggregation nuclei"]
  },
  {
    id: "art-022",
    title: "Kinase inhibitors as disease-modifying therapies for Alzheimer's disease",
    authors: "Tell V, Bhatt DK",
    year: 2023,
    journal: "Journal of Medicinal Chemistry",
    doi: "10.1021/jmc.2023.022",
    source: "PubMed",
    pmid: "36500022",
    sections: {
      abstract: "Protein kinases are central regulators of multiple AD-relevant pathways, including tau phosphorylation, neuroinflammation, and cell death. GSK-3β, CDK5, DYRK1A, Fyn kinase, and LRRK2 have emerged as high-priority kinase targets in AD. GSK-3β phosphorylates tau at multiple AD-relevant epitopes and promotes Aβ production. Fyn kinase mediates Aβ-induced synaptic toxicity through phosphorylation of NMDA receptor subunit GluN2B. DYRK1A, overexpressed in Down syndrome, drives tau hyperphosphorylation and is linked to AD-DS pathology. LRRK2, primarily studied in Parkinson's disease, contributes to neuroinflammation in AD. This review evaluates the therapeutic potential of kinase inhibitors for AD treatment.",
      introduction: "The human kinome comprises over 500 protein kinases that regulate virtually every cellular process. In AD, dysregulation of kinase signaling contributes to multiple pathogenic mechanisms. GSK-3β, a serine/threonine kinase, phosphorylates tau at over 40 sites and is considered the primary tau kinase in vivo. CDK5, normally activated by p35, becomes hyperactivated when p35 is cleaved to p25 by calpains, leading to aberrant tau phosphorylation and cell cycle re-entry. DYRK1A, encoded on chromosome 21, is overexpressed in Down syndrome and contributes to the universal development of AD pathology in DS individuals by age 40. Fyn, a Src family tyrosine kinase, phosphorylates tau at Y18 and mediates Aβ-PrPc-mGluR5 signaling. LRRK2 kinase activity promotes microglial activation and neuroinflammation through phosphorylation of Rab GTPases.",
      conclusion: "Kinase inhibitors represent a well-established pharmacological modality with potential for disease modification in AD. The development of brain-penetrant, selective kinase inhibitors is critical to avoid off-target toxicity. GSK-3β inhibitors with improved selectivity profiles, including substrate-competitive and allosteric inhibitors, are advancing in development. DYRK1A inhibitors may be particularly relevant for AD prevention in Down syndrome populations. Fyn kinitors such as saracatinib have undergone clinical testing, though results have been mixed. LRRK2 inhibitors, extensively developed for PD, could be repurposed for AD-associated neuroinflammation. The development of multi-kinase inhibitors targeting complementary pathways (e.g., GSK-3β + CDK5) could provide enhanced efficacy. Kinase activity biomarkers in CSF or blood will be essential for demonstrating target engagement in clinical trials."
    },
    keywords: ["kinase inhibitors", "GSK-3β", "CDK5", "DYRK1A", "Fyn kinase", "LRRK2", "phosphorylation"],
    targets: ["GSK-3β", "CDK5/p25", "DYRK1A", "Fyn kinase", "LRRK2"]
  },
  {
    id: "art-023",
    title: "The role of astrocytes in Alzheimer's disease: reactive astrogliosis as a therapeutic target",
    authors: "Liddelow SA, Guttenplan KA, Clarke LE",
    year: 2023,
    journal: "Nature Neuroscience",
    doi: "10.1038/nn.2023.023",
    source: "PubMed",
    pmid: "36500023",
    sections: {
      abstract: "Astrocytes undergo reactive changes in Alzheimer's disease, transitioning to neurotoxic A1 or neuroprotective A2 phenotypes. Reactive astrogliosis contributes to neuroinflammation, synaptic dysfunction, and impaired glutamate/potassium homeostasis. Key therapeutic targets include the JAK/STAT3 pathway driving astrocyte reactivity, aquaporin-4 (AQP4) regulating glymphatic clearance, MAO-B (monoamine oxidase B) upregulated in reactive astrocytes, and the calcineurin/NFAT pathway modulating astrocyte-mediated neuroinflammation. GFAP, a marker of reactive astrogliosis, serves as both a therapeutic target and a clinical biomarker. This review discusses the role of astrocytes in AD pathogenesis and evaluates astrocyte-directed therapeutic strategies.",
      introduction: "Astrocytes are the most abundant glial cell type in the brain, performing essential functions including neurotransmitter uptake, ion homeostasis, metabolic support, and blood-brain barrier maintenance. In AD, astrocytes become reactive in response to Aβ, pro-inflammatory cytokines, and signals from activated microglia. The concept of A1 (neurotoxic) and A2 (neuroprotective) astrocyte states has provided a framework for understanding astrocyte heterogeneity in disease. A1 astrocytes, induced by microglial-derived TNFα, IL-1α, and C1q, lose normal supportive functions and gain neurotoxic properties, secreting factors that kill neurons and oligodendrocytes. The JAK/STAT3 pathway is the primary signaling cascade driving reactive astrogliosis. MAO-B is upregulated in reactive astrocytes, producing hydrogen peroxide and contributing to oxidative stress, while also generating the inhibitory neurotransmitter GABA through putrescine degradation.",
      conclusion: "Astrocyte-directed therapies represent an emerging frontier in AD treatment. Modulating astrocyte reactivity through JAK/STAT3 pathway inhibition could shift the balance from neurotoxic A1 to neuroprotective A2 phenotypes. MAO-B inhibitors, including selegiline and KDS2010, may reduce astrocyte-derived oxidative stress and aberrant GABA release. AQP4-targeted therapies could enhance glymphatic clearance of Aβ and tau. The calcineurin inhibitor FK506 (tacrolimus) at low doses shows promise in modulating astrocyte-mediated neuroinflammation. The development of astrocyte-specific drug delivery systems, potentially using GFAP promoter-driven gene therapy vectors, could enable targeted modulation of astrocyte function. Plasma GFAP is emerging as a valuable biomarker for monitoring reactive astrogliosis and could guide patient selection for astrocyte-targeted interventions."
    },
    keywords: ["astrocytes", "reactive astrogliosis", "GFAP", "JAK/STAT3", "AQP4", "MAO-B", "glymphatic system"],
    targets: ["JAK/STAT3", "MAO-B", "AQP4", "Calcineurin/NFAT", "GFAP"]
  },
  {
    id: "art-024",
    title: "Genetic risk factors and CRISPR-based therapeutic strategies for Alzheimer's disease",
    authors: "Jansen IE, Savage JE, Watanabe K",
    year: 2023,
    journal: "Nature Genetics",
    doi: "10.1038/ng.2023.024",
    source: "PubMed",
    pmid: "36500024",
    sections: {
      abstract: "Genome-wide association studies have identified over 75 genetic risk loci for Alzheimer's disease, implicating pathways including immunity (TREM2, CD33, PLCG2), endosomal trafficking (BIN1, PICALM, SORL1), and lipid metabolism (APOE, CLU, ABCA7). These genetic findings provide a rich source of therapeutic targets. CRISPR-based gene editing offers the potential for permanent correction of AD risk variants, including APOE4-to-APOE2 conversion, upregulation of protective variants (APOE-Christchurch, APP-A673T), and knockout of deleterious genes. CD33 represents a genetically validated target, with the protective CD33 variant reducing microglial phagocytosis impairment. This review discusses how AD genetics inform target selection and evaluates gene therapy approaches.",
      introduction: "The genetic architecture of late-onset AD (LOAD) is complex, with APOE ε4 conferring the strongest risk and numerous common variants of small effect contributing additively to disease susceptibility. Recent large-scale GWAS meta-analyses have expanded the number of confirmed AD risk loci to over 75, with many residing in or near genes expressed in microglia and other immune cells. BIN1, the second strongest genetic risk factor after APOE, encodes a protein involved in endosomal trafficking and tau propagation. PICALM regulates clathrin-mediated endocytosis and Aβ clearance through transcytosis across the BBB. SORL1, an endosomal sorting receptor, directs APP away from amyloidogenic processing, and loss-of-function SORL1 mutations are causally linked to AD. CD33, a sialic acid-binding immunoglobulin-like lectin expressed on microglia, inhibits Aβ phagocytosis, and the protective CD33 variant (rs12459419) results in reduced CD33 surface expression.",
      conclusion: "The integration of genetic discovery with therapeutic development represents the most rational approach to AD drug development. Genetically validated targets, including CD33, TREM2, BIN1, and SORL1, benefit from human genetic evidence supporting their causal role in AD. CRISPR-based approaches offer unprecedented precision for modifying AD risk, but delivery to the brain and off-target editing remain significant challenges. Base editing and prime editing technologies may enable safer correction of point variants like APOE4. The protective APP-A673T (Icelandic) variant, which reduces Aβ production by 40%, provides a template for therapeutic gene editing. Ex vivo gene editing of microglia derived from induced pluripotent stem cells (iPSCs) followed by transplantation is being explored as an alternative delivery strategy. The convergence of genetic insights with advances in gene editing technology promises to transform the AD therapeutic landscape."
    },
    keywords: ["GWAS", "CRISPR", "APOE", "CD33", "BIN1", "SORL1", "gene therapy", "genetic risk"],
    targets: ["CD33", "SORL1", "BIN1", "PICALM", "APOE4 (gene editing)"]
  },
  {
    id: "art-025",
    title: "Receptor tyrosine kinase signaling in Alzheimer's disease: EphB2, EphA4, and insulin receptor as drug targets",
    authors: "Fu AK, Bhatt S, Bhatt DK",
    year: 2022,
    journal: "Trends in Pharmacological Sciences",
    doi: "10.1016/j.tips.2022.025",
    source: "PubMed",
    pmid: "36500025",
    sections: {
      abstract: "Receptor tyrosine kinases (RTKs) mediate critical signaling pathways disrupted in Alzheimer's disease. EphB2, a receptor involved in synaptic plasticity and NMDA receptor trafficking, is depleted from hippocampal neurons by Aβ-induced calpain cleavage. Restoring EphB2 signaling rescues LTP deficits and cognitive function in AD models. EphA4, in contrast, promotes synaptic loss through Aβ-mediated activation, and its inhibition is neuroprotective. The insulin receptor and IGF-1 receptor mediate metabolic and trophic signaling impaired in AD brain. Colony stimulating factor 1 receptor (CSF1R) regulates microglial survival and proliferation. This review examines RTK dysregulation in AD and evaluates therapeutic strategies targeting these receptors.",
      introduction: "Receptor tyrosine kinases are transmembrane receptors that transduce extracellular signals through intracellular kinase domains, activating downstream pathways including Ras/MAPK, PI3K/Akt, and PLCγ. In the nervous system, RTKs regulate neuronal development, synaptic plasticity, and survival. EphB2 is a member of the largest RTK family (Eph receptors) and plays essential roles in dendritic spine development and NMDA receptor synaptic localization. In AD, Aβ oligomers trigger calpain-mediated cleavage and degradation of EphB2, leading to NMDA receptor mislocalization and impaired LTP. Viral-mediated EphB2 overexpression in the hippocampus reverses cognitive deficits in APP transgenic mice. EphA4 activation by Aβ promotes dendritic spine retraction through RhoA/ROCK signaling. CSF1R is essential for microglial homeostasis, and its inhibition can deplete microglia, while selective modulation may shift microglial phenotype toward neuroprotective states.",
      conclusion: "RTK-targeted therapies offer precise modulation of signaling pathways critical for synaptic function and neuroinflammation in AD. EphB2 enhancement through peptidomimetic agonists or prevention of its degradation represents a synaptic rescue strategy. EphA4 antagonists can prevent Aβ-mediated synaptic degeneration. CSF1R modulators offer a means to reprogram microglial phenotype without complete depletion. The insulin receptor/IGF-1R signaling axis intersects with multiple AD pathways and is amenable to pharmacological intervention with existing compounds. Development of brain-penetrant RTK modulators with appropriate selectivity profiles remains challenging. The combination of RTK-targeted approaches with anti-amyloid therapies could address both upstream pathology and downstream synaptic dysfunction. Synaptic density PET imaging (SV2A-PET) provides a relevant biomarker for evaluating synapse-directed RTK therapies in clinical trials."
    },
    keywords: ["receptor tyrosine kinase", "EphB2", "EphA4", "insulin receptor", "CSF1R", "synaptic plasticity"],
    targets: ["EphB2", "EphA4", "CSF1R", "Insulin receptor/IGF-1R"]
  },
  {
    id: "art-026",
    title: "Endosomal-lysosomal trafficking defects in Alzheimer's disease: SORL1, Retromer, and BIN1 as therapeutic targets",
    authors: "Small SA, Bhatt S",
    year: 2023,
    journal: "The Journal of Clinical Investigation",
    doi: "10.1172/JCI.2023.026",
    source: "PubMed",
    pmid: "36500026",
    sections: {
      abstract: "Endosomal trafficking dysfunction is an early and fundamental feature of Alzheimer's disease. The retromer complex, a protein assembly that mediates endosome-to-Golgi retrieval, is deficient in AD brains, leading to increased amyloidogenic processing of APP. SORL1, a retromer-associated sorting receptor, directs APP away from endosomal compartments where BACE1 cleaves it. BIN1, the second most significant AD risk gene, regulates endosomal trafficking and tau propagation. Therapeutic strategies include retromer stabilizers (R33, pharmacological chaperones), SORL1 expression enhancers, and BIN1 modulators. This review discusses endosomal trafficking as a convergent pathogenic mechanism and evaluates therapeutic interventions.",
      introduction: "The endosomal-lysosomal system is responsible for sorting, recycling, and degrading cellular cargo, including membrane proteins and receptors. In AD, enlarged early endosomes are observed in neurons even before the appearance of amyloid plaques, suggesting that endosomal dysfunction is an initiating event. The retromer complex (VPS26-VPS29-VPS35) retrieves cargo from endosomes and delivers it to the trans-Golgi network or plasma membrane. Retromer deficiency increases the residence time of APP in endosomes, where it encounters BACE1, leading to enhanced Aβ production. SORL1 binds APP and directs it to retromer-mediated recycling pathways; reduced SORL1 expression increases Aβ production, while SORL1 loss-of-function mutations cause familial AD. BIN1 (Bridging Integrator 1) regulates endosomal trafficking and has been implicated in tau propagation through cell-to-cell spread of tau seeds.",
      conclusion: "Endosomal trafficking represents a genetically validated and mechanistically compelling therapeutic target in AD. Retromer stabilizers, which enhance retromer complex assembly and function, can reduce Aβ production by redirecting APP away from endosomal BACE1. Pharmacological chaperones that stabilize VPS35 or enhance VPS26/VPS29 binding show promise in preclinical models. SORL1 expression can be upregulated through BDNF/TrkB signaling or retinoic acid receptor agonists, providing a non-genetic approach to enhance APP sorting. BIN1-targeted approaches may address tau propagation, potentially slowing the spread of tau pathology across brain regions. The convergence of genetic evidence (SORL1, BIN1, PICALM) with cell biological mechanisms provides strong rationale for developing endosome-targeted therapies. Integration of endosomal biomarkers with clinical outcomes will be essential for clinical development."
    },
    keywords: ["endosomal trafficking", "retromer", "SORL1", "BIN1", "APP processing", "VPS35", "endosome"],
    targets: ["Retromer complex (VPS35)", "SORL1", "BIN1", "PICALM"]
  },
  {
    id: "art-027",
    title: "Sigma-1 receptor and ER-mitochondria contact sites as therapeutic targets in Alzheimer's disease",
    authors: "Maurice T, Bhatt S",
    year: 2022,
    journal: "Pharmacology & Therapeutics",
    doi: "10.1016/j.pharmthera.2022.027",
    source: "PubMed",
    pmid: "36500027",
    sections: {
      abstract: "The sigma-1 receptor (σ1R) is a unique ligand-operated chaperone residing at the endoplasmic reticulum-mitochondria interface (MAM). σ1R regulates calcium transfer between ER and mitochondria, modulates ER stress responses, and maintains proteostasis. In AD, σ1R expression is reduced, and MAM function is disrupted, leading to altered lipid metabolism, calcium dysregulation, and impaired autophagy. σ1R agonists (ANAVEX2-73/blarcamesine, PRE-084) show neuroprotective effects in AD models by restoring MAM function. Blarcamesine is currently in Phase 2b/3 clinical trials for AD. Additional MAM-associated targets include MFN2, VDAC1, and IP3R3. This review discusses σ1R and MAM biology in AD and evaluates therapeutic opportunities.",
      introduction: "The sigma-1 receptor is a 223-amino acid transmembrane protein located primarily at the mitochondria-associated ER membrane (MAM), a specialized subdomain of the ER that forms close contacts with mitochondria. At the MAM, σ1R regulates IP3R-mediated calcium transfer to mitochondria through VDAC1, modulates the unfolded protein response sensor IRE1α, and participates in lipid biosynthesis and transfer. MAMs are increasingly recognized as critical signaling hubs that coordinate calcium homeostasis, lipid metabolism, autophagy initiation, and inflammasome activation. In AD, MAM function is altered: presenilin 1 and presenilin 2 are enriched at MAMs and regulate calcium transfer and lipid synthesis. Aβ accumulates at MAMs and disrupts ER-mitochondria calcium coupling. The surface area of ER-mitochondria contacts is increased in AD cell models, leading to enhanced cholesterol and ceramide synthesis.",
      conclusion: "The sigma-1 receptor and MAM biology represent an innovative therapeutic paradigm in AD. σ1R agonists provide multimodal neuroprotection by simultaneously addressing calcium dysregulation, ER stress, mitochondrial dysfunction, and impaired autophagy—multiple pathogenic mechanisms converging at the MAM. Blarcamesine's Phase 2b/3 clinical trial will provide important evidence for MAM-directed therapy in AD. Modulation of ER-mitochondria contact site dynamics through MFN2 or VAPB-PTPIP51 interaction could provide additional therapeutic leverage. The unique pharmacology of σ1R, operating as a ligand-sensitive chaperone rather than a classical receptor, requires specialized drug design approaches. Development of PET tracers for σ1R imaging will enable assessment of target engagement and receptor occupancy in clinical trials. The integration of σ1R-targeted therapy with conventional AD treatments could address the multifactorial nature of AD through a single molecular target."
    },
    keywords: ["sigma-1 receptor", "MAM", "ER-mitochondria", "calcium signaling", "blarcamesine", "ANAVEX2-73", "chaperone"],
    targets: ["Sigma-1 receptor", "MAM complex", "MFN2", "VDAC1", "IP3R3"]
  },
  {
    id: "art-028",
    title: "Complement system activation in Alzheimer's disease: C3 and C5 as druggable targets for synapse protection",
    authors: "Hong S, Bhatt S, Bhatt DK",
    year: 2023,
    journal: "Immunity",
    doi: "10.1016/j.immuni.2023.028",
    source: "PubMed",
    pmid: "36500028",
    sections: {
      abstract: "The complement system, a key component of innate immunity, is aberrantly activated in Alzheimer's disease and contributes to synapse elimination and neuroinflammation. C1q, the initiator of the classical complement pathway, tags synapses for elimination by microglia through C3/CR3 signaling. C5a, generated by C5 cleavage, promotes neuroinflammation through C5aR1 activation on microglia. Genetic deletion of C3 or C1q protects against synapse loss in AD mouse models. Therapeutic approaches include C3 inhibitors (AMY-101, compstatin analogs), C5aR1 antagonists (PMX205, avdoralimab), and anti-C1q antibodies (ANX005). This review discusses complement-mediated neurodegeneration in AD and evaluates complement-targeted therapeutic strategies.",
      introduction: "The complement system comprises over 40 proteins organized into three activation pathways: classical (C1q-dependent), lectin (MBL-dependent), and alternative (spontaneous C3 hydrolysis). In the developing brain, complement-mediated synaptic pruning is essential for circuit refinement. However, inappropriate reactivation of this developmental pruning mechanism in AD leads to pathological synapse loss. C1q is dramatically upregulated in AD brain, particularly in regions of high synaptic loss, and colocalizes with synaptic markers. C1q binds to synapses through interactions with exposed phosphatidylserine and Aβ-associated epitopes. This triggers the classical cascade, generating C3b which opsonizes synapses for phagocytic removal by CR3-expressing microglia. The terminal complement pathway generates C5a, a potent inflammatory mediator, and C5b-9 (membrane attack complex), which can directly damage neurons.",
      conclusion: "Complement-targeted therapies offer a unique approach to AD treatment by directly preventing synapse loss, the strongest correlate of cognitive decline. Anti-C1q antibodies can prevent the initiation of complement-mediated synaptic pruning. C3 inhibitors provide broader protection by blocking the convergence point of all three activation pathways. C5aR1 antagonists can reduce complement-driven neuroinflammation without completely blocking complement function, potentially preserving beneficial roles in Aβ clearance. The challenge is balancing complement inhibition to prevent synapse destruction while maintaining sufficient complement activity for Aβ and debris clearance. Complement biomarkers in CSF (C3a, C5a, sC5b-9) and plasma can monitor therapeutic responses. The combination of complement inhibitors with anti-amyloid antibodies warrants careful investigation, as complement activation contributes to ARIA pathophysiology and anti-amyloid antibody effector function."
    },
    keywords: ["complement system", "C1q", "C3", "C5a", "synapse elimination", "microglia", "innate immunity"],
    targets: ["C1q", "C3", "C5/C5aR1", "CR3", "MAC (C5b-9)"]
  },
  {
    id: "art-029",
    title: "Senescence and senolytics in Alzheimer's disease: clearing senescent cells as a therapeutic strategy",
    authors: "Bussian TJ, Aziz A, Meyer CF",
    year: 2023,
    journal: "Nature Aging",
    doi: "10.1038/naging.2023.029",
    source: "PubMed",
    pmid: "36500029",
    sections: {
      abstract: "Cellular senescence, a state of irreversible growth arrest accompanied by a pro-inflammatory secretory phenotype (SASP), accumulates in Alzheimer's disease brain. Senescent astrocytes, microglia, and oligodendrocyte precursor cells contribute to neuroinflammation and neurodegeneration. Senolytic drugs, which selectively eliminate senescent cells, have shown remarkable therapeutic effects in AD mouse models. Dasatinib plus quercetin (D+Q), navitoclax (ABT-263), and fisetin reduce tau pathology, neuroinflammation, and cognitive decline in preclinical studies. Key senescence regulators—p16INK4a, p21CIP1, BCL-2 family anti-apoptotic proteins, and SASP factors—represent therapeutic targets. This review discusses the role of cellular senescence in AD and evaluates senolytic therapeutic strategies.",
      introduction: "Cellular senescence was originally described as the irreversible growth arrest of somatic cells after exhaustive replication (replicative senescence), but is now recognized as a stress response triggered by DNA damage, oncogene activation, mitochondrial dysfunction, and other cellular stresses. Senescent cells are characterized by expression of p16INK4a and/or p21CIP1, resistance to apoptosis through upregulation of BCL-2/BCL-xL/BCL-W anti-apoptotic proteins, and secretion of a complex mixture of pro-inflammatory cytokines, chemokines, and proteases collectively termed the SASP. In AD brain, senescent glial cells accumulate in regions of tau pathology. Senescent astrocytes exhibit reduced glutamate uptake and neurotrophic support while secreting pro-inflammatory SASP factors. Senescent microglia show impaired phagocytic capacity and enhanced pro-inflammatory signaling. Tau pathology itself can drive senescence through DNA damage and cell cycle dysregulation.",
      conclusion: "Senolytic therapy represents a paradigm-shifting approach to AD treatment. By removing senescent cells, senolytics address the source of chronic neuroinflammation rather than individual inflammatory mediators. The intermittent dosing schedule possible with senolytics—hit-and-run approach—may reduce adverse effects while maintaining efficacy. Dasatinib + quercetin and fisetin are being tested in clinical trials for AD and related conditions. Next-generation senolytics with improved brain penetrance and glial selectivity are needed. SASP inhibitors, including JAK/STAT and NF-κB pathway inhibitors, offer an alternative to complete senescent cell clearance. The identification of brain-specific senescence biomarkers, potentially through CSF proteomic analysis, will enable patient selection and monitoring. Integration of senolytic therapy with disease-modifying treatments could address the inflammatory milieu that perpetuates neurodegeneration beyond initial Aβ and tau pathology."
    },
    keywords: ["senescence", "senolytics", "SASP", "p16INK4a", "BCL-2", "dasatinib", "quercetin", "neuroinflammation"],
    targets: ["BCL-2/BCL-xL", "p16INK4a/p21CIP1", "SASP pathway", "NF-κB", "JAK/STAT"]
  },
  {
    id: "art-030",
    title: "Multi-target directed ligands (MTDLs) for Alzheimer's disease: designing polypharmacology",
    authors: "Cavalli A, Bolognesi ML, Minarini A",
    year: 2023,
    journal: "Journal of Medicinal Chemistry",
    doi: "10.1021/jmc.2023.030",
    source: "PubMed",
    pmid: "36500030",
    sections: {
      abstract: "The multifactorial nature of Alzheimer's disease has driven the development of multi-target directed ligands (MTDLs) that simultaneously modulate two or more disease-relevant targets. Successful MTDL strategies include AChE/BACE1 dual inhibitors, AChE/MAO-B dual inhibitors, GSK-3β/CDK5 dual kinase inhibitors, and compounds combining metal chelation with Aβ aggregation inhibition. Ladostigil, a dual AChE/MAO-B inhibitor, has undergone Phase 2 clinical trials. Donepezil-based hybrids incorporating additional pharmacophores represent the most clinically advanced MTDL approach. This review discusses the design principles, challenges, and therapeutic potential of MTDLs for AD.",
      introduction: "Alzheimer's disease involves the simultaneous dysregulation of multiple biological pathways, including amyloid processing, tau phosphorylation, cholinergic signaling, oxidative stress, and neuroinflammation. The 'one drug, one target' paradigm has largely failed in AD clinical trials, suggesting that modulating a single pathway may be insufficient for meaningful clinical benefit. Multi-target directed ligands (MTDLs) aim to address the complex pathophysiology of AD by incorporating pharmacophoric elements for two or more targets within a single molecular scaffold. The MTDL approach offers advantages over drug combinations, including simplified pharmacokinetics, reduced drug-drug interactions, and improved patient compliance. Key design strategies include framework combination (merging two pharmacophores), framework integration (creating overlapping pharmacophores), and fragment linking (connecting two active fragments with a spacer).",
      conclusion: "MTDLs represent an innovative approach to the complex pharmacotherapy of AD. The most promising MTDL combinations target synergistic pathways—for example, combining cholinergic enhancement (AChE inhibition) with neuroprotection (MAO-B inhibition or antioxidant activity). The challenge lies in optimizing potency at multiple targets while maintaining drug-like properties (molecular weight, lipophilicity, brain penetrance). Computational approaches, including molecular docking, machine learning, and fragment-based design, are accelerating MTDL discovery. The clinical development of MTDLs requires demonstration of engagement at each target and contribution of each pharmacological activity to clinical benefit. Regulatory pathways for multi-target agents may need adaptation, as traditional dose-response relationships become more complex. Despite challenges, MTDLs align with the growing recognition that AD requires comprehensive therapeutic approaches."
    },
    keywords: ["multi-target", "MTDL", "polypharmacology", "AChE", "BACE1", "MAO-B", "drug design", "combination therapy"],
    targets: ["Multiple targets (MTDL approach)", "AChE + BACE1", "AChE + MAO-B", "GSK-3β + CDK5"]
  }
];

export function getFullText(article: Article): string {
  return `${article.sections.abstract} ${article.sections.introduction} ${article.sections.conclusion}`;
}

export function getAllTargets(): { target: string; count: number; articles: string[] }[] {
  const targetMap = new Map<string, string[]>();
  articles.forEach(article => {
    article.targets.forEach(target => {
      const existing = targetMap.get(target) || [];
      existing.push(article.id);
      targetMap.set(target, existing);
    });
  });
  return Array.from(targetMap.entries())
    .map(([target, articleIds]) => ({ target, count: articleIds.length, articles: articleIds }))
    .sort((a, b) => b.count - a.count);
}

export function getAllKeywords(): { keyword: string; count: number }[] {
  const keywordMap = new Map<string, number>();
  articles.forEach(article => {
    article.keywords.forEach(kw => {
      keywordMap.set(kw, (keywordMap.get(kw) || 0) + 1);
    });
  });
  return Array.from(keywordMap.entries())
    .map(([keyword, count]) => ({ keyword, count }))
    .sort((a, b) => b.count - a.count);
}
