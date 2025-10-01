"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Compass,
  Globe,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Shield,
  Award,
  Heart,
  MapPin,
} from "lucide-react";
import Link from "next/link";

import { ToneCard } from "../app/ToneCard";

const tones = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "慢活調",
    desc: "追求內心平靜，享受緩慢節奏的旅行體驗",
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "文藝調",
    desc: "熱愛學習探索，重視文化深度的旅行方式",
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: "冒險調",
    desc: "追求刺激挑戰，勇於嘗試新事物的探險家",
  },
];

const showText = process.env.NEXT_PUBLIC_SHOW_TEXT === "true";

export default function HomePage() {
  useEffect(() => {
    console.log("showText:", showText);
  }, []); // 空陣列 = 只在第一次掛載跑

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/30 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {showText && (
                <>
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                    <Compass className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    iTone
                  </span>
                </>
              )}
            </div>
            {showText && (
              <div className="flex items-center space-x-4">
                <Link href="/auth/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    登入
                  </Button>
                </Link>
                <Link href="/tone-discovery">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg"
                  >
                    開始測試
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hero-bg via-background to-muted/30">
        <div className="absolute inset-0 bg-[url('/world-map-travel-footprints.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-8 text-base px-6 py-3 bg-primary/10 text-primary border-primary/20"
            >
              <Globe className="w-5 h-5 mr-2" />
              {/* 3分鐘發現你的旅行個性 */}
              工程專案管理系統
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance mb-8 leading-tight">
              {/* 找到你的 */}
              管理所有
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}
                {/* 旅行調調 */}
                工程專案
              </span>
              <br />
              {/* 遇見對味的旅伴 */}
              請選擇專案
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-12 max-w-3xl mx-auto leading-relaxed">
              {/* 完成我們的3分鐘旅行調性測試，發現你的旅行個性， */}
              京華廣場頂級商辦園區
              <br className="hidden md:block" />
              {/* 然後加入 iTone 社群，遇見志同道合的旅行夥伴 */}
              開始日期： 2022/12/01~ 結束日期： 2028/07/01
            </p>
            {showText && (
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link href="/tone-discovery">
                  <Button
                    size="lg"
                    className="px-12 py-4 text-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    立即開始測試
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg bg-transparent border-2 hover:bg-muted/50"
                >
                  <Play className="w-5 h-5 mr-2" />
                  觀看介紹影片
                </Button>
              </div>
            )}

            {/* Hero Stats */}
            {showText && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    15,000+
                  </div>
                  <div className="text-muted-foreground">已完成測試</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    6種
                  </div>
                  <div className="text-muted-foreground">
                    {/* 旅行調性 */}工程專案
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    92%
                  </div>
                  <div className="text-muted-foreground">
                    {/* 配對成功率 */}請選擇專案
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    3分鐘
                  </div>
                  <div className="text-muted-foreground">完成測試</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About the Test Section */}
      {showText && (
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                什麼是旅行調性測試？
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                透過20個精心設計的問題，分析你的旅行心理和偏好，
                <br className="hidden md:block" />
                為你量身打造專屬的旅行個性檔案
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {tones.map((tone, idx) => (
                <ToneCard key={idx} {...tone} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/tone-discovery">
                <Button
                  size="lg"
                  className="px-10 py-4 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg"
                >
                  發現我的旅行調性
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* How it Works Section */}
      {showText && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                四步驟開啟旅行社交之旅
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                簡單直觀的流程，讓你快速找到理想的旅行夥伴
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-primary-foreground">
                    1
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">註冊帳號</h3>
                <p className="text-muted-foreground leading-relaxed">
                  使用 Google 或 Facebook 快速註冊，開始你的旅行社交之旅
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-primary-foreground">
                    2
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">完成調性測試</h3>
                <p className="text-muted-foreground leading-relaxed">
                  回答20個問題，讓我們了解你的旅行偏好和個性特質
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-primary-foreground">
                    3
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">獲得個人報告</h3>
                <p className="text-muted-foreground leading-relaxed">
                  收到詳細的旅行調性分析報告和個性化推薦
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-primary-foreground">
                    4
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">加入社群</h3>
                <p className="text-muted-foreground leading-relaxed">
                  與志同道合的旅行者連結，參與實體活動和旅行
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Social Proof Section */}
      {showText && (
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                已有 15,000+ 人發現了他們的旅行調性
              </h2>
              <p className="text-xl text-muted-foreground">看看其他人怎麼說</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">小雅</div>
                    <div className="text-sm text-muted-foreground">
                      文藝調旅行者
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "透過 iTone
                  找到了很多喜歡深度文化旅行的朋友，一起去了京都和巴黎，體驗超棒！"
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">阿明</div>
                    <div className="text-sm text-muted-foreground">
                      冒險調旅行者
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "測試結果超準確！配對到的旅伴都很合拍，一起挑戰了紐西蘭的極限運動。"
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">美玲</div>
                    <div className="text-sm text-muted-foreground">
                      慢活調旅行者
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "終於找到了喜歡慢節奏旅行的夥伴，在峇里島度過了最放鬆的假期。"
                </p>
              </Card>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-8 bg-card rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    4.9/5
                  </div>
                  <div className="text-sm text-muted-foreground">平均評分</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">92%</div>
                  <div className="text-sm text-muted-foreground">
                    配對成功率
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    15,000+
                  </div>
                  <div className="text-sm text-muted-foreground">活躍用戶</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trust & Safety Section */}
      {showText && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                安全可信賴的旅行社交平台
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                我們重視每位用戶的安全和隱私，提供最可靠的旅行社交體驗
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">身份驗證</h3>
                <p className="text-muted-foreground leading-relaxed">
                  所有用戶都需要通過身份驗證，確保社群的真實性和安全性
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">隱私保護</h3>
                <p className="text-muted-foreground leading-relaxed">
                  嚴格的隱私政策保護你的個人資訊，絕不外洩給第三方
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">社群監管</h3>
                <p className="text-muted-foreground leading-relaxed">
                  24/7 社群監管團隊，確保平台環境友善和諧
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {showText && (
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/travel-adventure-world.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground text-balance mb-8">
              今天就發現你的旅行調性
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty mb-12 max-w-3xl mx-auto leading-relaxed">
              只需要3分鐘，就能開啟你的個性化旅行社交體驗
              <br className="hidden md:block" />
              加入 iTone，遇見志同道合的旅行夥伴
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/tone-discovery">
                <Button
                  size="lg"
                  className="px-12 py-4 text-xl bg-white text-primary hover:bg-white/90 shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  立即開始測試
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <div className="text-primary-foreground/80 text-lg">
                完全免費 • 無需信用卡
              </div>
            </div>

            <div className="flex justify-center items-center space-x-8 text-primary-foreground/70">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                3分鐘完成
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                科學分析
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                個性化推薦
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      {showText && (
        <footer className="border-t border-border/30 py-16 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-6 md:mb-0">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                  <Compass className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  iTone
                </span>
              </div>
              <div className="text-center md:text-right">
                <p className="text-muted-foreground mb-2">
                  找到你的旅行調調，遇見對味的旅伴
                </p>
                <p className="text-sm text-muted-foreground">
                  © 2025 iTone. 版權所有
                </p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
