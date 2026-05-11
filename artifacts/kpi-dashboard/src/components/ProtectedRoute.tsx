import { Redirect } from "wouter";
import { isLoggedIn } from "@/lib/auth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }
  return <>{children}</>;
}
