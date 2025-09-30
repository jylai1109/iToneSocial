"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, X, MapPin, Calendar, Users, MessageCircle, Compass, Camera, Mountain, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface TravelProfile {
  id: string
  name: string
  age: number
  location: string
  avatar: string
  primaryTone: string
  secondaryTones: string[]
  bio: string
  travelExperience: string[]
  upcomingTrips: string[]
  interests: string[]
  matchPercentage: number
  photos: string[]
}

const mockProfiles: TravelProfile[] = [
  {
    id: "1",
    name: "小雅",
    age: 28,
    location: "台北",
    avatar: "/asian-woman-traveler.jpg",
    primaryTone: "文化探索者",
    secondaryTones: ["在地體驗家", "社交達人"],
    bio: "熱愛深度文化體驗，喜歡與當地人交流，探索隱藏的文化寶藏。相信旅行不只是看風景，更是體驗不同的生活方式。",
    travelExperience: ["日本", "韓國", "泰國", "越南", "印尼"],
    upcomingTrips: ["印度文化之旅", "尼泊爾徒步"],
    interests: ["攝影", "美食", "歷史", "藝術"],
    matchPercentage: 95,
    photos: ["/temple-photography.jpg", "/vibrant-local-market.png", "/vibrant-cultural-festival.png"],
  },
  {
    id: "2",
    name: "阿明",
    age: 32,
    location: "高雄",
    avatar: "/asian-man-backpacker.jpg",
    primaryTone: "冒險探索家",
    secondaryTones: ["隨興旅者", "彈性旅人"],
    bio: "喜歡挑戰自己的極限，從高山到深海都是我的遊樂場。相信最美的風景總在最難到達的地方。",
    travelExperience: ["尼泊爾", "紐西蘭", "挪威", "冰島", "巴塔哥尼亞"],
    upcomingTrips: ["阿爾卑斯山攀登", "南極探險"],
    interests: ["登山", "潛水", "攝影", "極限運動"],
    matchPercentage: 87,
    photos: ["/mountain-climbing.png", "/scuba-diving.jpg", "/aurora-borealis.png"],
  },
  {
    id: "3",
    name: "美琪",
    age: 26,
    location: "台中",
    avatar: "/young-woman-photographer.jpg",
    primaryTone: "悠閒度假者",
    secondaryTones: ["奢華享受者", "規劃大師"],
    bio: "追求高品質的旅行體驗，喜歡精心規劃每個細節。相信旅行應該是放鬆身心的美好時光。",
    travelExperience: ["馬爾地夫", "巴厘島", "普吉島", "沖繩", "濟州島"],
    upcomingTrips: ["歐洲城堡之旅", "日本溫泉之旅"],
    interests: ["Spa", "美食", "購物", "攝影"],
    matchPercentage: 78,
    photos: ["/luxury-resort.png", "/spa-treatment.png", "/fine-dining-experience.png"],
  },
  {
    id: "4",
    name: "志豪",
    age: 30,
    location: "新竹",
    avatar: "/tech-guy-traveler.jpg",
    primaryTone: "社交達人",
    secondaryTones: ["文化探索者", "美食愛好者"],
    bio: "喜歡結交來自世界各地的朋友，相信旅行最大的收穫是人與人之間的連結。總是能在旅途中找到最棒的當地朋友。",
    travelExperience: ["歐洲背包旅行", "東南亞", "南美洲", "澳洲", "紐西蘭"],
    upcomingTrips: ["非洲野生動物之旅", "中東文化探索"],
    interests: ["語言學習", "料理", "音樂", "舞蹈"],
    matchPercentage: 82,
    photos: ["/group-travel-friends.jpg", "/local-cooking-class.jpg", "/street-festival.jpg"],
  },
]

