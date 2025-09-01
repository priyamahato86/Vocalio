import { LoaderIcon } from "lucide-react";

function ChatLoader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-base-100 text-base-content transition-colors duration-300">
      {/* Glowing circular loader */}
      <div className="relative flex items-center justify-center">
        <div className="absolute size-20 rounded-full border-4 border-primary/30 animate-ping"></div>
        <LoaderIcon className="size-12 text-primary animate-spin drop-shadow-lg" />
      </div>

      {/* Text */}
      <p className="mt-6 text-xl font-semibold tracking-wide bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
        Connecting to Vocalio Chat...
      </p>
      <p className="mt-2 text-sm opacity-70">Please wait while we set things up 🎤</p>
    </div>
  );
}

export default ChatLoader;
