"use client";
import { useState } from "react";
import { allPantries, recentlyViewedPantries } from "@/lib/data";
import { Apple, Plus, MapPin, Heart, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/page-layout";
import CardSectionsLayout from "@/components/card-sections-layout";
import MediaCard from "@/components/composite/media-card";
import Image from "next/image";

export default function PantriesPage() {
  const [pantryFilter, setPantryFilter] = useState("admin");
  const filteredPantries = allPantries.filter((p) => p.status === pantryFilter);

  return (
    <PageLayout contentClassName="space-y-6">
      <div className="px-5 pt-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">My Pantries</h1>
        <p className="text-sm text-gray-600">
          Manage and contribute to your pantries
        </p>
      </div>
      <div className="px-5">
        <Button className="w-full bg-esbok-primary hover:bg-esbok-primary/90 text-gray-800 font-semibold">
          <Plus className="w-4 h-4 mr-2" />
          Create New Pantry
        </Button>
      </div>
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
      <CardSectionsLayout className="pb-6">
        <div className="space-y-3">
          {filteredPantries
            .sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0))
            .map((pantry) => (
              <MediaCard
                key={pantry.id}
                className="overflow-hidden"
                contentClassName="p-0"
                left={
                  <div className="w-20 h-20 bg-gray-100 flex items-center justify-center relative">
                    <Image
                      src={pantry.image || "/placeholder.svg"}
                      width={80}
                      height={80}
                      alt={pantry.name}
                      className="w-full h-full object-cover"
                    />
                    {pantry.isFavorite && (
                      <div className="absolute top-1 right-1">
                        <Heart className="w-3 h-3 fill-esbok-pink text-esbok-pink" />
                      </div>
                    )}
                  </div>
                }
                right={
                  pantry.status === "nearby" ? (
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
                  )
                }
              >
                <div className="p-3">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-sm text-gray-800">
                      {pantry.name}
                    </h3>
                    {pantry.status === "admin" && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-esbok-mint text-gray-700"
                      >
                        Admin
                      </Badge>
                    )}
                    {pantry.status === "joined" && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-purple-100 text-purple-700"
                      >
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
              </MediaCard>
            ))}
        </div>

        {filteredPantries.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm">
              No {pantryFilter} pantries found
            </p>
          </div>
        )}
      </CardSectionsLayout>
      {pantryFilter === "admin" && (
        <CardSectionsLayout title="Recently Viewed" className="pb-6">
          <div className="space-y-3">
            {recentlyViewedPantries.map((pantry) => (
              <MediaCard
                key={pantry.id}
                className="overflow-hidden"
                contentClassName="p-0"
                left={
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center">
                    <Image
                      src={pantry.image || "/placeholder.svg"}
                      width={80}
                      height={80}
                      alt={pantry.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                }
                right={
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs h-7 px-3 border-esbok-primary text-esbok-primary hover:bg-esbok-primary hover:text-gray-800"
                  >
                    Join
                  </Button>
                }
              >
                <div className="p-3">
                  <h3 className="font-semibold text-sm text-gray-800 mb-1">
                    {pantry.name}
                  </h3>
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
                  <p className="text-xs text-gray-400 mt-1">
                    Viewed {pantry.lastViewed}
                  </p>
                </div>
              </MediaCard>
            ))}
          </div>
        </CardSectionsLayout>
      )}
    </PageLayout>
  );
}
