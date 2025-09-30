"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Users,
  MapPin,
  Heart,
  Settings,
  Bell,
  Compass,
  Camera,
  Mountain,
  ArrowRight,
  Plus,
} from "lucide-react"
import Link from "next/link"

const mockUser = {
  name: "小雅",
  email: "xiaoya@example.com",
  avatar: "/asian-woman-traveler.jpg",
  location: "台北",
  primaryTone: "文化探索者",
  secondaryTones: ["在地體驗家", "社交達人"],
  joinDate: "2024-01-15",
  stats: {
    eventsJoined: 12,
    matches: 8,
    eventsCreated: 3,
  },
}

const recentMatches = [
  {
    id: "1",
    name: "阿明",
    avatar: "/asian-man-backpacker.jpg",
    tone: "冒險探索家",
    matchPercentage: 87,
    location: "高雄",
  },
  {
    id: "2",
    name: "美琪",
    avatar: "/young-woman-photographer.jpg",
    tone: "悠閒度假者",
    matchPercentage: 78,
    location: "台中",
  },
  {
    id: "3",
    name: "志豪",
    avatar: "/tech-guy-traveler.jpg",
    tone: "社交達人",
    matchPercentage: 82,
    location: "新竹",
  },
]

const upcomingEvents = [
  {
    id: "1",
    title: "台北老城區文化探索之旅",
    date: "2024-02-15",
    time: "09:00",
    location: "台北市萬華區",
    participants: 5,
    maxParticipants: 8,
    image: "/temple-photography.jpg",
  },
  {
    id: "2",
    title: "宜蘭溫泉放鬆之旅",
    date: "2024-02-22",
    time: "08:00",
    location: "宜蘭礁溪",
    participants: 7,
    maxParticipants: 10,
    image: "/luxury-resort.png",
  },
]

export default function DashboardPage() {
  const getToneIcon = (tone: string) => {
    switch (tone) {
      case "文化探索者":
        return Camera
      case "冒險探索家":
        return Mountain
      case "悠閒度假者":
        return Heart
      case "社交達人":
        return Users
      default:
        return Compass
    }
  }

  const getToneColor = (tone: string) => {
    switch (tone) {
      case "文化探索者":
        return "bg-purple-500"
      case "冒險探索家":
        return "bg-red-500"
      case "悠閒度假者":
        return "bg-blue-500"
      case "社交達人":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Compass className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">iTone</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/matching" className="text-muted-foreground hover:text-foreground transition-colors">
                  配對
                </Link>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  活動
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src={mockUser.avatar || "/placeholder.svg"} />
                <AvatarFallback>{mockUser.name[0]}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">歡迎回來，{mockUser.name}！</h1>
          <p className="text-muted-foreground">準備好開始新的旅行冒險了嗎？</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader className="text-center pb-4">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={mockUser.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-2xl">{mockUser.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{mockUser.name}</CardTitle>
                <p className="text-muted-foreground flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {mockUser.location}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                {/* Primary Tone */}
                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <div
                      className={`w-8 h-8 ${getToneColor(mockUser.primaryTone)} rounded-lg flex items-center justify-center mr-3`}
                    >
                      {(() => {
                        const Icon = getToneIcon(mockUser.primaryTone)
                        return <Icon className="w-4 h-4 text-white" />
                      })()}
                    </div>
                    <span className="font-semibold">{mockUser.primaryTone}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {mockUser.secondaryTones.map((tone) => (
                      <Badge key={tone} variant="secondary" className="text-xs">
                        {tone}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full mb-4">編輯個人檔案</Button>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{mockUser.stats.eventsJoined}</div>
                    <div className="text-xs text-muted-foreground">參加活動</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{mockUser.stats.matches}</div>
                    <div className="text-xs text-muted-foreground">配對成功</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-chart-3">{mockUser.stats.eventsCreated}</div>
                    <div className="text-xs text-muted-foreground">創建活動</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Matches */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-500" />
                  最新配對
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentMatches.map((match) => (
                  <div key={match.id} className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={match.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{match.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{match.name}</div>
                      <div className="text-xs text-muted-foreground">{match.location}</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {match.matchPercentage}%
                    </Badge>
                  </div>
                ))}
                <Link href="/matching">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    查看更多配對
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="events" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="events">我的活動</TabsTrigger>
                <TabsTrigger value="discover">探索推薦</TabsTrigger>
                <TabsTrigger value="activity">最新動態</TabsTrigger>
              </TabsList>

              {/* My Events Tab */}
              <TabsContent value="events" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">即將參加的活動</h2>
                    <Link href="/events">
                      <Button size="sm">
                        <Plus className="mr-2 w-4 h-4" />
                        瀏覽更多活動
                      </Button>
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <Card key={event.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex space-x-4">
                            <img
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              className="w-20 h-20 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold mb-2">{event.title}</h3>
                              <div className="space-y-1 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  {new Date(event.date).toLocaleDateString("zh-TW")} {event.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {event.location}
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-2" />
                                  {event.participants}/{event.maxParticipants} 人參加
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-between">
                              <Badge variant="secondary">已報名</Badge>
                              <Button variant="outline" size="sm">
                                查看詳情
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Discover Tab */}
              <TabsContent value="discover" className="mt-6">
                <div className="text-center py-12">
                  <Compass className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">探索新的旅行機會</h2>
                  <p className="text-muted-foreground mb-6">基於你的旅行調性，我們為你推薦最適合的活動和旅伴</p>
                  <div className="flex gap-4 justify-center">
                    <Link href="/matching">
                      <Button>尋找旅伴</Button>
                    </Link>
                    <Link href="/events">
                      <Button variant="outline">瀏覽活動</Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="mt-6">
                <div className="text-center py-12">
                  <Bell className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">最新動態</h2>
                  <p className="text-muted-foreground">你的旅行社交動態將會顯示在這裡</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
