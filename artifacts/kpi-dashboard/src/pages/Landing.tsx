import { Link } from "wouter";
import { useEffect } from "react";

export default function Landing() {
  useEffect(() => { document.title = "KPI Dashboard - Home"; }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col text-foreground">
      <header className="border-b border-border px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-primary tracking-widest uppercase">KPI Dashboard</div>
        <Link href="/login">
          <div className="text-primary hover:text-primary/80 uppercase tracking-widest text-sm cursor-pointer border border-primary px-4 py-2">
            Try the Dashboard →
          </div>
        </Link>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto w-full gap-12 py-20">
        <section className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Give Your IT Team the Data to Prove Its Value.</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">KPI Dashboard shows IT managers exactly how development time is being spent — and gives them the evidence to optimize it.</p>
          <Link href="/login">
            <div className="inline-block bg-primary text-primary-foreground uppercase tracking-widest font-bold px-8 py-4 cursor-pointer hover:bg-primary/90 transition-colors mt-4">
              Try the Dashboard →
            </div>
          </Link>
        </section>

        <section className="border border-border p-8 bg-card text-left w-full mt-12">
          <h2 className="text-xl text-destructive mb-4">The Problem</h2>
          <p className="text-muted-foreground">Leadership questions IT productivity. Managers are unable to answer with data. Headcount requests are denied. Stop guessing, start proving.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="border border-border border-t-2 border-t-primary p-6 bg-card text-left">
            <h3 className="text-lg mb-2 text-primary">Team Time Allocation</h3>
            <p className="text-sm text-muted-foreground">Track exact breakdown of coding, meetings, and admin.</p>
          </div>
          <div className="border border-border border-t-2 border-t-blue-500 p-6 bg-card text-left">
            <h3 className="text-lg mb-2 text-blue-500">OKR Progress Tracking</h3>
            <p className="text-sm text-muted-foreground">See objective progress at a glance with traffic-light status.</p>
          </div>
          <div className="border border-border border-t-2 border-t-purple-400 p-6 bg-card text-left">
            <h3 className="text-lg mb-2 text-purple-400">Leadership-Ready Reports</h3>
            <p className="text-sm text-muted-foreground">Export findings with one click.</p>
          </div>
        </section>

        <section className="w-full text-left space-y-4">
          <h2 className="text-2xl text-primary text-center mb-8">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="border border-border p-4 bg-card w-full text-center">1. Connect your tools</div>
            <div className="border border-border p-4 bg-card w-full text-center">2. View your dashboard</div>
            <div className="border border-border p-4 bg-card w-full text-center">3. Share with leadership</div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6 text-center text-muted-foreground text-sm">
        KPI Dashboard | A BAIS 3300 project | © 2025
      </footer>
    </div>
  );
}
