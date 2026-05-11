import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowUp, ArrowDown } from "lucide-react";
import { mockData } from "@/lib/mockData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export default function Dashboard() {
  useEffect(() => { document.title = "KPI Dashboard - Dashboard"; }, []);

  const borderColors: Record<string, string> = {
    green: "border-t-primary",
    blue: "border-t-blue-500",
    purple: "border-t-purple-400",
    amber: "border-t-amber-500",
    red: "border-t-destructive"
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-widest uppercase text-foreground">Team Productivity Dashboard</h1>
          <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Q1 2025 | All Teams</p>
        </div>
        <Link href="/export">
          <button className="bg-blue-600 text-white px-6 py-2 uppercase tracking-widest font-bold hover:bg-blue-700 transition-colors text-sm">
            Export & Share Report
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockData.kpis.map((kpi, i) => (
          <div key={i} className={`bg-card border border-border border-t-2 ${borderColors[kpi.color]} p-4 flex flex-col justify-between`}>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">{kpi.title}</div>
            <div className="text-3xl font-bold text-white my-2">{kpi.value}</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              {kpi.trend.includes('↑') ? <ArrowUp className="w-3 h-3 text-primary" /> : null}
              {kpi.trend.replace('↑ ', '')}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border p-4">
        <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">OKR Summary</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockData.okrs.map((okr, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="text-xs font-bold truncate" title={okr.title}>{okr.title}</div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">{okr.current}</span>
                <span className={`px-2 py-0.5 border ${okr.status === 'ON TRACK' ? 'border-primary text-primary' : 'border-destructive text-destructive'}`}>
                  {okr.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border p-4">
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Time Allocation</div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData.timeAllocation} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0F1219', borderColor: '#1E2230', fontSize: '12px' }} />
                <Bar dataKey="value" fill="#00FF88" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-card border border-border p-4 flex flex-col">
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Team Efficiency Rankings</div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            {mockData.teamEfficiency.map((team, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`text-sm w-32 truncate ${i === 0 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>{team.name}</div>
                <div className="flex-1 bg-border h-2 relative">
                  <div className={`absolute top-0 left-0 h-full ${i === 0 ? 'bg-primary' : 'bg-muted-foreground'}`} style={{ width: `${team.score}%` }} />
                </div>
                <div className={`text-sm w-8 text-right ${i === 0 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>{team.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card border border-border p-4">
        <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">High-Value Dev % — 6-Month Trend</div>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="month" stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} domain={[0, 100]} />
              <Tooltip contentStyle={{ backgroundColor: '#0F1219', borderColor: '#1E2230', fontSize: '12px' }} />
              <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={{ fill: '#0F1219', stroke: '#3B82F6', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
