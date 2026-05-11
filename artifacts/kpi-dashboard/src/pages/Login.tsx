import { useLocation } from "wouter";
import { login } from "@/lib/auth";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [, setLocation] = useLocation();
  const [msg, setMsg] = useState("");

  useEffect(() => { document.title = "KPI Dashboard - Login"; }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    setLocation("/dashboard");
  };

  const handleSSO = () => {
    login();
    setLocation("/dashboard");
  };

  const forgotPw = () => {
    setMsg("A reset link has been sent.");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-foreground">
      <div className="w-full max-w-md border border-border bg-card p-8 space-y-6">
        <h1 className="text-2xl font-bold tracking-widest text-primary text-center uppercase">KPI Dashboard</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Email</label>
            <Input type="email" required className="bg-background border-border text-foreground" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Password</label>
            <Input type="password" required className="bg-background border-border text-foreground" />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
              <input type="checkbox" className="accent-primary" /> Remember me
            </label>
            <button type="button" onClick={forgotPw} className="text-sm text-primary hover:underline">Forgot password?</button>
          </div>

          {msg && <div className="text-primary text-sm p-2 border border-primary/20 bg-primary/10">{msg}</div>}

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest font-bold rounded-none">
            Sign In
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        <Button type="button" onClick={handleSSO} variant="outline" className="w-full border-border hover:bg-border text-foreground uppercase tracking-widest rounded-none">
          Sign in with Microsoft SSO
        </Button>
      </div>
      
      <footer className="mt-8 text-muted-foreground text-sm flex gap-4">
        <span>KPI Dashboard</span>
        <span>|</span>
        <span className="cursor-pointer hover:text-foreground">Privacy Policy</span>
        <span>|</span>
        <span className="cursor-pointer hover:text-foreground">Contact</span>
      </footer>
    </div>
  );
}
