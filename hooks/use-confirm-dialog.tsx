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
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

// 定義 Context 類型
type ConfirmDialogContextType = {
  showConfirm: (message: string, title?: string) => Promise<boolean>;
};

// 建立 Context
const ConfirmDialogContext = createContext<ConfirmDialogContextType | null>(
  null
);

export function ConfirmDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("確認");
  const [resolver, setResolver] = useState<((value: boolean) => void) | null>(
    null
  );

  // confirm API
  const showConfirm = (msg: string, ttl: string = "確認") => {
    setMessage(msg);
    setTitle(ttl);
    setOpen(true);

    return new Promise<boolean>((resolve) => {
      setResolver(() => resolve);
    });
  };

  // 使用者按下「確定」
  const handleOk = () => {
    setOpen(false);
    if (resolver) {
      resolver(true);
      setResolver(null);
    }
  };

  // 使用者按下「取消」
  const handleCancel = () => {
    setOpen(false);
    if (resolver) {
      resolver(false);
      setResolver(null);
    }
  };

  return (
    <ConfirmDialogContext.Provider value={{ showConfirm }}>
      {children}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>取消</AlertDialogCancel>
            <AlertDialogAction onClick={handleOk}>確定</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ConfirmDialogContext.Provider>
  );
}

// 提供 hook
export function useConfirmDialog() {
  const ctx = useContext(ConfirmDialogContext);
  if (!ctx) {
    throw new Error("useConfirmDialog 必須在 <ConfirmDialogProvider> 內使用");
  }
  return ctx.showConfirm;
}
