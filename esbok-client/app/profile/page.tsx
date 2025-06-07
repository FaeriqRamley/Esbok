import BottomNav from "@/components/bottom-nav";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="flex flex-col items-center text-center p-6 space-y-3">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
            <img
              src="/placeholder.svg?height=96&width=96"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold text-gray-800">John Doe</h1>
          <p className="text-sm text-gray-600">
            Food enthusiast and community volunteer.
          </p>
        </div>
        <div className="px-5 space-y-2">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between border border-esbok-border rounded-lg px-4 py-3 text-gray-800"
          >
            <span>Profile Settings</span>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path
                d="M1 9L5 5L1 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between border border-esbok-border rounded-lg px-4 py-3 text-gray-800"
          >
            <span>My Food History</span>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path
                d="M1 9L5 5L1 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between border border-esbok-border rounded-lg px-4 py-3 text-gray-800"
          >
            <span>Log Out</span>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path
                d="M1 9L5 5L1 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
