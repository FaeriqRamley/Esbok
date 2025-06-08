import { pantryItems } from "@/lib/data";
import { Apple, Users, Heart, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/page-layout";
import CardSectionsLayout from "@/components/card-sections-layout";
import StatCard from "@/components/composite/stat-card";
import MediaCard from "@/components/composite/media-card";
// import { Suspense } from "react";
// import { TestList } from "./TestList";
import { createClient } from "@/utils/supabase/server";

export const revalidate = false;

export default async function HomePage() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  console.log("User:", user);
  return (
    <PageLayout contentClassName="space-y-5">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to Esbok {user?.user?.email || "Guest"}!
        </h1>
        <p className="text-sm text-gray-600 px-4">
          Share food, build community, reduce waste
        </p>
        {/* <Suspense fallback={<span className="text-gray-500">Loading...</span>}>
          <TestList />
        </Suspense> */}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 px-5">
        <StatCard
          icon={<Apple className="text-gray-700" />}
          label="Items Shared"
          value="24"
          iconBgClass="bg-esbok-mint"
        />
        <StatCard
          icon={<Users className="text-gray-700" />}
          label="Community"
          value="156"
          iconBgClass="bg-esbok-peach"
        />
        <StatCard
          icon={<Heart className="text-gray-700" />}
          label="Likes Given"
          value="89"
          iconBgClass="bg-esbok-pink"
        />
      </div>

      {/* Recent Activity */}
      <CardSectionsLayout title="Recent Activity">
        <div className="space-y-4">
          {pantryItems.map((item) => (
            <MediaCard
              key={item.id}
              left={
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Apple className="w-8 h-8 text-gray-400" />
                </div>
              }
            >
              <div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-sm text-gray-800 truncate">
                    {item.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="ml-2 text-xs bg-esbok-mint text-gray-700"
                  >
                    {item.category}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  by {item.contributor}
                </p>
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
            </MediaCard>
          ))}
        </div>
      </CardSectionsLayout>
    </PageLayout>
  );
}
