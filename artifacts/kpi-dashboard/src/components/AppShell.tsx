import { Link, useLocation } from "wouter";
import { logout } from "@/lib/auth";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();

  const handleLogout = () => {
    logout();
    setLocation("/login");
  };

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/teams", label: "Team Reports" },
    { href: "/analytics", label: "Analytics" },
    { href: "/settings", label: "Settings" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-card px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-primary tracking-widest uppercase">KPI Dashboard</div>
        <button onClick={handleLogout} className="text-muted-foreground hover:text-primary text-sm uppercase tracking-wider">Logout</button>
      </header>
      <nav className="border-b border-border bg-background px-6 flex gap-1">
        {navItems.map(item => (
          <Link key={item.href} href={item.href}>
            <div className={`px-4 py-3 text-sm uppercase tracking-widest cursor-pointer border-l-2 transition-colors ${location === item.href ? "border-primary bg-border text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <main className="flex-1 p-6 max-w-[1400px] w-full mx-auto">
        {children}
      </main>
    </div>
  );
}
