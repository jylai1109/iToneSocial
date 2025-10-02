"use client";

import type React from "react";

import { useState, useEffect } from "react";

import config from "@/config"; // 在 config.ts

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Compass,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { title } from "process";

import type { TeamGroup, TeamOrganization } from "@/types/model_type";
import type { ApiResponse } from "@/types/apiResponse";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    title: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState<TeamOrganization[]>([]);

  async function loadGroupsApi(): Promise<ApiResponse<TeamOrganization[]>> {
    const res = await fetch(`${config.API_BASE_URL}/Account/LoadOrganization`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  }

  useEffect(() => {
    // loadGroups();
    async function fetchGroups() {
      try {
        const response = await loadGroupsApi();
        if (response.status === "success" && response.GroupList) {
          setGroups(response.GroupList); // ✅ 這裡直接拿 data (就是 TeamGroup[])
        } else {
          //toast.error("讀取失敗");
        }
      } catch (err) {
        console.error("API 錯誤:", err);
        //toast.error("讀取群組失敗");
      }
    }
    //fetchGroups();
  }, []); // 空陣列 = 只在第一次掛載跑

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("密碼確認不符");
      return;
    }

    try {
      const res = await fetch(`${config.API_BASE_URL}/Account/Register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.name,
          password: formData.password,
          email: formData.email,
          company: formData.company,
          title: formData.title,
        }),
      });

      if (res.ok) {
        alert("註冊成功！");
        // 註冊成功後導向
        // window.location.href = "/tone-discovery";
      } else {
        const err = await res.text();
        alert("註冊失敗: " + err);
      }
    } catch (err) {
      console.error(err);
      alert("發生錯誤，請稍後再試");
    } finally {
      setIsLoading(false);
    }

    // setIsLoading(true);

    // Simulate signup process
    /* setTimeout(() => {
      setIsLoading(false);
      // Redirect to tone discovery
      window.location.href = "/tone-discovery";
    }, 2000); */
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6"
          >
            <Compass className="w-8 h-8 text-primary-foreground" />
          </Link>
          <h1 className="text-2xl font-bold mb-2">加入 EPMIS</h1>
          <p className="text-muted-foreground">創建帳戶，開始管理工程專案</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center">註冊新帳戶</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">姓名</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="輸入你的姓名"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">電子郵件</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="輸入你的電子郵件"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">公司</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Select
                      value={formData.company}
                      onValueChange={(value) =>
                        handleInputChange("company", value)
                      }
                    >
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="選擇公司" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">鼎越開發股份有限公司</SelectItem>
                        <SelectItem value="1">
                          李祖原聯合建築師事務所
                        </SelectItem>
                        <SelectItem value="2">
                          華熊營造工程股份有限公司
                        </SelectItem>
                        <SelectItem value="3">兆申機電工程有限公司</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">職稱</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="輸入你的職稱"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">密碼</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="輸入密碼（至少8個字元）"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="pl-10 pr-10"
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">確認密碼</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="再次輸入密碼"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "註冊中..." : "註冊帳戶"}
              </Button>
            </form>

            <div className="mt-6">
              <Separator className="my-4" />
              <div className="text-center text-sm text-muted-foreground">
                已經有帳戶了？{" "}
                <Link
                  href="/auth/login"
                  className="text-primary hover:underline font-medium"
                >
                  立即登入
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回首頁
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
