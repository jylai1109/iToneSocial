"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Heart,
  BookOpen,
  Mountain,
  Sparkles,
  Users,
  Palette,
  MapPin,
} from "lucide-react"
import Link from "next/link"

interface Question {
  id: string
  section: string
  question: string
  options: {
    id: string
    text: string
    tone: "A" | "B" | "C" | "D" | "E"
  }[]
}

const questions: Question[] = [
  // 第一部分：旅行動機與心態 (5題)
  {
    id: "q1",
    section: "旅行動機與心態",
    question: "對你來說，旅行最重要的意義是什麼？",
    options: [
      { id: "q1a", text: "放鬆身心，逃離日常壓力", tone: "A" },
      { id: "q1b", text: "體驗不同文化，開拓視野", tone: "B" },
      { id: "q1c", text: "挑戰自我，突破舒適圈", tone: "C" },
      { id: "q1d", text: "創造回憶，留下美好時光", tone: "D" },
      { id: "q1e", text: "學習新知，充實自我", tone: "E" },
    ],
  },
  {
    id: "q2",
    section: "旅行動機與心態",
    question: "在計劃旅行時，你通常會？",
    options: [
      { id: "q2a", text: "詳細規劃每一天的行程安排", tone: "A" },
      { id: "q2b", text: "只訂機票住宿，其他隨興決定", tone: "B" },
      { id: "q2c", text: "找旅行社或跟團，省時省力", tone: "C" },
      { id: "q2d", text: "參考網路攻略，做基本功課", tone: "D" },
      { id: "q2e", text: "詢問朋友建議，依賴口碑推薦", tone: "E" },
    ],
  },
  {
    id: "q3",
    section: "旅行動機與心態",
    question: "旅行中遇到意外狀況時，你的反應是？",
    options: [
      { id: "q3a", text: "感到焦慮，希望盡快解決回到原計劃", tone: "A" },
      { id: "q3b", text: "覺得有趣，把它當作新的冒險", tone: "B" },
      { id: "q3c", text: "保持冷靜，分析各種解決方案", tone: "C" },
      { id: "q3d", text: "尋求協助，向當地人或旅伴請教", tone: "D" },
      { id: "q3e", text: "順其自然，相信會有最好的安排", tone: "E" },
    ],
  },
  {
    id: "q4",
    section: "旅行動機與心態",
    question: "你最希望旅行回來後，朋友對你說什麼？",
    options: [
      { id: "q4a", text: "你看起來氣色好了很多，整個人都放鬆了", tone: "A" },
      { id: "q4b", text: "哇！你的照片好有藝術感，構圖超棒", tone: "B" },
      { id: "q4c", text: "你好勇敢，居然敢嘗試這些刺激的活動", tone: "C" },
      { id: "q4d", text: "聽你分享當地文化好有趣，學到很多", tone: "D" },
      { id: "q4e", text: "你推薦的美食我一定要去試試", tone: "E" },
    ],
  },
  {
    id: "q5",
    section: "旅行動機與心態",
    question: "如果只能選擇一樣東西代表這次旅行，你會選？",
    options: [
      { id: "q5a", text: "一本寫滿心情的旅行日記", tone: "A" },
      { id: "q5b", text: "一件具有當地特色的手工藝品", tone: "B" },
      { id: "q5c", text: "一張挑戰極限活動的證書", tone: "C" },
      { id: "q5d", text: "一本關於當地歷史文化的書籍", tone: "D" },
      { id: "q5e", text: "一道學會的當地料理食譜", tone: "E" },
    ],
  },
  // 第二部分：旅行偏好與風格 (8題)
  {
    id: "q6",
    section: "旅行偏好與風格",
    question: "你理想中的住宿類型是？",
    options: [
      { id: "q6a", text: "溫泉度假村或精品飯店，服務完善", tone: "A" },
      { id: "q6b", text: "特色民宿或設計旅店，有故事性", tone: "B" },
      { id: "q6c", text: "青年旅館或背包客棧，結識新朋友", tone: "C" },
      { id: "q6d", text: "當地人家庭住宿，體驗真實生活", tone: "D" },
      { id: "q6e", text: "露營或特殊住宿體驗 (樹屋、冰屋等)", tone: "E" },
    ],
  },
  {
    id: "q7",
    section: "旅行偏好與風格",
    question: "在陌生城市的第一天，你最想做什麼？",
    options: [
      { id: "q7a", text: "找個咖啡廳坐下來，觀察當地人生活", tone: "A" },
      { id: "q7b", text: "參觀著名博物館或歷史古蹟", tone: "B" },
      { id: "q7c", text: "到當地市場逛逛，品嚐街頭小吃", tone: "C" },
      { id: "q7d", text: "租腳踏車或徒步探索城市街道", tone: "D" },
      { id: "q7e", text: "尋找制高點，俯瞰城市全景", tone: "E" },
    ],
  },
  {
    id: "q8",
    section: "旅行偏好與風格",
    question: "你最喜歡的拍照風格是？",
    options: [
      { id: "q8a", text: "自然風光，捕捉大自然的美麗", tone: "A" },
      { id: "q8b", text: "建築攝影，記錄城市的線條與光影", tone: "B" },
      { id: "q8c", text: "人文紀實，拍攝當地人的生活瞬間", tone: "C" },
      { id: "q8d", text: "美食攝影，記錄每一道精彩料理", tone: "D" },
      { id: "q8e", text: "自拍合照，記錄與朋友的快樂時光", tone: "E" },
    ],
  },
  {
    id: "q9",
    section: "旅行偏好與風格",
    question: "面對語言不通的情況，你會？",
    options: [
      { id: "q9a", text: "事先下載翻譯App，做好準備", tone: "A" },
      { id: "q9b", text: "用手勢和簡單英文溝通", tone: "B" },
      { id: "q9c", text: "覺得很有挑戰性，享受這個過程", tone: "C" },
      { id: "q9d", text: "提前學一些基本當地語言", tone: "D" },
      { id: "q9e", text: "盡量找會說中文的人協助", tone: "E" },
    ],
  },
  {
    id: "q10",
    section: "旅行偏好與風格",
    question: "你的旅行預算分配重點是？",
    options: [
      { id: "q10a", text: "住宿 (舒適的休息環境很重要)", tone: "A" },
      { id: "q10b", text: "美食 (品嚐當地特色料理)", tone: "B" },
      { id: "q10c", text: "體驗活動 (獨特的當地體驗)", tone: "C" },
      { id: "q10d", text: "交通 (方便的移動方式)", tone: "D" },
      { id: "q10e", text: "購物 (紀念品和當地商品)", tone: "E" },
    ],
  },
  {
    id: "q11",
    section: "旅行偏好與風格",
    question: "旅行中你最享受的時刻是？",
    options: [
      { id: "q11a", text: "日出或日落時靜靜欣賞美景", tone: "A" },
      { id: "q11b", text: "在當地小店發現意外驚喜", tone: "B" },
      { id: "q11c", text: "完成一項艱難的戶外挑戰", tone: "C" },
      { id: "q11d", text: "與當地人深度對話交流", tone: "D" },
      { id: "q11e", text: "和旅伴一起哈哈大笑的時刻", tone: "E" },
    ],
  },
  {
    id: "q12",
    section: "旅行偏好與風格",
    question: "你選擇旅行目的地的主要考量？",
    options: [
      { id: "q12a", text: "氣候舒適，環境優美", tone: "A" },
      { id: "q12b", text: "歷史文化深厚，古蹟眾多", tone: "B" },
      { id: "q12c", text: "戶外活動豐富，刺激有趣", tone: "C" },
      { id: "q12d", text: "美食文化發達，料理多樣", tone: "D" },
      { id: "q12e", text: "購物便利，商品特色鮮明", tone: "E" },
    ],
  },
  {
    id: "q13",
    section: "旅行偏好與風格",
    question: "旅行回來後，你最常做的事情是？",
    options: [
      { id: "q13a", text: "整理照片，製作旅行相冊", tone: "A" },
      { id: "q13b", text: "寫旅行日記，記錄心得感想", tone: "B" },
      { id: "q13c", text: "分享給朋友，推薦好的體驗", tone: "C" },
      { id: "q13d", text: "開始規劃下一次的旅行", tone: "D" },
      { id: "q13e", text: "把帶回來的小物裝飾房間", tone: "E" },
    ],
  },
  // 第三部分：生活方式與個性 (4題)
  {
    id: "q14",
    section: "生活方式與個性",
    question: "在日常生活中，你是怎樣的人？",
    options: [
      { id: "q14a", text: "喜歡安靜，享受獨處時光", tone: "A" },
      { id: "q14b", text: "熱愛學習，對新事物充滿好奇", tone: "B" },
      { id: "q14c", text: "活力充沛，喜歡戶外運動", tone: "C" },
      { id: "q14d", text: "重視品質，追求精緻生活", tone: "D" },
      { id: "q14e", text: "社交活躍，朋友圈很廣", tone: "E" },
    ],
  },
  {
    id: "q15",
    section: "生活方式與個性",
    question: "你的理想假日是？",
    options: [
      { id: "q15a", text: "在家看書、聽音樂，享受寧靜", tone: "A" },
      { id: "q15b", text: "參觀展覽、聽講座，充實心靈", tone: "B" },
      { id: "q15c", text: "戶外運動、爬山健行，活動身體", tone: "C" },
      { id: "q15d", text: "品嚐美食、逛精品店，享受生活", tone: "D" },
      { id: "q15e", text: "與朋友聚會、參加活動，熱鬧歡樂", tone: "E" },
    ],
  },
  {
    id: "q16",
    section: "生活方式與個性",
    question: "對於「未知」，你的態度是？",
    options: [
      { id: "q16a", text: "謹慎小心，喜歡在確定範圍內探索", tone: "A" },
      { id: "q16b", text: "充滿好奇，想要深入了解和學習", tone: "B" },
      { id: "q16c", text: "躍躍欲試，把它當作新的挑戰", tone: "C" },
      { id: "q16d", text: "保持開放，願意接受新的可能性", tone: "D" },
      { id: "q16e", text: "稍有緊張，但相信會有好的結果", tone: "E" },
    ],
  },
  {
    id: "q17",
    section: "生活方式與個性",
    question: "你最常使用的社群媒體內容類型？",
    options: [
      { id: "q17a", text: "生活美學、居家佈置相關", tone: "A" },
      { id: "q17b", text: "文化藝術、知識學習相關", tone: "B" },
      { id: "q17c", text: "運動健身、戶外冒險相關", tone: "C" },
      { id: "q17d", text: "美食料理、餐廳推薦相關", tone: "D" },
      { id: "q17e", text: "朋友動態、搞笑娛樂相關", tone: "E" },
    ],
  },
  // 第四部分：深度探索 (3題)
  {
    id: "q18",
    section: "深度探索",
    question: "如果要用一種顏色來代表你理想的旅行，會是？",
    options: [
      { id: "q18a", text: "藍色 - 寧靜深邃，如海洋般遼闊", tone: "A" },
      { id: "q18b", text: "綠色 - 自然和諧，充滿生命力", tone: "B" },
      { id: "q18c", text: "橙色 - 熱情活力，充滿能量", tone: "C" },
      { id: "q18d", text: "紫色 - 神秘優雅，富有內涵", tone: "D" },
      { id: "q18e", text: "黃色 - 溫暖明亮，帶來歡樂", tone: "E" },
    ],
  },
  {
    id: "q19",
    section: "深度探索",
    question: "如果旅行是一首歌，你希望它的節奏是？",
    options: [
      { id: "q19a", text: "慢板 - 悠揚緩慢，讓人沉澱思考", tone: "A" },
      { id: "q19b", text: "中板 - 穩定從容，有條不紊", tone: "B" },
      { id: "q19c", text: "快板 - 節奏明快，充滿動感", tone: "C" },
      { id: "q19d", text: "變奏 - 豐富多變，層次分明", tone: "D" },
      { id: "q19e", text: "和聲 - 和諧融洽，溫暖人心", tone: "E" },
    ],
  },
  {
    id: "q20",
    section: "深度探索",
    question: "最後一題：完成這句話「旅行對我而言，就像是___」",
    options: [
      { id: "q20a", text: "心靈的充電器，讓我重新獲得能量", tone: "A" },
      { id: "q20b", text: "人生的教科書，每次都有新的學習", tone: "B" },
      { id: "q20c", text: "突破的催化劑，讓我變得更勇敢", tone: "C" },
      { id: "q20d", text: "靈感的泉源，激發我的創造力", tone: "D" },
      { id: "q20e", text: "友誼的橋樑，連結我與世界", tone: "E" },
    ],
  },
]

