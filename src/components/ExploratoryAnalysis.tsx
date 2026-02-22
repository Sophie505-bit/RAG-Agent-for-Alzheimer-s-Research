import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Treemap } from "recharts";
import { articles, getAllTargets, getAllKeywords } from "@/data/articles";
import { BookOpen, Target, Tag, Calendar, Database } from "lucide-react";

const COLORS = [
  "#6366f1", "#8b5cf6", "#a855f7", "#d946ef", "#ec4899",
  "#f43f5e", "#ef4444", "#f97316", "#eab308", "#22c55e",
  "#14b8a6", "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6"
];

export function ExploratoryAnalysis() {
  const stats = useMemo(() => {
    const yearDist = new Map<number, number>();
    const journalDist = new Map<string, number>();
    const sourceDist = new Map<string, number>();
    let totalWords = 0;
    const sectionLengths = { abstract: 0, introduction: 0, conclusion: 0 };

    articles.forEach(a => {
      yearDist.set(a.year, (yearDist.get(a.year) || 0) + 1);
      journalDist.set(a.journal, (journalDist.get(a.journal) || 0) + 1);
      sourceDist.set(a.source, (sourceDist.get(a.source) || 0) + 1);

      const absWords = a.sections.abstract.split(/\s+/).length;
      const introWords = a.sections.introduction.split(/\s+/).length;
      const concWords = a.sections.conclusion.split(/\s+/).length;
      totalWords += absWords + introWords + concWords;
      sectionLengths.abstract += absWords;
      sectionLengths.introduction += introWords;
      sectionLengths.conclusion += concWords;
    });

    return {
      totalArticles: articles.length,
      totalWords,
      avgWordsPerArticle: Math.round(totalWords / articles.length),
      yearData: Array.from(yearDist.entries()).map(([year, count]) => ({ year: year.toString(), count })).sort((a, b) => a.year.localeCompare(b.year)),
      journalData: Array.from(journalDist.entries()).map(([name, value]) => ({ name: name.length > 25 ? name.substring(0, 22) + "..." : name, fullName: name, value })).sort((a, b) => b.value - a.value).slice(0, 10),
      sourceData: Array.from(sourceDist.entries()).map(([name, value]) => ({ name, value })),
      sectionData: [
        { name: "Abstract", value: Math.round(sectionLengths.abstract / articles.length) },
        { name: "Introduction", value: Math.round(sectionLengths.introduction / articles.length) },
        { name: "Conclusion", value: Math.round(sectionLengths.conclusion / articles.length) }
      ]
    };
  }, []);

  const topTargets = useMemo(() => getAllTargets().slice(0, 15), []);
  const topKeywords = useMemo(() => getAllKeywords().slice(0, 20), []);

  const targetTreeData = useMemo(() => {
    return topTargets.map((t, i) => ({
      name: t.target,
      size: t.count,
      fill: COLORS[i % COLORS.length]
    }));
  }, [topTargets]);

  // Custom Treemap content
  const TreemapContent = (props: { x: number; y: number; width: number; height: number; name: string; fill: string }) => {
    const { x, y, width, height, name, fill } = props;
    if (width < 30 || height < 20) return null;
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill={fill} stroke="#fff" strokeWidth={2} rx={4} />
        {width > 50 && height > 30 && (
          <text x={x + width / 2} y={y + height / 2} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={Math.min(11, width / 8)} fontWeight="600">
            {name.length > width / 7 ? name.substring(0, Math.floor(width / 7)) + "…" : name}
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="p-6 space-y-8 overflow-y-auto">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Exploratory Data Analysis</h2>
        <p className="text-slate-500">Analysis of {stats.totalArticles} curated scientific articles on Alzheimer&apos;s disease therapeutic targets</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-600 mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Articles</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">{stats.totalArticles}</p>
          <p className="text-xs text-slate-400 mt-1">From PubMed & bioRxiv</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 text-purple-600 mb-2">
            <Database className="w-5 h-5" />
            <span className="text-sm font-medium">Total Words</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">{(stats.totalWords / 1000).toFixed(1)}k</p>
          <p className="text-xs text-slate-400 mt-1">~{stats.avgWordsPerArticle} per article</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 text-pink-600 mb-2">
            <Target className="w-5 h-5" />
            <span className="text-sm font-medium">Unique Targets</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">{getAllTargets().length}</p>
          <p className="text-xs text-slate-400 mt-1">Therapeutic targets identified</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 mb-2">
            <Tag className="w-5 h-5" />
            <span className="text-sm font-medium">Keywords</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">{getAllKeywords().length}</p>
          <p className="text-xs text-slate-400 mt-1">Unique research keywords</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Year Distribution */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-500" />
            Publication Year Distribution
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={stats.yearData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} name="Articles" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Section Length */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-500" />
            Average Section Length (words)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={stats.sectionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={90} />
              <Tooltip />
              <Bar dataKey="value" fill="#8b5cf6" radius={[0, 4, 4, 0]} name="Avg Words" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Targets Bar Chart */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <Target className="w-4 h-4 text-pink-500" />
            Top 15 Therapeutic Targets by Mention Frequency
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={topTargets} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis dataKey="target" type="category" tick={{ fontSize: 10 }} width={140} />
              <Tooltip />
              <Bar dataKey="count" fill="#ec4899" radius={[0, 4, 4, 0]} name="Articles" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Target Treemap */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-500" />
            Target Landscape (Treemap)
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <Treemap
              data={targetTreeData}
              dataKey="size"
              aspectRatio={4 / 3}
              stroke="#fff"
              content={<TreemapContent x={0} y={0} width={0} height={0} name="" fill="" />}
            />
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Journal Distribution Pie */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-500" />
            Journal Distribution
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={stats.journalData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                nameKey="name"
                label={({ name, percent }: { name?: string; percent?: number }) => `${name ?? ""} (${(((percent ?? 0)) * 100).toFixed(0)}%)`}
                labelLine={true}
              >
                {stats.journalData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Keywords */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <Tag className="w-4 h-4 text-orange-500" />
            Keyword Cloud (Top 20)
          </h3>
          <div className="flex flex-wrap gap-2 p-4">
            {topKeywords.map((kw, i) => {
              const maxCount = topKeywords[0].count;
              const size = 0.7 + (kw.count / maxCount) * 1.3;
              return (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full font-medium transition-transform hover:scale-110 cursor-default"
                  style={{
                    fontSize: `${size}rem`,
                    backgroundColor: `${COLORS[i % COLORS.length]}15`,
                    color: COLORS[i % COLORS.length],
                    borderWidth: 1,
                    borderColor: `${COLORS[i % COLORS.length]}30`,
                  }}
                >
                  {kw.keyword}
                  <sup className="ml-1 text-xs opacity-60">{kw.count}</sup>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <Database className="w-4 h-4 text-indigo-500" />
            Complete Article Dataset
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-3 text-slate-600 font-medium">#</th>
                <th className="text-left p-3 text-slate-600 font-medium">Title</th>
                <th className="text-left p-3 text-slate-600 font-medium">Authors</th>
                <th className="text-left p-3 text-slate-600 font-medium">Year</th>
                <th className="text-left p-3 text-slate-600 font-medium">Journal</th>
                <th className="text-left p-3 text-slate-600 font-medium">Key Targets</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a, i) => (
                <tr key={a.id} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="p-3 text-slate-400">{i + 1}</td>
                  <td className="p-3 text-slate-700 max-w-xs">
                    <p className="line-clamp-2">{a.title}</p>
                  </td>
                  <td className="p-3 text-slate-500 whitespace-nowrap">{a.authors}</td>
                  <td className="p-3 text-slate-500">{a.year}</td>
                  <td className="p-3 text-slate-500 max-w-[150px] truncate">{a.journal}</td>
                  <td className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {a.targets.slice(0, 2).map((t, ti) => (
                        <span key={ti} className="text-xs px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded">
                          {t}
                        </span>
                      ))}
                      {a.targets.length > 2 && (
                        <span className="text-xs text-slate-400">+{a.targets.length - 2}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
