import { useEffect, useState } from "react";
import { Link } from "wouter";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { mockData } from "@/lib/mockData";
import { Check } from "lucide-react";

export default function Export() {
  useEffect(() => { document.title = "KPI Dashboard - Export"; }, []);

  const [format, setFormat] = useState("PDF");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    }, 500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {sent && (
        <div className="bg-primary/10 border border-primary text-primary p-4 flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-bold absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-md z-50">
          <Check className="w-4 h-4" /> Report sent successfully to {email}
        </div>
      )}

      <div className="flex justify-between items-center pb-4 border-b border-border">
        <h1 className="text-2xl font-bold tracking-widest uppercase text-foreground">Export & Share Report</h1>
        <Link href="/dashboard" className="text-sm text-muted-foreground uppercase tracking-widest hover:text-foreground">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="flex gap-2">
        {["PDF", "PowerPoint", "CSV"].map(f => (
          <button 
            key={f}
            onClick={() => setFormat(f)}
            className={`border px-6 py-2 text-xs uppercase tracking-widest transition-colors ${format === f ? 'border-primary text-primary bg-primary/5' : 'border-border text-muted-foreground hover:border-muted-foreground'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border p-6 flex flex-col gap-6">
          <div className="text-center border-b border-border pb-6">
            <h2 className="text-xl font-bold uppercase tracking-widest text-foreground">Team Productivity Report</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">Q1 2025</p>
          </div>
          
          <div className="flex justify-between items-center text-sm uppercase tracking-widest bg-border/30 p-4 border border-border">
            <span className="text-primary font-bold">QoQ +6%</span>
            <span className="text-purple-400 font-bold">Actions: 7</span>
          </div>

          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData.timeAllocation} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0F1219', borderColor: '#1E2230', fontSize: '12px' }} />
                <Bar dataKey="value" fill="#00FF88" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Key Findings</h3>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex gap-2"><span className="text-primary">•</span> Platform team leads at 74% dev efficiency</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Meeting overhead highest in Data Eng (28%)</li>
              <li className="flex gap-2"><span className="text-primary">•</span> QA bottlenecked on code review process</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border p-6 space-y-4">
            <h3 className="text-sm text-foreground uppercase tracking-widest font-bold">Share Report</h3>
            
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-widest block mb-2">To:</label>
              <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="leadership@company.com"
                className="w-full bg-background border border-border text-foreground px-4 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-widest block mb-2">Message:</label>
              <textarea 
                rows={4}
                defaultValue="Please find attached the Q1 2025 IT Team Productivity Report."
                className="w-full bg-background border border-border text-foreground px-4 py-2 text-sm outline-none focus:border-primary resize-none"
              />
            </div>

            <button 
              onClick={handleSend}
              disabled={!email || loading}
              className={`w-full py-3 uppercase tracking-widest font-bold text-sm transition-colors ${!email || loading ? 'bg-blue-600/40 text-white/60 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              {loading ? 'Sending...' : 'Send to Leadership'}
            </button>
          </div>

          <div className="bg-card border border-border p-6 space-y-4">
            <h3 className="text-sm text-foreground uppercase tracking-widest font-bold mb-4">Schedule recurring report</h3>
            
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">Frequency</label>
                <select className="w-full bg-background border border-border text-foreground px-4 py-2 text-sm outline-none focus:border-primary">
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Quarterly</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">Day</label>
                <select className="w-full bg-background border border-border text-foreground px-4 py-2 text-sm outline-none focus:border-primary">
                  <option>Day 1</option>
                  <option>Monday</option>
                  <option>Friday</option>
                </select>
              </div>
            </div>

            <button className="w-full border border-border text-foreground hover:bg-border transition-colors py-2 uppercase tracking-widest text-xs mt-2" onClick={(e) => {
              const target = e.target as HTMLButtonElement;
              const orig = target.innerText;
              target.innerText = "Recurring report scheduled";
              target.classList.add("text-primary", "border-primary");
              setTimeout(() => {
                target.innerText = orig;
                target.classList.remove("text-primary", "border-primary");
              }, 2000);
            }}>
              Set Auto-Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
