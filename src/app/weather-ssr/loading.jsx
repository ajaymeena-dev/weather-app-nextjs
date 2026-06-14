export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Weather Icon */}
        <div className="relative">
          <div className="text-7xl animate-bounce">🌤️</div>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 w-16 rounded-full bg-slate-700 blur-md animate-pulse" />
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">
            Fetching Weather Data
          </h2>

          <p className="mt-2 text-slate-400">
            Checking temperature, wind and conditions...
          </p>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-500 animate-bounce" />
          <span
            className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          />
          <span
            className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </div>
    </div>
  );
}
