import BottomNav from "@/components/bottom-nav";
import { nearbyPantries } from "@/lib/data";
import { MapPin, Apple, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NearbyPage() {
  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto pb-20 flex flex-col h-full">
        {/* Map Section */}
        <div className="relative w-full h-64 bg-gray-100 border-b border-esbok-border">
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="#f3f4f6" />
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
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
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-white rounded-md shadow-md">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600">
              <Plus className="h-4 w-4" />
            </Button>
            <div className="h-px bg-gray-200"></div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600">
              <span className="text-lg font-medium">−</span>
            </Button>
          </div>
          <Button className="absolute bottom-4 right-4 bg-white text-gray-700 shadow-md hover:bg-gray-50 h-8 px-3 text-xs" size="sm">
            <MapPin className="h-3 w-3 mr-1" />
            Current Location
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="px-5 py-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Nearby Pantries</h2>
            <div className="space-y-3">
              {nearbyPantries.map((pantry) => (
                <Card key={pantry.id} className="border border-esbok-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="w-20 h-20 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                        <img src={pantry.image || "/placeholder.svg"} alt={pantry.name} className="w-full h-full object-cover" />
                      </div>
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
                      <div className="flex items-center pr-3">
                        <div className="text-gray-400">
                          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      <BottomNav />
    </div>
  );
}
