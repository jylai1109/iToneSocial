//import React from "react";
// import { FaUser } from "react-icons/fa";  // fa = font-awesome

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MenubarProps {
  title?: string;
}

export default function Menubar({}: MenubarProps) {
  return (
    <header className="menubar">
      <div className="menubar-left">
        {/* <h2>{title || "Dashboard"}</h2> */}
      </div>
      <div className="menubar-right">
        {/* 這裡可以放通知 / 使用者資訊 */}
        {/* <button className="btn">通知</button>
        <button className="btn">使用者</button> */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {/* <FaUser  style={{whiteSpace: "nowrap", color:"white"}} />&nbsp; */}
          <Link href="/tone-discovery">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              開始測試
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              登入
            </Button>
          </Link>
          <label style={{ whiteSpace: "nowrap", color: "white" }}>Admin</label>
        </div>
      </div>
    </header>
  );
}