export default function MatchingPage() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const [likedProfiles, setLikedProfiles] = useState<string[]>([])
  const [passedProfiles, setPassedProfiles] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("discover")
  const [searchLocation, setSearchLocation] = useState("")
  const [ageRange, setAgeRange] = useState("")
  const [toneFilter, setToneFilter] = useState("")

  const currentProfile = mockProfiles[currentProfileIndex]

  const handleLike = () => {
    if (currentProfile) {
      setLikedProfiles((prev) => [...prev, currentProfile.id])
      nextProfile()
    }
  }

  const handlePass = () => {
    if (currentProfile) {
      setPassedProfiles((prev) => [...prev, currentProfile.id])
      nextProfile()
    }
  }

  const nextProfile = () => {
    if (currentProfileIndex < mockProfiles.length - 1) {
      setCurrentProfileIndex((prev) => prev + 1)
    }
  }

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
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 w-4 h-4" />
                返回首頁
              </Button>
            </Link>
            <h1 className="text-xl font-bold">旅伴配對</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="discover">探索配對</TabsTrigger>
            <TabsTrigger value="matches">我的配對</TabsTrigger>
            <TabsTrigger value="messages">訊息</TabsTrigger>
          </TabsList>

          {/* Discover Tab */}
          <TabsContent value="discover" className="mt-8">
            {currentProfile ? (
              <div className="max-w-2xl mx-auto">
                <Card className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={currentProfile.photos[0] || "/placeholder.svg"}
                      alt={currentProfile.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {currentProfile.matchPercentage}% 配對度
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold">{currentProfile.name}</h2>
                        <p className="text-muted-foreground flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {currentProfile.location} • {currentProfile.age} 歲
                        </p>
                      </div>
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={currentProfile.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{currentProfile.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Primary Tone */}
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <div
                          className={`w-8 h-8 ${getToneColor(currentProfile.primaryTone)} rounded-lg flex items-center justify-center mr-3`}
                        >
                          {(() => {
                            const Icon = getToneIcon(currentProfile.primaryTone)
                            return <Icon className="w-4 h-4 text-white" />
                          })()}
                        </div>
                        <span className="font-semibold text-lg">{currentProfile.primaryTone}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentProfile.secondaryTones.map((tone) => (
                          <Badge key={tone} variant="secondary" className="text-xs">
                            {tone}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="mb-6">
                      <p className="text-muted-foreground leading-relaxed">{currentProfile.bio}</p>
                    </div>

                    {/* Travel Experience */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">旅行足跡</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProfile.travelExperience.map((place) => (
                          <Badge key={place} variant="outline" className="text-xs">
                            {place}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Upcoming Trips */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        即將出發
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProfile.upcomingTrips.map((trip) => (
                          <Badge key={trip} className="text-xs bg-accent text-accent-foreground">
                            {trip}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Interests */}
                    <div className="mb-8">
                      <h3 className="font-semibold mb-2">興趣愛好</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProfile.interests.map((interest) => (
                          <Badge key={interest} variant="secondary" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-center">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-16 h-16 rounded-full p-0 bg-transparent"
                        onClick={handlePass}
                      >
                        <X className="w-6 h-6" />
                      </Button>
                      <Button
                        size="lg"
                        className="w-16 h-16 rounded-full p-0 bg-red-500 hover:bg-red-600"
                        onClick={handleLike}
                      >
                        <Heart className="w-6 h-6" />
                      </Button>
                      <Button variant="outline" size="lg" className="w-16 h-16 rounded-full p-0 bg-transparent">
                        <MessageCircle className="w-6 h-6" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center py-12">
                <Compass className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">沒有更多配對了</h2>
                <p className="text-muted-foreground mb-6">調整你的搜尋條件來發現更多旅伴</p>
                <Button onClick={() => setCurrentProfileIndex(0)}>重新開始</Button>
              </div>
            )}
          </TabsContent>

          {/* Matches Tab */}
          <TabsContent value="matches" className="mt-8">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <Input
                    placeholder="搜尋地點..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Select value={ageRange} onValueChange={setAgeRange}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="年齡範圍" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18-25">18-25 歲</SelectItem>
                    <SelectItem value="26-35">26-35 歲</SelectItem>
                    <SelectItem value="36-45">36-45 歲</SelectItem>
                    <SelectItem value="46+">46+ 歲</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={toneFilter} onValueChange={setToneFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="旅行調性" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventurer">冒險探索家</SelectItem>
                    <SelectItem value="explorer">文化探索者</SelectItem>
                    <SelectItem value="relaxer">悠閒度假者</SelectItem>
                    <SelectItem value="socializer">社交達人</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProfiles
                .filter((profile) => likedProfiles.includes(profile.id))
                .map((profile) => (
                  <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={profile.photos[0] || "/placeholder.svg"}
                        alt={profile.name}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                        {profile.matchPercentage}%
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{profile.name}</h3>
                        <span className="text-sm text-muted-foreground">{profile.age} 歲</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {profile.location}
                      </p>
                      <div className="flex items-center mb-3">
                        <div
                          className={`w-6 h-6 ${getToneColor(profile.primaryTone)} rounded-md flex items-center justify-center mr-2`}
                        >
                          {(() => {
                            const Icon = getToneIcon(profile.primaryTone)
                            return <Icon className="w-3 h-3 text-white" />
                          })()}
                        </div>
                        <span className="text-sm font-medium">{profile.primaryTone}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          聊天
                        </Button>
                        <Button variant="outline" size="sm">
                          查看
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {likedProfiles.length === 0 && (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">還沒有配對</h2>
                <p className="text-muted-foreground mb-6">開始探索並喜歡其他旅人來建立配對</p>
                <Button onClick={() => setActiveTab("discover")}>開始探索</Button>
              </div>
            )}
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="mt-8">
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">訊息功能開發中</h2>
              <p className="text-muted-foreground">即將推出即時聊天功能，敬請期待！</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
