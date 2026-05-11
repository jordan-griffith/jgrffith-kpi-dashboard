import { useEffect } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { mockData } from "@/lib/mockData";

export default function Analytics() {
  useEffect(() => { document.title = "KPI Dashboard - Analytics"; }, []);

  const doubleTrend = [
    { month: "Aug", platform: 50, devops: 40 },
    { month: "Sep", platform: 55, devops: 42 },
    { month: "Oct", platform: 58, devops: 45 },
    { month: "Nov", platform: 62, devops: 50 },
    { month: "Dec", platform: 65, devops: 55 },
    { month: "Jan", platform: 68, devops: 59 },
    { month: "Feb", platform: 71, devops: 64 },
    { month: "Mar", platform: 74, devops: 68 }
  ];

  const bottleneckData = [
    { name: "Meetings", last: 22, current: 28 },
    { name: "Admin", last: 7, current: 9 },
    { name: "Ctx Switch", last: 12, current: 16 },
    { name: "Code Rev", last: 8, current: 10 }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row gap-4 border-b border-border pb-4">
        <select className="bg-card border border-border text-foreground px-4 py-2 text-sm uppercase tracking-widest outline-none focus:border-primary">
          <option>This Quarter</option>
          <option>Last Quarter</option>
          <option>Last 6 Months</option>
        </select>
        <select className="bg-card border border-border text-foreground px-4 py-2 text-sm uppercase tracking-widest outline-none focus:border-primary">
          <option>All Teams</option>
          {Object.keys(mockData.teamsData).map(t => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border p-4">
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">High-Value Dev % Trend (6 Months)</div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={doubleTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="month" stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#0F1219', borderColor: '#1E2230', fontSize: '12px' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }} />
                <Line type="monotone" dataKey="platform" name="Platform Team" stroke="#00FF88" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="devops" name="DevOps" stroke="#3B82F6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card border border-border p-4 flex flex-col gap-4">
          <div className="text-xs text-muted-foreground uppercase tracking-widest">OKR Progress</div>
          <div className="flex flex-col justify-around flex-1 gap-4">
            {mockData.okrs.map((okr, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs items-end">
                  <span className="text-foreground">{okr.title}</span>
                  <span className={`px-2 py-0.5 border text-[10px] ${okr.status === 'ON TRACK' ? 'border-primary text-primary' : 'border-destructive text-destructive'}`}>
                    {okr.status}
                  </span>
                </div>
                <div className="relative h-4 bg-border w-full">
                  <div className={`absolute top-0 left-0 h-full ${okr.status === 'ON TRACK' ? 'bg-primary' : 'bg-destructive'}`} style={{ width: okr.current }} />
                  <div className="absolute top-0 bottom-0 border-l-2 border-dashed border-white/50 z-10" style={{ left: '80%' }} title="Target" />
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold mix-blend-difference text-white drop-shadow-md">
                    {okr.current}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border p-4">
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Bottleneck Comparison</div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bottleneckData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0F1219', borderColor: '#1E2230', fontSize: '12px' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }} />
                <Bar dataKey="last" name="Last Qtr" fill="#9CA3AF" radius={[2, 2, 0, 0]} />
                <Bar dataKey="current" name="This Qtr" fill="#FF3B6B" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card border border-border p-4">
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Meeting Hours by Role</div>
          <div className="flex flex-col justify-around flex-1 gap-6 mt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-foreground">Sr. Developer</span>
                <span className="text-destructive font-bold">12 hrs/wk <span className="text-muted-foreground font-normal">(Target: &lt; 8)</span></span>
              </div>
              <div className="h-2 bg-border relative">
                <div className="absolute top-0 left-0 h-full bg-destructive" style={{ width: '60%' }} />
                <div className="absolute top-[-4px] bottom-[-4px] border-l-2 border-white z-10" style={{ left: '40%' }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-foreground">Developer</span>
                <span className="text-destructive font-bold">8 hrs/wk <span className="text-muted-foreground font-normal">(Target: &lt; 6)</span></span>
              </div>
              <div className="h-2 bg-border relative">
                <div className="absolute top-0 left-0 h-full bg-destructive" style={{ width: '40%' }} />
                <div className="absolute top-[-4px] bottom-[-4px] border-l-2 border-white z-10" style={{ left: '30%' }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-foreground">Jr. Developer</span>
                <span className="text-amber-500 font-bold">5 hrs/wk <span className="text-muted-foreground font-normal">(Target: &lt; 4)</span></span>
              </div>
              <div className="h-2 bg-border relative">
                <div className="absolute top-0 left-0 h-full bg-amber-500" style={{ width: '25%' }} />
                <div className="absolute top-[-4px] bottom-[-4px] border-l-2 border-white z-10" style={{ left: '20%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
