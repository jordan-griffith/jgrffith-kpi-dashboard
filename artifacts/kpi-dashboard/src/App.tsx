import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Teams from "@/pages/Teams";
import Analytics from "@/pages/Analytics";
import Settings from "@/pages/Settings";
import Export from "@/pages/Export";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AppShell } from "@/components/AppShell";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard"><ProtectedRoute><AppShell><Dashboard /></AppShell></ProtectedRoute></Route>
      <Route path="/teams"><ProtectedRoute><AppShell><Teams /></AppShell></ProtectedRoute></Route>
      <Route path="/analytics"><ProtectedRoute><AppShell><Analytics /></AppShell></ProtectedRoute></Route>
      <Route path="/settings"><ProtectedRoute><AppShell><Settings /></AppShell></ProtectedRoute></Route>
      <Route path="/export"><ProtectedRoute><AppShell><Export /></AppShell></ProtectedRoute></Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
