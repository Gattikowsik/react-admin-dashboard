import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

export default function Layout() {
  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        <main className="mainContentWrapper">
          <ThemeSwitcher /> {/* Theme switcher here */}
          <Outlet />
        </main>
      </div>
    </>
  );
}
