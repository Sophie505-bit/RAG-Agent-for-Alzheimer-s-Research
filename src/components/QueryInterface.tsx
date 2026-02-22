import { useState, useRef } from "react";
import { Search, Send, ChevronDown, ChevronUp, ExternalLink, Clock, BarChart3, FileText, Sparkles } from "lucide-react";
import { retrieve, generateResponse, computeMetrics, type RetrievalResult, type RAGMetrics } from "@/utils/rag";

const EXAMPLE_QUERIES = [
  "What are potential targets for Alzheimer's disease treatment?",
  "Are the targets druggable with small molecules, biologics, or other modalities?",
  "What additional studies are needed to advance these targets?",
  "What is the role of neuroinflammation and microglia in Alzheimer's disease?",
  "How does tau phosphorylation contribute to neurodegeneration?",
  "What is the gut-brain axis connection in Alzheimer's disease?",
  "What epigenetic targets exist for Alzheimer's treatment?",
  "How does iron accumulation and ferroptosis contribute to AD?",
];

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  results?: RetrievalResult[];
  metrics?: RAGMetrics;
}

export function QueryInterface() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedSources, setExpandedSources] = useState<Record<string, boolean>>({});
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleQuery = async (q: string) => {
    if (!q.trim()) return;
    const userQuery = q.trim();
    setQuery("");
    setLoading(true);

    setMessages(prev => [...prev, { role: "user", content: userQuery }]);

    // Simulate a small delay for UX
    await new Promise(resolve => setTimeout(resolve, 300));

    const start = performance.now();
    const results = retrieve(userQuery, 5);
    const elapsed = performance.now() - start;
    const response = generateResponse(userQuery, results);
    const metrics = computeMetrics(results, elapsed);

    setMessages(prev => [...prev, {
      role: "assistant",
      content: response,
      results,
      metrics
    }]);

    setLoading(false);
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const toggleSource = (key: string) => {
    setExpandedSources(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const renderMarkdown = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      // Bold text
      let processed = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      // Italic
      processed = processed.replace(/\*(.+?)\*/g, '<em>$1</em>');
      
      if (line.startsWith("- ")) {
        return <li key={i} className="ml-4 text-slate-700" dangerouslySetInnerHTML={{ __html: processed.substring(2) }} />;
      }
      if (line.trim() === "") {
        return <br key={i} />;
      }
      return <p key={i} className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: processed }} />;
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">RAG Agent for Alzheimer&apos;s Research</h2>
            <p className="text-slate-500 mb-8 max-w-lg">
              Ask questions about potential therapeutic targets for Alzheimer&apos;s disease. 
              The system retrieves relevant scientific articles and generates evidence-based responses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
              {EXAMPLE_QUERIES.map((eq, i) => (
                <button
                  key={i}
                  onClick={() => handleQuery(eq)}
                  className="text-left p-3 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all text-sm text-slate-600 hover:text-indigo-700"
                >
                  <Search className="w-3.5 h-3.5 inline mr-2 text-indigo-400" />
                  {eq}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-4xl ${msg.role === "user" ? "bg-indigo-600 text-white rounded-2xl rounded-br-md px-5 py-3" : "w-full"}`}>
              {msg.role === "user" ? (
                <p>{msg.content}</p>
              ) : (
                <div className="space-y-4">
                  {/* Metrics Bar */}
                  {msg.metrics && (
                    <div className="flex flex-wrap gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        {msg.metrics.queryTime.toFixed(1)}ms
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FileText className="w-3.5 h-3.5" />
                        {msg.metrics.documentsRetrieved} docs retrieved
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <BarChart3 className="w-3.5 h-3.5" />
                        Avg score: {msg.metrics.avgRelevanceScore.toFixed(4)}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Sparkles className="w-3.5 h-3.5" />
                        {msg.metrics.uniqueTargetsFound} targets found
                      </span>
                    </div>
                  )}

                  {/* Generated Response */}
                  <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">Generated Response</span>
                    </div>
                    <div className="prose prose-sm max-w-none">
                      {renderMarkdown(msg.content)}
                    </div>
                  </div>

                  {/* Retrieved Sources */}
                  {msg.results && msg.results.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-indigo-500" />
                        Retrieved Sources ({msg.results.length})
                      </h4>
                      {msg.results.map((r, ri) => {
                        const key = `${idx}-${ri}`;
                        const isExpanded = expandedSources[key];
                        return (
                          <div key={ri} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                            <button
                              onClick={() => toggleSource(key)}
                              className="w-full flex items-start gap-3 p-4 text-left hover:bg-slate-50 transition-colors"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">
                                {ri + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-800 leading-tight">{r.article.title}</p>
                                <p className="text-xs text-slate-500 mt-1">
                                  {r.article.authors} · {r.article.journal} ({r.article.year}) · {r.article.source}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                                    Score: {r.score.toFixed(4)}
                                  </span>
                                  {r.article.targets.slice(0, 3).map((t, ti) => (
                                    <span key={ti} className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                            </button>
                            {isExpanded && (
                              <div className="px-4 pb-4 border-t border-slate-100">
                                <div className="mt-3 space-y-3">
                                  <div>
                                    <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Abstract</h5>
                                    <p className="text-sm text-slate-600 leading-relaxed">{r.article.sections.abstract}</p>
                                  </div>
                                  <div>
                                    <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Key Conclusion</h5>
                                    <p className="text-sm text-slate-600 leading-relaxed">{r.article.sections.conclusion}</p>
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {r.article.keywords.map((kw, ki) => (
                                      <span key={ki} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-md">{kw}</span>
                                    ))}
                                  </div>
                                  <div className="flex items-center gap-2 text-xs text-slate-400">
                                    <ExternalLink className="w-3 h-3" />
                                    DOI: {r.article.doi}
                                    {r.article.pmid && ` · PMID: ${r.article.pmid}`}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
                <span className="text-sm text-slate-500">Retrieving & generating...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-200 bg-white p-4">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleQuery(query)}
            placeholder="Ask about Alzheimer's disease therapeutic targets..."
            className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-700 placeholder-slate-400"
            disabled={loading}
          />
          <button
            onClick={() => handleQuery(query)}
            disabled={loading || !query.trim()}
            className="px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
