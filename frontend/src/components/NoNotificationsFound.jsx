import { BellIcon } from "lucide-react";

function NoNotificationsFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 text-center">
      {/* Icon */}
      <div className="relative">
        <div className="size-20 rounded-full bg-base-200 flex items-center justify-center shadow-md">
          <BellIcon className="size-10 text-primary opacity-80" />
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 size-20 rounded-full bg-primary/20 blur-2xl animate-pulse"></div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mt-6 text-base-content">
        You’re all caught up 🎉
      </h3>

      {/* Description */}
      <p className="text-base-content opacity-70 mt-2 max-w-md">
        No new notifications right now. Stay connected — any friend requests or
        messages will appear here.
      </p>

      {/* Action button */}
      <button className="mt-6 px-6 py-2 rounded-xl bg-primary text-primary-content font-medium hover:scale-105 transition-transform">
        Explore Friends
      </button>
    </div>
  );
}

export default NoNotificationsFound;
