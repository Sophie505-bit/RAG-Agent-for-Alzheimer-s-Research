import { useState } from "react";
import { QueryInterface } from "@/components/QueryInterface";
import { ExploratoryAnalysis } from "@/components/ExploratoryAnalysis";
import { Methodology } from "@/components/Methodology";
import { Brain, MessageSquare, BarChart3, BookOpen } from "lucide-react";

type Tab = "query" | "eda" | "methodology";

export function App() {
  const [activeTab, setActiveTab] = useState<Tab>("query");

  const tabs: { id: Tab; label: string; icon: typeof Brain }[] = [
    { id: "query", label: "RAG Query", icon: MessageSquare },
    { id: "eda", label: "EDA", icon: BarChart3 },
    { id: "methodology", label: "Methodology", icon: BookOpen },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200/50">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-800 leading-tight">AD Target Discovery</h1>
            <p className="text-xs text-slate-400">RAG Agent for Alzheimer&apos;s Disease Research</p>
          </div>
        </div>
        <nav className="flex gap-1 bg-slate-100 rounded-xl p-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-hidden">
        {activeTab === "query" && <QueryInterface />}
        {activeTab === "eda" && (
          <div className="h-full overflow-y-auto">
            <ExploratoryAnalysis />
          </div>
        )}
        {activeTab === "methodology" && (
          <div className="h-full overflow-y-auto">
            <Methodology />
          </div>
        )}
      </main>
    </div>
  );
}