const toneDescriptions = {
  chill: {
    name: "慢活調 (Chill Tone)",
    icon: Heart,
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    description: "追求內心平靜，享受緩慢節奏的旅行體驗",
    characteristics: ["重視心靈放鬆", "喜歡寧靜環境", "享受慢節奏生活", "注重身心平衡"],
    destinations: ["京都", "托斯卡尼", "峇里島", "瑞士阿爾卑斯山"],
    experiences: ["溫泉療養", "冥想瑜伽", "慢食文化", "自然漫步"],
    companions: ["同樣追求寧靜的旅人", "重視內在成長的夥伴", "喜歡深度交流的朋友"],
  },
  culture: {
    name: "文藝調 (Culture Tone)",
    icon: BookOpen,
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    description: "熱愛學習探索，重視文化深度的旅行體驗",
    characteristics: ["對歷史文化感興趣", "喜歡深度學習", "重視藝術美學", "追求知識增長"],
    destinations: ["巴黎", "羅馬", "伊斯坦堡", "京都"],
    experiences: ["博物館深度導覽", "藝術工作坊", "歷史古蹟探索", "文化講座"],
    companions: ["熱愛文化的學習者", "藝術愛好者", "歷史文化專家", "深度旅行者"],
  },
  adventure: {
    name: "冒險調 (Adventure Tone)",
    icon: Mountain,
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    description: "追求刺激挑戰，勇於嘗試新事物的旅行體驗",
    characteristics: ["熱愛挑戰刺激", "勇於突破舒適圈", "體力充沛", "喜歡戶外活動"],
    destinations: ["新西蘭", "冰島", "尼泊爾", "巴塔哥尼亞"],
    experiences: ["極限運動", "野外露營", "登山健行", "探險活動"],
    companions: ["冒險精神旺盛的夥伴", "戶外運動愛好者", "挑戰者", "體能佳的旅人"],
  },
  taste: {
    name: "品味調 (Taste Tone)",
    icon: Sparkles,
    color: "bg-pink-500",
    bgColor: "bg-pink-50",
    textColor: "text-pink-700",
    description: "追求精緻品質，重視美學體驗的旅行風格",
    characteristics: ["注重生活品質", "追求精緻體驗", "重視美學設計", "喜歡高品質服務"],
    destinations: ["東京", "米蘭", "哥本哈根", "巴黎"],
    experiences: ["米其林餐廳", "精品購物", "設計飯店", "藝術展覽"],
    companions: ["品味相近的旅人", "追求質感的夥伴", "設計愛好者", "美食家"],
  },
  social: {
    name: "社交調 (Social Tone)",
    icon: Users,
    color: "bg-green-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    description: "喜歡熱鬧互動，享受人際連結的旅行體驗",
    characteristics: ["熱愛社交互動", "喜歡結交新朋友", "享受團體活動", "善於溝通交流"],
    destinations: ["曼谷", "里約", "巴塞隆納", "峇里島"],
    experiences: ["當地節慶", "料理課程", "青年旅館", "文化交流"],
    companions: ["開朗外向的旅人", "社交達人", "文化交流愛好者", "團體旅行者"],
  },
  mixed: {
    name: "混合調 (Mixed Tone)",
    icon: Palette,
    color: "bg-indigo-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    description: "多元興趣，喜歡豐富變化的旅行體驗",
    characteristics: ["興趣廣泛多元", "適應力強", "喜歡變化", "平衡各種體驗"],
    destinations: ["根據心情和季節選擇不同目的地"],
    experiences: ["結合多種旅行元素", "彈性行程安排", "多樣化體驗"],
    companions: ["各種類型的旅伴", "適應力強的夥伴", "開放包容的旅人"],
  },
}

