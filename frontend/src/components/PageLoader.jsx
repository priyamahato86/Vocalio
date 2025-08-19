
import React from "react";
import { Mic2Icon } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
      {/* Loader Card */}
      <div className="relative w-[280px] sm:w-[320px] p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-purple-200">
        {/* Logo / Title */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <Mic2Icon className="size-8 sm:size-9 text-purple-600" />
          <span className="text-2xl sm:text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Vocalio
          </span>
        </div>

        {/* Concentric Rings + Icon */}
        <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32 mb-5">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-purple-200" />
          {/* Middle ring (spin reverse) */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-400 border-r-purple-300 animate-spin motion-reduce:animate-none" />
          {/* Inner ring (spin) */}
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-b-pink-400 border-l-purple-300 animate-[spin_1.2s_linear_infinite] motion-reduce:animate-none" />

          {/* Glow pulse */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-500/20 blur-xl animate-pulse" />

          {/* Center icon puck */}
          <div className="absolute inset-8 rounded-full bg-white shadow-md flex items-center justify-center">
            <Mic2Icon className="size-6 sm:size-7 text-purple-600" aria-hidden="true" />
          </div>
        </div>

        {/* Loading text */}
        <p className="text-center text-sm sm:text-base font-medium text-purple-700">
          Loading your experience…
        </p>

        {/* Progress shimmer bar */}
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-purple-100">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 animate-[shimmer_1.4s_ease_infinite]" />
        </div>

        <span className="sr-only">Content is loading</span>
      </div>

      {/* Tailwind keyframes via inline style tag (no config needed) */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
        `}
      </style>
    </div>
  );
};

export default PageLoader;
