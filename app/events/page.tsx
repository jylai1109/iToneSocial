"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Plus,
  Search,
  ArrowLeft,
  Camera,
  Mountain,
  Utensils,
  Compass,
  Heart,
  Star,
} from "lucide-react"
import Link from "next/link"

interface TravelEvent {
  id: string
  title: string
  description: string
  location: string
  date: string
  time: string
  duration: string
  maxParticipants: number
  currentParticipants: number
  price: number
  category: string
  difficulty: string
  organizer: {
    name: string
    avatar: string
    tone: string
    rating: number
  }
  participants: Array<{
    name: string
    avatar: string
  }>
  images: string[]
  tags: string[]
}

const mockEvents: TravelEvent[] = [
  {
    id: "1",
    title: "台北老城區文化探索之旅",
    description:
      "深度探索台北萬華、大稻埕等老城區，體驗傳統文化與現代融合的魅力。我們將參訪歷史建築、品嚐在地小吃、與當地老店主人交流，感受台北最真實的一面。",
    location: "台北市萬華區",
    date: "2024-02-15",
    time: "09:00",
    duration: "8小時",
    maxParticipants: 8,
    currentParticipants: 5,
    price: 1200,
    category: "文化體驗",
    difficulty: "輕鬆",
    organizer: {
      name: "小雅",
      avatar: "/asian-woman-traveler.jpg",
      tone: "文化探索者",
      rating: 4.8,
    },
    participants: [
      { name: "阿明", avatar: "/asian-man-backpacker.jpg" },
      { name: "美琪", avatar: "/young-woman-photographer.jpg" },
      { name: "志豪", avatar: "/tech-guy-traveler.jpg" },
      { name: "小華", avatar: "/placeholder.svg?key=user1" },
      { name: "雅婷", avatar: "/placeholder.svg?key=user2" },
    ],
    images: ["/temple-photography.jpg", "/vibrant-local-market.png", "/vibrant-cultural-festival.png"],
    tags: ["文化", "美食", "攝影", "歷史"],
  },
  {
    id: "2",
    title: "陽明山日出攝影團",
    description:
      "凌晨出發前往陽明山拍攝日出美景，專業攝影師帶領，適合攝影愛好者。我們會在最佳拍攝點等待日出，並分享攝影技巧與心得。",
    location: "陽明山國家公園",
    date: "2024-02-18",
    time: "04:30",
    duration: "6小時",
    maxParticipants: 6,
    currentParticipants: 3,
    price: 800,
    category: "攝影",
    difficulty: "中等",
    organizer: {
      name: "阿明",
      avatar: "/asian-man-backpacker.jpg",
      tone: "冒險探索家",
      rating: 4.9,
    },
    participants: [
      { name: "小雅", avatar: "/asian-woman-traveler.jpg" },
      { name: "美琪", avatar: "/young-woman-photographer.jpg" },
      { name: "大衛", avatar: "/placeholder.svg?key=user3" },
    ],
    images: ["/mountain-climbing.png", "/aurora-borealis.png"],
    tags: ["攝影", "日出", "自然", "早起"],
  },
  {
    id: "3",
    title: "宜蘭溫泉放鬆之旅",
    description:
      "週末兩天一夜的宜蘭溫泉之旅，入住精選溫泉飯店，享受泡湯、美食、SPA的完美組合。適合想要放鬆身心的朋友們。",
    location: "宜蘭礁溪",
    date: "2024-02-22",
    time: "08:00",
    duration: "2天1夜",
    maxParticipants: 10,
    currentParticipants: 7,
    price: 3500,
    category: "放鬆度假",
    difficulty: "輕鬆",
    organizer: {
      name: "美琪",
      avatar: "/young-woman-photographer.jpg",
      tone: "悠閒度假者",
      rating: 4.7,
    },
    participants: [
      { name: "小雅", avatar: "/asian-woman-traveler.jpg" },
      { name: "志豪", avatar: "/tech-guy-traveler.jpg" },
      { name: "小華", avatar: "/placeholder.svg?key=user1" },
      { name: "雅婷", avatar: "/placeholder.svg?key=user2" },
      { name: "大衛", avatar: "/placeholder.svg?key=user3" },
      { name: "小美", avatar: "/placeholder.svg?key=user4" },
      { name: "阿傑", avatar: "/placeholder.svg?key=user5" },
    ],
    images: ["/luxury-resort.png", "/spa-treatment.png"],
    tags: ["溫泉", "放鬆", "美食", "住宿"],
  },
  {
    id: "4",
    title: "台南美食文化深度遊",
    description:
      "三天兩夜的台南深度美食之旅，由在地美食達人帶路，品嚐最道地的台南小吃，探訪隱藏版美食，體驗府城的飲食文化。",
    location: "台南市",
    date: "2024-03-01",
    time: "10:00",
    duration: "3天2夜",
    maxParticipants: 12,
    currentParticipants: 9,
    price: 4200,
    category: "美食體驗",
    difficulty: "輕鬆",
    organizer: {
      name: "志豪",
      avatar: "/tech-guy-traveler.jpg",
      tone: "社交達人",
      rating: 4.6,
    },
    participants: [
      { name: "小雅", avatar: "/asian-woman-traveler.jpg" },
      { name: "阿明", avatar: "/asian-man-backpacker.jpg" },
      { name: "美琪", avatar: "/young-woman-photographer.jpg" },
    ],
    images: ["/local-cooking-class.jpg", "/street-festival.jpg", "/fine-dining-experience.png"],
    tags: ["美食", "文化", "在地體驗", "社交"],
  },
]

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("browse")
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "文化體驗":
        return Camera
      case "攝影":
        return Camera
      case "放鬆度假":
        return Heart
      case "美食體驗":
        return Utensils
      case "冒險活動":
        return Mountain
      default:
        return Compass
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "文化體驗":
        return "bg-purple-500"
      case "攝影":
        return "bg-blue-500"
      case "放鬆度假":
        return "bg-green-500"
      case "美食體驗":
        return "bg-orange-500"
      case "冒險活動":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = locationFilter === "all" || event.location.includes(locationFilter)
    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter

    return matchesSearch && matchesLocation && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 w-4 h-4" />
                返回首頁
              </Button>
            </Link>
            <h1 className="text-xl font-bold">活動揪團</h1>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 w-4 h-4" />
                  創建活動
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>創建新活動</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">活動標題</Label>
                    <Input id="title" placeholder="輸入活動標題..." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">活動描述</Label>
                    <Textarea id="description" placeholder="詳細描述你的活動..." rows={4} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">地點</Label>
                      <Input id="location" placeholder="活動地點" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">類別</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="選擇類別" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">所有類別</SelectItem>
                          <SelectItem value="cultural">文化體驗</SelectItem>
                          <SelectItem value="photography">攝影</SelectItem>
                          <SelectItem value="relaxation">放鬆度假</SelectItem>
                          <SelectItem value="food">美食體驗</SelectItem>
                          <SelectItem value="adventure">冒險活動</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">日期</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">時間</Label>
                      <Input id="time" type="time" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">時長</Label>
                      <Input id="duration" placeholder="例：8小時" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="participants">最大參與人數</Label>
                      <Input id="participants" type="number" placeholder="10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">費用 (NT$)</Label>
                      <Input id="price" type="number" placeholder="1000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">標籤</Label>
                    <Input id="tags" placeholder="用逗號分隔，例：文化,美食,攝影" />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button className="flex-1">創建活動</Button>
                    <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                      取消
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse">瀏覽活動</TabsTrigger>
            <TabsTrigger value="joined">我參加的</TabsTrigger>
            <TabsTrigger value="created">我創建的</TabsTrigger>
          </TabsList>

          {/* Browse Events Tab */}
          <TabsContent value="browse" className="mt-8">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="搜尋活動..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="選擇地點" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有地點</SelectItem>
                  <SelectItem value="台北">台北</SelectItem>
                  <SelectItem value="新北">新北</SelectItem>
                  <SelectItem value="宜蘭">宜蘭</SelectItem>
                  <SelectItem value="台南">台南</SelectItem>
                  <SelectItem value="高雄">高雄</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="選擇類別" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有類別</SelectItem>
                  <SelectItem value="cultural">文化體驗</SelectItem>
                  <SelectItem value="photography">攝影</SelectItem>
                  <SelectItem value="relaxation">放鬆度假</SelectItem>
                  <SelectItem value="food">美食體驗</SelectItem>
                  <SelectItem value="adventure">冒險活動</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => {
                const CategoryIcon = getCategoryIcon(event.category)
                const isAlmostFull = event.currentParticipants / event.maxParticipants > 0.8

                return (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={event.images[0] || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={`${getCategoryColor(event.category)} text-white`}>
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {event.category}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-background/80">
                          NT$ {event.price}
                        </Badge>
                      </div>
                      {isAlmostFull && (
                        <div className="absolute bottom-3 right-3">
                          <Badge className="bg-red-500 text-white">即將額滿</Badge>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(event.date).toLocaleDateString("zh-TW")} {event.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-2" />
                          {event.currentParticipants}/{event.maxParticipants} 人
                        </div>
                      </div>

                      {/* Organizer */}
                      <div className="flex items-center mb-4">
                        <Avatar className="w-8 h-8 mr-3">
                          <AvatarImage src={event.organizer.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{event.organizer.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{event.organizer.name}</div>
                          <div className="text-xs text-muted-foreground flex items-center">
                            <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {event.organizer.rating}
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {event.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {event.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{event.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Participants Preview */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex -space-x-2">
                          {event.participants.slice(0, 4).map((participant, index) => (
                            <Avatar key={index} className="w-6 h-6 border-2 border-background">
                              <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="text-xs">{participant.name[0]}</AvatarFallback>
                            </Avatar>
                          ))}
                          {event.participants.length > 4 && (
                            <div className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                              <span className="text-xs text-muted-foreground">+{event.participants.length - 4}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button className="w-full" disabled={event.currentParticipants >= event.maxParticipants}>
                        {event.currentParticipants >= event.maxParticipants ? "已額滿" : "立即報名"}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">沒有找到相關活動</h2>
                <p className="text-muted-foreground mb-6">調整搜尋條件或創建新活動</p>
                <Button onClick={() => setIsCreateDialogOpen(true)}>
                  <Plus className="mr-2 w-4 h-4" />
                  創建活動
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Joined Events Tab */}
          <TabsContent value="joined" className="mt-8">
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">你還沒有參加任何活動</h2>
              <p className="text-muted-foreground mb-6">瀏覽並報名感興趣的活動</p>
              <Button onClick={() => setActiveTab("browse")}>瀏覽活動</Button>
            </div>
          </TabsContent>

          {/* Created Events Tab */}
          <TabsContent value="created" className="mt-8">
            <div className="text-center py-12">
              <Plus className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">你還沒有創建任何活動</h2>
              <p className="text-muted-foreground mb-6">創建你的第一個活動，邀請其他旅人加入</p>
              <Button onClick={() => setIsCreateDialogOpen(true)}>
                <Plus className="mr-2 w-4 h-4" />
                創建活動
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
