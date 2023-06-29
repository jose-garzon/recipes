import { Outlet } from "react-router";
import { Navbar } from "../Navbar";

export function MainLayout() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <aside className="col-span-3">
        <Navbar />
      </aside>
      <main className="col-span-9">
        <Outlet />
      </main>
    </div>
  );
}
