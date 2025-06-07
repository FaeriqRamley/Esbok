// Shared sample data
export const pantryItems = [
  { id: 1, name: "Fresh Apples", contributor: "Sarah M.", timeAgo: "2 hours ago", location: "Community Center Pantry", category: "Fruits", image: "/placeholder.svg?height=120&width=120", likes: 5, isPrivate: false },
  { id: 2, name: "Homemade Cookies", contributor: "Mike R.", timeAgo: "4 hours ago", location: "Park Street Pantry", category: "Snacks", image: "/placeholder.svg?height=120&width=120", likes: 12, isPrivate: false },
  { id: 3, name: "Canned Soup", contributor: "Emma L.", timeAgo: "1 day ago", location: "Library Pantry", category: "Canned Goods", image: "/placeholder.svg?height=120&width=120", likes: 3, isPrivate: false },
];

export const nearbyPantries = [
  { id: 1, name: "Community Center Pantry", distance: "0.3 km", itemCount: 24, image: "/placeholder.svg?height=80&width=80" },
  { id: 2, name: "Park Street Little Pantry", distance: "0.7 km", itemCount: 16, image: "/placeholder.svg?height=80&width=80" },
  { id: 3, name: "Library Food Share", distance: "1.2 km", itemCount: 31, image: "/placeholder.svg?height=80&width=80" },
  { id: 4, name: "Green Gardens Pantry", distance: "1.5 km", itemCount: 8, image: "/placeholder.svg?height=80&width=80" },
  { id: 5, name: "Downtown Community Fridge", distance: "1.8 km", itemCount: 19, image: "/placeholder.svg?height=80&width=80" },
];

export const allPantries = [
  { id: 1, name: "Community Center Pantry", image: "/placeholder.svg?height=80&width=80", itemCount: 24, isFavorite: true, lastContributed: "2 days ago", status: "admin" },
  { id: 2, name: "Green Gardens Pantry", image: "/placeholder.svg?height=80&width=80", itemCount: 8, isFavorite: true, lastContributed: "1 week ago", status: "admin" },
  { id: 3, name: "Park Street Little Pantry", image: "/placeholder.svg?height=80&width=80", itemCount: 16, isFavorite: false, lastContributed: "3 days ago", status: "joined" },
  { id: 4, name: "Downtown Community Fridge", image: "/placeholder.svg?height=80&width=80", itemCount: 19, isFavorite: false, distance: "1.8 km", status: "nearby" },
  { id: 5, name: "Library Food Share", image: "/placeholder.svg?height=80&width=80", itemCount: 31, isFavorite: false, distance: "1.2 km", status: "nearby" },
];

export const recentlyViewedPantries = [
  { id: 4, name: "Downtown Community Fridge", image: "/placeholder.svg?height=80&width=80", itemCount: 19, distance: "1.8 km", lastViewed: "1 hour ago" },
  { id: 5, name: "Library Food Share", image: "/placeholder.svg?height=80&width=80", itemCount: 31, distance: "1.2 km", lastViewed: "Yesterday" },
];

export const activityFeed = [
  { id: 1, type: "contribution", user: "Sarah M.", action: "added Fresh Apples to", pantry: "Community Center Pantry", timeAgo: "2 hours ago", icon: "plus" },
  { id: 2, type: "consumption", user: "Mike R.", action: "took Homemade Cookies from", pantry: "Park Street Pantry", timeAgo: "4 hours ago", icon: "heart" },
  { id: 3, type: "thanks", user: "Emma L.", action: "thanked you for your contribution to", pantry: "Library Pantry", timeAgo: "6 hours ago", icon: "heart" },
  { id: 4, type: "new_pantry", user: "Community Garden Co-op", action: "created a new pantry:", pantry: "Organic Veggie Share", timeAgo: "1 day ago", icon: "plus" },
  { id: 5, type: "milestone", user: "Community", action: "reached 500 items shared this month!", pantry: "", timeAgo: "2 days ago", icon: "star" },
  { id: 6, type: "expiring", user: "System", action: "Bread items expiring soon at", pantry: "Downtown Community Fridge", timeAgo: "3 hours ago", icon: "clock" },
];

export const myFoodItems = [
  { id: 1, name: "Fresh Apples", pantry: "Community Center Pantry", isShared: true, daysOld: 2, expiresInDays: 5 },
  { id: 2, name: "Homemade Cookies", pantry: "Park Street Pantry", isShared: true, daysOld: 1, expiresInDays: 2 },
  { id: 3, name: "Canned Soup", pantry: "Library Pantry", isShared: false, daysOld: 5, expiresInDays: 30 },
  { id: 4, name: "Bread Loaves", pantry: "Green Gardens Pantry", isShared: true, daysOld: 3, expiresInDays: 1 },
];

export const availablePantries = [
  { id: 1, name: "Community Center Pantry" },
  { id: 2, name: "Green Gardens Pantry" },
  { id: 3, name: "Park Street Little Pantry" },
  { id: 4, name: "Library Food Share" },
];

export const availableTags = [
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
];
