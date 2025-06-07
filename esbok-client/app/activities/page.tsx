import { activityFeed, myFoodItems } from "@/lib/data";
import { Activity, Heart, Apple, MapPin, Clock, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/page-layout";
import CardSectionsLayout from "@/components/card-sections-layout";
import StatCard from "@/components/composite/stat-card";
import MediaCard from "@/components/composite/media-card";

export default function ActivitiesPage() {
  return (
    <PageLayout contentClassName="space-y-6">
        <div className="px-5 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Community Activity</h1>
          <p className="text-sm text-gray-600">See what&apos;s happening in your community</p>
        </div>
        <div className="px-5">
          <div className="grid grid-cols-3 gap-3">
            <StatCard
              icon={<Activity className="text-gray-700" />}
              label="Today's Activity"
              value="12"
              iconBgClass="bg-esbok-mint"
              size="sm"
            />
            <StatCard
              icon={<Heart className="text-gray-700" />}
              label="Thanks Received"
              value="8"
              iconBgClass="bg-esbok-peach"
              size="sm"
            />
            <StatCard
              icon={<Apple className="text-gray-700" />}
              label="Total Foods"
              value="24"
              iconBgClass="bg-esbok-primary"
              size="sm"
            />
          </div>
        </div>
        <CardSectionsLayout title="My Food">
          <div className="space-y-3">
            {myFoodItems.map((food) => (
              <MediaCard
                key={food.id}
                className="relative"
                left={
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Apple className="w-8 h-8 text-gray-400" />
                  </div>
                }
              >
                {food.expiresInDays <= 3 && (
                  <div className="absolute top-3 left-3">
                    <Badge className="text-xs bg-red-100 text-red-700 border-red-200">Expires Soon</Badge>
                  </div>
                )}
                <div className="pt-2">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-sm text-gray-800 truncate">{food.name}</h3>
                    <Badge variant="secondary" className={`ml-2 text-xs ${food.isShared ? 'bg-esbok-mint text-gray-700' : 'bg-gray-100 text-gray-600'}`}>{food.isShared ? 'Shared' : 'Private'}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{food.pantry}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{food.daysOld} {food.daysOld === 1 ? 'day' : 'days'} old</span>
                  </div>
                </div>
              </MediaCard>
            ))}
          </div>
        </CardSectionsLayout>
        <CardSectionsLayout title="Recent Activity" className="pb-6">
          <div className="space-y-4">
            {activityFeed.map((activity) => (
              <MediaCard
                key={activity.id}
                left={
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'contribution'
                        ? 'bg-esbok-mint'
                        : activity.type === 'consumption' || activity.type === 'thanks'
                        ? 'bg-esbok-pink'
                        : activity.type === 'new_pantry'
                        ? 'bg-esbok-primary'
                        : activity.type === 'milestone'
                        ? 'bg-esbok-peach'
                        : 'bg-gray-200'
                    }`}
                  >
                    {activity.icon === 'plus' && <Plus className="w-4 h-4 text-gray-700" />}
                    {activity.icon === 'heart' && <Heart className="w-4 h-4 text-gray-700" />}
                    {activity.icon === 'star' && (
                      <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                    {activity.icon === 'clock' && <Clock className="w-4 h-4 text-gray-700" />}
                  </div>
                }
              >
                <div>
                  <div className="text-sm text-gray-800">
                    <span className="font-semibold">{activity.user}</span> <span>{activity.action}</span>
                    {activity.pantry && (
                      <span className="font-semibold text-esbok-primary"> {activity.pantry}</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{activity.timeAgo}</p>
                </div>
              </MediaCard>
            ))}
          </div>
        </CardSectionsLayout>
    </PageLayout>
  );
}