export default function ToneDiscoveryPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const calculateTone = () => {
    const toneCount: Record<string, number> = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
    }

    Object.values(answers).forEach((answerId) => {
      const question = questions.find((q) => q.options.some((opt) => opt.id === answerId))
      const option = question?.options.find((opt) => opt.id === answerId)
      if (option) {
        toneCount[option.tone] = (toneCount[option.tone] || 0) + 1
      }
    })

    // Map letter scores to tone types
    const maxScore = Math.max(...Object.values(toneCount))
    const primaryToneLetters = Object.entries(toneCount)
      .filter(([, score]) => score === maxScore)
      .map(([letter]) => letter)

    // Determine primary tone based on highest score
    let primaryTone = "mixed"
    if (primaryToneLetters.length === 1) {
      const letter = primaryToneLetters[0]
      switch (letter) {
        case "A":
          primaryTone = "chill"
          break
        case "B":
          primaryTone = "culture"
          break
        case "C":
          primaryTone = "adventure"
          break
        case "D":
          primaryTone = "taste"
          break
        case "E":
          primaryTone = "social"
          break
      }
    }

    // Get secondary characteristics
    const sortedTones = Object.entries(toneCount)
      .sort(([, a], [, b]) => b - a)
      .slice(1, 3)

    return {
      primary: primaryTone,
      scores: toneCount,
      secondary: sortedTones.map(([letter]) => {
        switch (letter) {
          case "A":
            return "chill"
          case "B":
            return "culture"
          case "C":
            return "adventure"
          case "D":
            return "taste"
          case "E":
            return "social"
          default:
            return "mixed"
        }
      }),
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    const { primary, scores } = calculateTone()
    const primaryToneInfo = toneDescriptions[primary as keyof typeof toneDescriptions]
    const Icon = primaryToneInfo.icon

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Compass className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">你的旅行調性分析結果</h1>
            <p className="text-muted-foreground text-lg">「發現你的專屬旅行調調」</p>
          </div>

          {/* Main Result */}
          <Card className={`mb-8 border-2 ${primaryToneInfo.bgColor}`}>
            <CardHeader className="text-center pb-4">
              <div
                className={`w-20 h-20 ${primaryToneInfo.color} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl mb-2">你的專屬旅行調性</CardTitle>
              <h2 className={`text-3xl font-bold ${primaryToneInfo.textColor}`}>{primaryToneInfo.name}</h2>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-8">{primaryToneInfo.description}</p>

              {/* Characteristics */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">你的旅行特質</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {primaryToneInfo.characteristics.map((trait, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">調性分析詳情</h3>
                <div className="grid grid-cols-5 gap-2 text-sm">
                  <div className="text-center">
                    <div className="text-blue-600 font-semibold">慢活調</div>
                    <div className="text-2xl font-bold text-blue-600">{scores.A}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-600 font-semibold">文藝調</div>
                    <div className="text-2xl font-bold text-purple-600">{scores.B}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange-600 font-semibold">冒險調</div>
                    <div className="text-2xl font-bold text-orange-600">{scores.C}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-pink-600 font-semibold">品味調</div>
                    <div className="text-2xl font-bold text-pink-600">{scores.D}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 font-semibold">社交調</div>
                    <div className="text-2xl font-bold text-green-600">{scores.E}</div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    推薦目的地
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {primaryToneInfo.destinations.map((dest, index) => (
                      <li key={index}>• {dest}</li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Mountain className="w-4 h-4 mr-2" />
                    推薦體驗
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {primaryToneInfo.experiences.map((exp, index) => (
                      <li key={index}>• {exp}</li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    適合的旅伴
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {primaryToneInfo.companions.map((comp, index) => (
                      <li key={index}>• {comp}</li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/matching">
                  <Button size="lg" className="px-8">
                    尋找相似調性的旅伴
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 bg-transparent"
                  onClick={() => {
                    setShowResults(false)
                    setCurrentQuestion(0)
                    setAnswers({})
                  }}
                >
                  重新進行分析
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 w-4 h-4" />
                返回首頁
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const currentAnswer = answers[currentQ.id]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回首頁
            </Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            {currentQuestion + 1} / {questions.length}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              {currentQ.section} ({Math.ceil((currentQuestion + 1) / 5)}/4)
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Compass className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl mb-2">{currentQ.question}</CardTitle>
            <p className="text-muted-foreground">選擇最符合你想法的選項</p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {currentQ.options.map((option) => {
                const isSelected = currentAnswer === option.id

                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(currentQ.id, option.id)}
                    className={`p-6 rounded-lg border-2 transition-all text-left hover:border-primary/50 ${
                      isSelected ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                          isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-lg leading-relaxed">{option.text}</div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            上一題
          </Button>

          <Button onClick={nextQuestion} disabled={!currentAnswer}>
            {currentQuestion === questions.length - 1 ? "查看結果" : "下一題"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
