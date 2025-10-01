//import React from "react";
// import { Link } from "react-router-dom";

interface SidebarProps {
  onLogout: () => void;
}

export default function Sidebar({ onLogout }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand-logo">
        EPMIS
        <label
          style={{ backgroundColor: "yellow", color: "red", fontSize: "18px" }}
        >
          (測試環境)
        </label>
      </div>

      <nav className="dashboard-nav-list">
        {/* 這裡只放導覽連結 */}
        <a href="/Home/index" className="dashboard-nav-item">
          Home
        </a>
        <a href="#" className="dashboard-nav-item" onClick={onLogout}>
          Logout
        </a>
      </nav>
    </aside>
  );
}
