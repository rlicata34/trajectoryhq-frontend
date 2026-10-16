import { NavLink } from "react-router";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Settings,
} from "lucide-react";

import "./Sidebar.css";

const getNavLinkClass = ({ isActive }) =>
  `sidebar__link ${isActive ? "sidebar__link_active" : ""}`;

function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" end className="sidebar__brand">
        <img src="" alt="" className="sidebar__logo" />
        <span className="sidebar__brand-name">
          Trajectory <span className="sidebar__brand-accent">HQ</span>
        </span>
      </NavLink>
      <nav className="sidebar__nav" aria-label="Main navigation">
        <NavLink to="/" className={getNavLinkClass}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/applications" className={getNavLinkClass}>
          <BriefcaseBusiness size={20} />
          <span>Applications</span>
        </NavLink>
        <NavLink to="/analytics" className={getNavLinkClass}>
          <ChartNoAxesCombined size={20} />
          <span>Analytics</span>
        </NavLink>
        <div className="sidebar__bottom">
          <NavLink to="/settings" className={getNavLinkClass}>
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
