import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="mb-3 text-5xl font-bold text-white">Weather App</h1>

      <p className="mb-10 text-slate-400 text-lg">
        Explore Weather with CSR & SSR in Next.js
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/weather-csr"
          className="
            rounded-2xl
            bg-blue-600
            px-6
            py-3
            font-medium
            text-white
            shadow-lg
            shadow-blue-500/20
            transition-all
            duration-300
            hover:bg-blue-500
            hover:scale-105
            active:scale-95
          "
        >
          CSR Weather App
        </Link>

        <Link
          href="/weather-ssr"
          className="
            rounded-2xl
            border
            border-slate-700
            bg-slate-900
            px-6
            py-3
            font-medium
            text-slate-200
            transition-all
            duration-300
            hover:border-blue-500
            hover:text-blue-400
            hover:scale-105
            active:scale-95
          "
        >
          SSR Weather App
        </Link>
      </div>
    </main>
  );
}
