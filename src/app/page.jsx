import SearchWeather from "@/components/SearchWeather";

export default function Home() {
  return (
    // Saara content center karne ke liye classes seedha main tag me
    <main className="flex min-h-screen flex-col items-center pt-20">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">Weather App</h1>
      <p className="text-gray-600 text-lg mb-8">Ready to start building!</p>
      <div className="flex gap-2 mb-5">
        <SearchWeather />
      </div>
    </main>
  );
}
