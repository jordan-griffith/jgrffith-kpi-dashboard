import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  useEffect(() => { document.title = "KPI Dashboard - Settings"; }, []);

  const [toggles, setToggles] = useState({
    pbi: true,
    pa: true,
    jira: true,
    ado: false,
    slack: false
  });

  const toggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const integrations = [
    { id: 'pbi', name: "Power BI", sync: "2 min ago", detail: "" },
    { id: 'pa', name: "Power Automate", sync: "15 min ago", detail: "" },
    { id: 'jira', name: "Jira", sync: "", detail: "Project: KPI-Dev" },
    { id: 'ado', name: "Azure DevOps", sync: "—", detail: "" },
    { id: 'slack', name: "Slack", sync: "—", detail: "" }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold tracking-widest uppercase text-foreground mb-6">Settings</h1>
      
      <Tabs defaultValue="integrations" className="w-full">
        <TabsList className="bg-card border border-border h-auto p-0 mb-6 w-full justify-start rounded-none overflow-x-auto">
          {["Integrations", "Notifications", "User Management", "Profile"].map(tab => (
            <TabsTrigger 
              key={tab} 
              value={tab.toLowerCase().split(' ')[0]}
              className="rounded-none data-[state=active]:bg-border data-[state=active]:text-primary text-muted-foreground uppercase tracking-widest text-xs px-6 py-3"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="integrations" className="space-y-6">
          <div className="bg-card border border-border p-6">
            <h2 className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Connected Integrations</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="text-xs uppercase bg-border/50 text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-4 py-3 font-normal">Service</th>
                    <th className="px-4 py-3 font-normal">Status</th>
                    <th className="px-4 py-3 font-normal">Details / Sync</th>
                    <th className="px-4 py-3 font-normal">Toggle</th>
                    <th className="px-4 py-3 font-normal">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {integrations.map((int) => {
                    const isConnected = toggles[int.id as keyof typeof toggles];
                    return (
                      <tr key={int.id} className="border-b border-border/50 last:border-0 hover:bg-border/30">
                        <td className="px-4 py-4 font-bold text-foreground">{int.name}</td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-primary' : 'bg-muted-foreground'}`} />
                            <span className={isConnected ? 'text-primary' : 'text-muted-foreground'}>
                              {isConnected ? 'Connected' : 'Disconnected'}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-muted-foreground">{int.sync || int.detail}</td>
                        <td className="px-4 py-4">
                          <Switch 
                            checked={isConnected} 
                            onCheckedChange={() => toggle(int.id as keyof typeof toggles)} 
                            className="data-[state=checked]:bg-primary"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <button className="border border-border px-4 py-1 text-xs uppercase tracking-widest hover:bg-border transition-colors">
                            Configure
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button className="bg-blue-600 text-white px-6 py-2 uppercase tracking-widest font-bold hover:bg-blue-700 transition-colors text-sm">
                Save Settings
              </button>
            </div>
          </div>
        </TabsContent>

        {["notifications", "user", "profile"].map(tab => (
          <TabsContent key={tab} value={tab}>
            <div className="bg-card border border-border p-12 text-center flex flex-col items-center justify-center text-muted-foreground min-h-[300px]">
              <div className="text-xl uppercase tracking-widest">Coming Soon</div>
              <div className="text-sm mt-2">This configuration panel is under construction.</div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
