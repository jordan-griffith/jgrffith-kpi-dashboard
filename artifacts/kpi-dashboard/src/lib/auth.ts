export const isLoggedIn = () => localStorage.getItem("kpi_logged_in") === "true";
export const login = () => localStorage.setItem("kpi_logged_in", "true");
export const logout = () => localStorage.removeItem("kpi_logged_in");
