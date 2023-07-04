import { Outlet } from "react-router";
import { Navbar } from "../Navbar";

export function MainLayout() {
  return (
    <div className="grid min-h-screen grid-cols-[64px_1fr] md:grid-cols-[240px_1fr]">
      <aside>
        <Navbar />
      </aside>
      <main className="p-8 over">
        <Outlet />
      </main>
    </div>
  );
}
