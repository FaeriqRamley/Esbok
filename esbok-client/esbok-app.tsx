"use client"

import { useState } from "react"
import { Home, MapPin, Plus, Heart, Activity, Apple, Clock, Users, Camera, X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

// Sample data for pantry items
const pantryItems = [
  {
    id: 1,
    name: "Fresh Apples",
    contributor: "Sarah M.",
    timeAgo: "2 hours ago",
    location: "Community Center Pantry",
    category: "Fruits",
    image: "/placeholder.svg?height=120&width=120",
    likes: 5,
    isPrivate: false,
  },
  {
    id: 2,
    name: "Homemade Cookies",
    contributor: "Mike R.",
    timeAgo: "4 hours ago",
    location: "Park Street Pantry",
    category: "Snacks",
    image: "/placeholder.svg?height=120&width=120",
    likes: 12,
    isPrivate: false,
  },
  {
    id: 3,
    name: "Canned Soup",
    contributor: "Emma L.",
    timeAgo: "1 day ago",
    location: "Library Pantry",
    category: "Canned Goods",
    image: "/placeholder.svg?height=120&width=120",
    likes: 3,
    isPrivate: false,
  },
]

// Add this sample data for nearby pantries at the top of the file, after the existing pantryItems array:

const nearbyPantries = [
  {
    id: 1,
    name: "Community Center Pantry",
    distance: "0.3 km",
    itemCount: 24,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Park Street Little Pantry",
    distance: "0.7 km",
    itemCount: 16,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Library Food Share",
    distance: "1.2 km",
    itemCount: 31,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Green Gardens Pantry",
    distance: "1.5 km",
    itemCount: 8,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Downtown Community Fridge",
    distance: "1.8 km",
    itemCount: 19,
    image: "/placeholder.svg?height=80&width=80",
  },
]

// Update the joinedPantries data to include status and add nearby pantries
const allPantries = [
  {
    id: 1,
    name: "Community Center Pantry",
    image: "/placeholder.svg?height=80&width=80",
    itemCount: 24,
    isFavorite: true,
    lastContributed: "2 days ago",
    status: "admin",
  },
  {
    id: 2,
    name: "Green Gardens Pantry",
    image: "/placeholder.svg?height=80&width=80",
    itemCount: 8,
    isFavorite: true,
    lastContributed: "1 week ago",
    status: "admin",
  },
  {
    id: 3,
    name: "Park Street Little Pantry",
    image: "/placeholder.svg?height=80&width=80",
    itemCount: 16,
    isFavorite: false,
    lastContributed: "3 days ago",
    status: "joined",
  },
  {
    id: 4,
    name: "Downtown Community Fridge",
    image: "/placeholder.svg?height=80&width=80",
    itemCount: 19,
    isFavorite: false,
    distance: "1.8 km",
    status: "nearby",
  },
  {
    id: 5,
    name: "Library Food Share",
    image: "/placeholder.svg?height=80&width=80",
    itemCount: 31,
    isFavorite: false,
    distance: "1.2 km",
    status: "nearby",
  },
]

// Sample data for recently viewed pantries
const recentlyViewedPantries = [
  {
    id: 4,
    name: "Downtown Community Fridge",
    image: "/placeholder.svg?height=80&width=80",
    itemCount: 19,
    distance: "1.8 km",
    lastViewed: "1 hour ago",
  },
  {
    id: 5,
    name: "Library Food Share",
    image: "/placeholder.svg?height=80&width=80",
    itemCount: 31,
    distance: "1.2 km",
    lastViewed: "Yesterday",
  },
]

// Sample data for activity feed
const activityFeed = [
  {
    id: 1,
    type: "contribution",
    user: "Sarah M.",
    action: "added Fresh Apples to",
    pantry: "Community Center Pantry",
    timeAgo: "2 hours ago",
    icon: "plus",
  },
  {
    id: 2,
    type: "consumption",
    user: "Mike R.",
    action: "took Homemade Cookies from",
    pantry: "Park Street Pantry",
    timeAgo: "4 hours ago",
    icon: "heart",
  },
  {
    id: 3,
    type: "thanks",
    user: "Emma L.",
    action: "thanked you for your contribution to",
    pantry: "Library Pantry",
    timeAgo: "6 hours ago",
    icon: "heart",
  },
  {
    id: 4,
    type: "new_pantry",
    user: "Community Garden Co-op",
    action: "created a new pantry:",
    pantry: "Organic Veggie Share",
    timeAgo: "1 day ago",
    icon: "plus",
  },
  {
    id: 5,
    type: "milestone",
    user: "Community",
    action: "reached 500 items shared this month!",
    pantry: "",
    timeAgo: "2 days ago",
    icon: "star",
  },
  {
    id: 6,
    type: "expiring",
    user: "System",
    action: "Bread items expiring soon at",
    pantry: "Downtown Community Fridge",
    timeAgo: "3 hours ago",
    icon: "clock",
  },
]

// Add sample data for user's food items after the existing sample data arrays:

const myFoodItems = [
  {
    id: 1,
    name: "Fresh Apples",
    pantry: "Community Center Pantry",
    isShared: true,
    daysOld: 2,
    expiresInDays: 5,
  },
  {
    id: 2,
    name: "Homemade Cookies",
    pantry: "Park Street Pantry",
    isShared: true,
    daysOld: 1,
    expiresInDays: 2,
  },
  {
    id: 3,
    name: "Canned Soup",
    pantry: "Library Pantry",
    isShared: false,
    daysOld: 5,
    expiresInDays: 30,
  },
  {
    id: 4,
    name: "Bread Loaves",
    pantry: "Green Gardens Pantry",
    isShared: true,
    daysOld: 3,
    expiresInDays: 1,
  },
]

// Sample pantries for the dropdown
const availablePantries = [
  { id: 1, name: "Community Center Pantry" },
  { id: 2, name: "Green Gardens Pantry" },
  { id: 3, name: "Park Street Little Pantry" },
  { id: 4, name: "Library Food Share" },
]

// Sample food tags
const availableTags = [
  "Vegetarian",
  "Vegan",
  "Halal",
  "Kosher",
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Organic",
  "Homemade",
  "Fresh",
]

// Add pantryFilter state in the component
export default function EsbokApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [pantryFilter, setPantryFilter] = useState("admin")
  const [showLogFood, setShowLogFood] = useState(false)

  // Log Food form state
  const [foodForm, setFoodForm] = useState({
    name: "",
    expiry: "",
    pantry: "",
    isShareable: false,
    description: "",
    tags: [],
    image: null,
  })

  const handleTagToggle = (tag) => {
    setFoodForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
    }))
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setFoodForm((prev) => ({ ...prev, image: file }))
    }
  }

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", foodForm)
    setShowLogFood(false)
    setActiveTab("home")
    // Reset form
    setFoodForm({
      name: "",
      expiry: "",
      pantry: "",
      isShareable: false,
      description: "",
      tags: [],
      image: null,
    })
  }

  if (showLogFood) {
    return (
      <div className="max-w-sm mx-auto bg-white min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-esbok-border">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowLogFood(false)}
            className="text-gray-600 hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-bold text-gray-800">Log Food</h1>
          <div className="w-10"></div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Image Upload */}
          <div>
            <Label className="text-sm font-semibold text-gray-800 mb-3 block">Photo</Label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="image-upload"
              />
              <div className="w-full h-48 border-2 border-dashed border-esbok-border rounded-lg flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                {foodForm.image ? (
                  <div className="relative w-full h-full">
                    <img
                      src={URL.createObjectURL(foodForm.image) || "/placeholder.svg"}
                      alt="Food preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => setFoodForm((prev) => ({ ...prev, image: null }))}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Camera className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Tap to add photo</p>
                    <p className="text-xs text-gray-400">Optional</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Name Field */}
          <div>
            <Label htmlFor="name" className="text-sm font-semibold text-gray-800 mb-2 block">
              Name *
            </Label>
            <Input
              id="name"
              value={foodForm.name}
              onChange={(e) => setFoodForm((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Enter food name"
              className="border-esbok-border focus:border-esbok-primary"
            />
          </div>

          {/* Expiry Field */}
          <div>
            <Label htmlFor="expiry" className="text-sm font-semibold text-gray-800 mb-2 block">
              Expiry Date *
            </Label>
            <Input
              id="expiry"
              type="date"
              value={foodForm.expiry}
              onChange={(e) => setFoodForm((prev) => ({ ...prev, expiry: e.target.value }))}
              className="border-esbok-border focus:border-esbok-primary"
            />
          </div>

          {/* Pantry Field */}
          <div>
            <Label htmlFor="pantry" className="text-sm font-semibold text-gray-800 mb-2 block">
              Pantry *
            </Label>
            <select
              id="pantry"
              value={foodForm.pantry}
              onChange={(e) => setFoodForm((prev) => ({ ...prev, pantry: e.target.value }))}
              className="w-full px-3 py-2 border border-esbok-border rounded-md focus:outline-none focus:border-esbok-primary text-sm"
            >
              <option value="">Select a pantry</option>
              {availablePantries.map((pantry) => (
                <option key={pantry.id} value={pantry.name}>
                  {pantry.name}
                </option>
              ))}
            </select>
          </div>

          {/* Shareable Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-esbok-border">
            <div>
              <Label className="text-sm font-semibold text-gray-800">Make Shareable</Label>
              <p className="text-xs text-gray-600 mt-1">Allow others to see and take this item</p>
            </div>
            <Switch
              checked={foodForm.isShareable}
              onCheckedChange={(checked) => setFoodForm((prev) => ({ ...prev, isShareable: checked }))}
              className="data-[state=checked]:bg-esbok-primary"
            />
          </div>

          {/* Conditional Fields for Shareable */}
          {foodForm.isShareable && (
            <div className="space-y-6 border-t border-esbok-border pt-6">
              {/* Description Field */}
              <div>
                <Label htmlFor="description" className="text-sm font-semibold text-gray-800 mb-2 block">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={foodForm.description}
                  onChange={(e) => setFoodForm((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Add details about your food item..."
                  className="border-esbok-border focus:border-esbok-primary min-h-[80px]"
                />
              </div>

              {/* Food Tags */}
              <div>
                <Label className="text-sm font-semibold text-gray-800 mb-3 block">Food Tags</Label>
                <div className="flex flex-wrap gap-2">
                  {availableTags.map((tag) => (
                    <Button
                      key={tag}
                      variant={foodForm.tags.includes(tag) ? "default" : "outline"}
                      size="sm"
                      className={`rounded-full text-xs px-3 py-1 h-auto ${
                        foodForm.tags.includes(tag)
                          ? "bg-esbok-primary text-gray-800 hover:bg-esbok-primary/90"
                          : "border-esbok-border text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="p-5 border-t border-esbok-border">
          <Button
            onClick={handleSubmit}
            disabled={!foodForm.name || !foodForm.expiry || !foodForm.pantry}
            className="w-full bg-esbok-primary hover:bg-esbok-primary/90 text-gray-800 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Food Item
          </Button>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-5">
            {/* Header */}
            <div className="text-center py-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Esbok</h1>
              <p className="text-sm text-gray-600 px-4">Share food, build community, reduce waste</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 px-5">
              <Card className="border border-esbok-border">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-esbok-mint flex items-center justify-center">
                    <Apple className="w-4 h-4 text-gray-700" />
                  </div>
                  <p className="text-xs text-gray-600">Items Shared</p>
                  <p className="text-lg font-bold text-gray-800">24</p>
                </CardContent>
              </Card>
              <Card className="border border-esbok-border">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-esbok-peach flex items-center justify-center">
                    <Users className="w-4 h-4 text-gray-700" />
                  </div>
                  <p className="text-xs text-gray-600">Community</p>
                  <p className="text-lg font-bold text-gray-800">156</p>
                </CardContent>
              </Card>
              <Card className="border border-esbok-border">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-esbok-pink flex items-center justify-center">
                    <Heart className="w-4 h-4 text-gray-700" />
                  </div>
                  <p className="text-xs text-gray-600">Likes Given</p>
                  <p className="text-lg font-bold text-gray-800">89</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="px-5">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {pantryItems.map((item) => (
                  <Card key={item.id} className="border border-esbok-border">
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                          <Apple className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className="font-semibold text-sm text-gray-800 truncate">{item.name}</h3>
                            <Badge variant="secondary" className="ml-2 text-xs bg-esbok-mint text-gray-700">
                              {item.category}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600 mb-1">by {item.contributor}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{item.timeAgo}</span>
                            <span>•</span>
                            <MapPin className="w-3 h-3" />
                            <span className="truncate">{item.location}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-2">
                            <Heart className="w-3 h-3 text-esbok-pink" />
                            <span className="text-xs text-gray-600">{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )
      case "nearby":
        return (
          <div className="flex flex-col h-full">
            {/* Map Section */}
            <div className="relative w-full h-64 bg-gray-100 border-b border-esbok-border">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Simulated Map Background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                      </pattern>
                      <rect width="100%" height="100%" fill="#f3f4f6" />
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Map Pins */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-esbok-primary rounded-full flex items-center justify-center shadow-md">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-esbok-primary rounded-full flex items-center justify-center shadow-md">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-esbok-primary rounded-full flex items-center justify-center shadow-md">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-esbok-pink rounded-full flex items-center justify-center shadow-md">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-esbok-pink rotate-45"></div>
                  </div>

                  {/* Current Location Indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 bg-white rounded-md shadow-md">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600">
                  <Plus className="h-4 w-4" />
                </Button>
                <div className="h-px bg-gray-200"></div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600">
                  <span className="text-lg font-medium">−</span>
                </Button>
              </div>

              {/* Current Location Button */}
              <Button
                className="absolute bottom-4 right-4 bg-white text-gray-700 shadow-md hover:bg-gray-50 h-8 px-3 text-xs"
                size="sm"
              >
                <MapPin className="h-3 w-3 mr-1" />
                Current Location
              </Button>
            </div>

            {/* Pantry List Section */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-5 py-4">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Nearby Pantries</h2>
                <div className="space-y-3">
                  {nearbyPantries.map((pantry) => (
                    <Card key={pantry.id} className="border border-esbok-border overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex">
                          {/* Pantry Image */}
                          <div className="w-20 h-20 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                            <img
                              src={pantry.image || "/placeholder.svg"}
                              alt={pantry.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Pantry Info */}
                          <div className="flex-1 p-3">
                            <h3 className="font-semibold text-sm text-gray-800 mb-1">{pantry.name}</h3>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                              <MapPin className="w-3 h-3" />
                              <span>{pantry.distance}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Apple className="w-3 h-3" />
                              <span>{pantry.itemCount} items available</span>
                            </div>
                          </div>

                          {/* Arrow */}
                          <div className="flex items-center pr-3">
                            <div className="text-gray-400">
                              <svg
                                width="6"
                                height="10"
                                viewBox="0 0 6 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 9L5 5L1 1"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      case "pantries":
        const filteredPantries = allPantries.filter((pantry) => pantry.status === pantryFilter)

        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="px-5 pt-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">My Pantries</h1>
              <p className="text-sm text-gray-600">Manage and contribute to your pantries</p>
            </div>

            {/* Create Pantry Button */}
            <div className="px-5">
              <Button className="w-full bg-esbok-primary hover:bg-esbok-primary/90 text-gray-800 font-semibold">
                <Plus className="w-4 h-4 mr-2" />
                Create New Pantry
              </Button>
            </div>

            {/* Filter Pills */}
            <div className="px-5">
              <div className="flex gap-2">
                <Button
                  variant={pantryFilter === "admin" ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full text-xs px-4 ${
                    pantryFilter === "admin"
                      ? "bg-esbok-primary text-gray-800 hover:bg-esbok-primary/90"
                      : "border-esbok-border text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setPantryFilter("admin")}
                >
                  Admin
                </Button>
                <Button
                  variant={pantryFilter === "joined" ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full text-xs px-4 ${
                    pantryFilter === "joined"
                      ? "bg-esbok-primary text-gray-800 hover:bg-esbok-primary/90"
                      : "border-esbok-border text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setPantryFilter("joined")}
                >
                  Joined
                </Button>
                <Button
                  variant={pantryFilter === "nearby" ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full text-xs px-4 ${
                    pantryFilter === "nearby"
                      ? "bg-esbok-primary text-gray-800 hover:bg-esbok-primary/90"
                      : "border-esbok-border text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setPantryFilter("nearby")}
                >
                  Nearby
                </Button>
              </div>
            </div>

            {/* Pantries List */}
            <div className="px-5 pb-6">
              <div className="space-y-3">
                {filteredPantries
                  .sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0))
                  .map((pantry) => (
                    <Card key={pantry.id} className="border border-esbok-border overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex">
                          {/* Pantry Image */}
                          <div className="w-20 h-20 bg-gray-100 flex-shrink-0 flex items-center justify-center relative">
                            <img
                              src={pantry.image || "/placeholder.svg"}
                              alt={pantry.name}
                              className="w-full h-full object-cover"
                            />
                            {pantry.isFavorite && (
                              <div className="absolute top-1 right-1">
                                <Heart className="w-3 h-3 fill-esbok-pink text-esbok-pink" />
                              </div>
                            )}
                          </div>

                          {/* Pantry Info */}
                          <div className="flex-1 p-3">
                            <div className="flex items-start justify-between mb-1">
                              <h3 className="font-semibold text-sm text-gray-800">{pantry.name}</h3>
                              {pantry.status === "admin" && (
                                <Badge variant="secondary" className="text-xs bg-esbok-mint text-gray-700">
                                  Admin
                                </Badge>
                              )}
                              {pantry.status === "joined" && (
                                <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                                  Joined
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                              <Apple className="w-3 h-3" />
                              <span>{pantry.itemCount} items</span>
                              {pantry.distance && (
                                <>
                                  <span>•</span>
                                  <MapPin className="w-3 h-3" />
                                  <span>{pantry.distance}</span>
                                </>
                              )}
                            </div>
                            {pantry.lastContributed && (
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Clock className="w-3 h-3" />
                                <span>Last contributed {pantry.lastContributed}</span>
                              </div>
                            )}
                          </div>

                          {/* Action */}
                          <div className="flex items-center pr-3">
                            {pantry.status === "nearby" ? (
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs h-7 px-3 border-esbok-primary text-esbok-primary hover:bg-esbok-primary hover:text-gray-800"
                              >
                                Join
                              </Button>
                            ) : (
                              <div className="text-gray-400">
                                <svg
                                  width="6"
                                  height="10"
                                  viewBox="0 0 6 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1 9L5 5L1 1"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {filteredPantries.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">No {pantryFilter} pantries found</p>
                </div>
              )}
            </div>

            {/* Recently Viewed - only show when not filtering */}
            {pantryFilter === "admin" && (
              <div className="px-5 pb-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Recently Viewed</h2>
                <div className="space-y-3">
                  {recentlyViewedPantries.map((pantry) => (
                    <Card key={pantry.id} className="border border-esbok-border overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex">
                          {/* Pantry Image */}
                          <div className="w-16 h-16 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                            <img
                              src={pantry.image || "/placeholder.svg"}
                              alt={pantry.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Pantry Info */}
                          <div className="flex-1 p-3">
                            <h3 className="font-semibold text-sm text-gray-800 mb-1">{pantry.name}</h3>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{pantry.distance}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Apple className="w-3 h-3" />
                                <span>{pantry.itemCount} items</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">Viewed {pantry.lastViewed}</p>
                          </div>

                          {/* Join Button */}
                          <div className="flex items-center pr-3">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs h-7 px-3 border-esbok-primary text-esbok-primary hover:bg-esbok-primary hover:text-gray-800"
                            >
                              Join
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      case "activity":
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="px-5 pt-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Community Activity</h1>
              <p className="text-sm text-gray-600">See what's happening in your community</p>
            </div>

            {/* Activity Stats */}
            <div className="px-5">
              <div className="grid grid-cols-3 gap-3">
                <Card className="border border-esbok-border">
                  <CardContent className="p-3 text-center">
                    <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-esbok-mint flex items-center justify-center">
                      <Activity className="w-3 h-3 text-gray-700" />
                    </div>
                    <p className="text-xs text-gray-600">Today's Activity</p>
                    <p className="text-lg font-bold text-gray-800">12</p>
                  </CardContent>
                </Card>
                <Card className="border border-esbok-border">
                  <CardContent className="p-3 text-center">
                    <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-esbok-peach flex items-center justify-center">
                      <Heart className="w-3 h-3 text-gray-700" />
                    </div>
                    <p className="text-xs text-gray-600">Thanks Received</p>
                    <p className="text-lg font-bold text-gray-800">8</p>
                  </CardContent>
                </Card>
                <Card className="border border-esbok-border">
                  <CardContent className="p-3 text-center">
                    <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-esbok-primary flex items-center justify-center">
                      <Apple className="w-3 h-3 text-gray-700" />
                    </div>
                    <p className="text-xs text-gray-600">Total Foods</p>
                    <p className="text-lg font-bold text-gray-800">24</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* My Food Section */}
            <div className="px-5">
              <h2 className="text-lg font-bold text-gray-800 mb-4">My Food</h2>
              <div className="space-y-3">
                {myFoodItems.map((food) => (
                  <Card key={food.id} className="border border-esbok-border relative">
                    <CardContent className="p-4">
                      {/* Expires Soon Tag */}
                      {food.expiresInDays <= 3 && (
                        <div className="absolute top-3 left-3">
                          <Badge className="text-xs bg-red-100 text-red-700 border-red-200">Expires Soon</Badge>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                          <Apple className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0 pt-2">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className="font-semibold text-sm text-gray-800 truncate">{food.name}</h3>
                            <Badge
                              variant="secondary"
                              className={`ml-2 text-xs ${
                                food.isShared ? "bg-esbok-mint text-gray-700" : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {food.isShared ? "Shared" : "Private"}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <MapPin className="w-3 h-3" />
                            <span className="truncate">{food.pantry}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>
                              {food.daysOld} {food.daysOld === 1 ? "day" : "days"} old
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div className="px-5 pb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {activityFeed.map((activity) => (
                  <Card key={activity.id} className="border border-esbok-border">
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        {/* Activity Icon */}
                        <div className="flex-shrink-0">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              activity.type === "contribution"
                                ? "bg-esbok-mint"
                                : activity.type === "consumption" || activity.type === "thanks"
                                  ? "bg-esbok-pink"
                                  : activity.type === "new_pantry"
                                    ? "bg-esbok-primary"
                                    : activity.type === "milestone"
                                      ? "bg-esbok-peach"
                                      : "bg-gray-200"
                            }`}
                          >
                            {activity.icon === "plus" && <Plus className="w-4 h-4 text-gray-700" />}
                            {activity.icon === "heart" && <Heart className="w-4 h-4 text-gray-700" />}
                            {activity.icon === "star" && (
                              <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            )}
                            {activity.icon === "clock" && <Clock className="w-4 h-4 text-gray-700" />}
                          </div>
                        </div>

                        {/* Activity Content */}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-gray-800">
                            <span className="font-semibold">{activity.user}</span> <span>{activity.action}</span>
                            {activity.pantry && (
                              <span className="font-semibold text-esbok-primary"> {activity.pantry}</span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{activity.timeAgo}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-20">{renderContent()}</div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-esbok-border">
        <div className="flex items-center justify-around py-2 px-4">
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "home" ? "text-esbok-primary" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("home")}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-normal">Home</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "nearby" ? "text-esbok-primary" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("nearby")}
          >
            <MapPin className="w-5 h-5" />
            <span className="text-xs font-normal">Nearby</span>
          </Button>

          {/* Center Log Food Button */}
          <Button
            className="w-12 h-12 rounded-full bg-esbok-primary hover:bg-esbok-primary/90 text-gray-800 shadow-lg"
            size="sm"
            onClick={() => setShowLogFood(true)}
          >
            <Plus className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "pantries" ? "text-esbok-primary" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("pantries")}
          >
            <Apple className="w-5 h-5" />
            <span className="text-xs font-normal">Pantries</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "activity" ? "text-esbok-primary" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("activity")}
          >
            <Activity className="w-5 h-5" />
            <span className="text-xs font-normal">Activity</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
