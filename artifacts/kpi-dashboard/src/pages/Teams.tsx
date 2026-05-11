import { useEffect, useState } from "react";
import { mockData } from "@/lib/mockData";

export default function Teams() {
  useEffect(() => { document.title = "KPI Dashboard - Teams"; }, []);

  const [selectedTeam, setSelectedTeam] = useState("Platform Team");
  const teamData = mockData.teamsData[selectedTeam as keyof typeof mockData.teamsData];

  return (
    <div className="flex flex-col lg:flex-row gap-6 animate-in fade-in duration-500 min-h-[calc(100vh-140px)]">
      <div className="w-full lg:w-64 flex flex-col gap-1 border-r border-border pr-6">
        {Object.keys(mockData.teamsData).map(team => (
          <div 
            key={team} 
            onClick={() => setSelectedTeam(team)}
            className={`px-4 py-3 text-sm uppercase tracking-widest cursor-pointer border-l-2 transition-colors ${selectedTeam === team ? "border-primary bg-border text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            {team}
          </div>
        ))}
      </div>

      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-end border-b border-border pb-4">
          <div>
            <h2 className="text-2xl font-bold tracking-widest uppercase text-foreground">{selectedTeam}</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">
              {teamData.devs.length} developers | Q1 2025 | Score: <span className={teamData.score >= 70 ? 'text-primary' : 'text-amber-500'}>{teamData.score}%</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamData.devs.map((dev, i) => (
            <div key={i} className="bg-card border border-border border-t-2 border-t-primary p-4">
              <div className="text-xs text-muted-foreground uppercase tracking-widest truncate">{dev.name}</div>
              <div className="text-2xl font-bold text-white mt-2">{dev.score}%</div>
              <div className="text-[10px] text-muted-foreground mt-1">High-Value Time</div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border p-4 overflow-x-auto">
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Time Breakdown</div>
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs uppercase bg-border/50 text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-normal">Developer</th>
                <th className="px-4 py-3 font-normal">Coding</th>
                <th className="px-4 py-3 font-normal">Meetings</th>
                <th className="px-4 py-3 font-normal">Code Rev</th>
                <th className="px-4 py-3 font-normal">Admin</th>
                <th className="px-4 py-3 font-normal">Other</th>
              </tr>
            </thead>
            <tbody>
              {teamData.devs.map((dev, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-border/30">
                  <td className="px-4 py-3 font-bold text-foreground">{dev.name}</td>
                  <td className="px-4 py-3 text-primary">{dev.breakdown[0]}%</td>
                  <td className="px-4 py-3 text-destructive">{dev.breakdown[1]}%</td>
                  <td className="px-4 py-3 text-blue-400">{dev.breakdown[2]}%</td>
                  <td className="px-4 py-3 text-amber-400">{dev.breakdown[3]}%</td>
                  <td className="px-4 py-3 text-purple-400">{dev.breakdown[4]}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-card border border-border p-4">
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Recommended Actions</div>
          <ul className="space-y-3">
            {teamData.actions.map((action, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
