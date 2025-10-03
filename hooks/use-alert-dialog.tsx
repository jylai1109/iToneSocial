"use client";

import React, { createContext, useContext, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

// 定義 Context 類型
type AlertDialogContextType = {
  showAlert: (message: string, title?: string) => Promise<void>;
};

// 建立 Context
const AlertDialogContext = createContext<AlertDialogContextType | null>(null);

export function AlertDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("提示");
  const [resolver, setResolver] = useState<(() => void) | null>(null);

  // 提供 API：像 alert("...") 一樣呼叫
  const showAlert = (msg: string, ttl: string = "提示") => {
    setMessage(msg);
    setTitle(ttl);
    setOpen(true);

    return new Promise<void>((resolve) => {
      setResolver(() => resolve);
    });
  };

  // 使用者按下「確定」後
  const handleClose = () => {
    setOpen(false);
    if (resolver) {
      resolver();
      setResolver(null);
    }
  };

  return (
    <AlertDialogContext.Provider value={{ showAlert }}>
      {children}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleClose}>確定</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AlertDialogContext.Provider>
  );
}

// 提供 hook
export function useAlertDialog() {
  const ctx = useContext(AlertDialogContext);
  if (!ctx)
    throw new Error("useAlertDialog 必須在 <AlertDialogProvider> 內使用");
  return ctx.showAlert;
}
