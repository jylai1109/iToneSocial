"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import Menubar from "../../components/Menubar";
import Content from "../../components/Content";

interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({}: LayoutProps) {
  return (
    <div className="app-layout">
      {/* 左邊 */}
      <Sidebar onLogout={() => console.log("logout")} />

      {/* 右邊 */}
      <div className="main-container">
        <Menubar title="1" />
        <Content />
      </div>
    </div>
  );
}
