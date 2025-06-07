import { pantryItems } from "@/lib/data";
import { Apple, Users, Heart, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/page-layout";
import CardSectionsLayout from "@/components/card-sections-layout";

export default function HomePage() {
  return (
    <PageLayout contentClassName="space-y-5">
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
        <CardSectionsLayout title="Recent Activity">
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
        </CardSectionsLayout>
    </PageLayout>
  );
}
