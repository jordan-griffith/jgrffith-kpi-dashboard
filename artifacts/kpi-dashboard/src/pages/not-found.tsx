import { useEffect } from "react";
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  useEffect(() => { document.title = "KPI Dashboard - Page Not Found"; }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-md bg-card border border-border border-t-2 border-t-destructive p-8">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-7 w-7 text-destructive" aria-hidden="true" />
          <h1 className="text-xl font-bold text-foreground uppercase tracking-widest">404 — Page Not Found</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          The page you were looking for does not exist or has been moved.
        </p>
        <Link
          href="/dashboard"
          className="inline-block border border-primary text-primary px-4 py-2 text-xs uppercase tracking-widest hover:bg-primary/10 transition-colors"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
