import { Outlet } from "react-router";
import { Navbar } from "../Navbar";

export function MainLayout() {
  return (
    <div className="grid  min-h-screen grid-cols-[minmax(64px,_20%)_1fr]">
      <aside>
        <Navbar />
      </aside>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}
