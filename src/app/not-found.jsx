import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4">
      <h1 className="text-8xl font-bold text-blue-500">404</h1>

      <h2 className="mt-4 text-3xl font-semibold text-white">Page Not Found</h2>

      <p className="mt-2 text-slate-400 text-center">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-500 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
