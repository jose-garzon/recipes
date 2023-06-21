import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { mainContainer } from "./MainLayout.css";

export function MainLayout() {
  return (
    <>
      <Header />
      <main className={mainContainer}>
        <Outlet />
      </main>
    </>
  );
}
