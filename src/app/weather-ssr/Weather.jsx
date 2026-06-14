import { trackMissingSampleError } from "next/dist/server/app-render/instant-validation/instant-samples";
import React from "react";

export default async function Weather({ searchParams }) {
  const params = await searchParams;
  const city = params.city || "indore";
  console.log(city);

  let weatherData = null;
  let error = null;
  let trimmedCity = null;
  if (city) {
    trimmedCity = city.trim();
  }
  const API_KEY = process.env.WEATHER_API_KEY;
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${trimmedCity}`,
    );
    if (!response.ok) {
      error = "Somthing went wrong...";
    }
    const data = await response.json();
    weatherData = data;
  } catch (err) {
    console.log(err);
  }
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <form
          action="/weather-ssr"
          method="GET"
          className="flex flex-col sm:flex-row gap-3 items-center"
        >
          <input
            type="text"
            name="city"
            placeholder="Search city..."
            className="
            w-72
            rounded-2xl
            border
            border-slate-700
            bg-slate-900
            px-4
            py-3
            text-slate-100
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/30
          "
          />

          <button
            type="submit"
            className="
            rounded-2xl
            bg-blue-600
            px-6
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-blue-500
            hover:scale-[1.02]
            active:scale-95
            shadow-lg
            shadow-blue-500/20
            cursor-pointer
          "
          >
            Get Weather
          </button>
        </form>

        {error && (
          <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-400">
            {error}
          </p>
        )}

        {weatherData && (
          <div
            className="
            mt-4
            w-full
            max-w-md
            rounded-3xl
            bg-slate-900/80
            backdrop-blur-md
            border
            border-slate-800
            hover:border-blue-500/40
            transition-all
            duration-300
            shadow-2xl
            shadow-black/30
            p-6
          "
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-100">
                  {weatherData.location.name}
                </h2>

                <p className="text-slate-400">
                  {weatherData.location.region}, {weatherData.location.country}
                </p>
              </div>

              <img
                src={weatherData.current.condition.icon}
                alt={weatherData.current.condition.text}
                className="w-16 h-16"
              />
            </div>

            <div className="mt-6 text-center">
              <h1 className="text-6xl font-bold text-white">
                {weatherData.current.temp_c}°
              </h1>

              <p className="mt-2 text-lg text-slate-300">
                {weatherData.current.condition.text}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Feels like {weatherData.current.feelslike_c}°
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl bg-slate-800/70 border border-slate-700 p-4">
                <p className="text-sm text-slate-400">Humidity</p>
                <p className="text-xl font-semibold text-white">
                  {weatherData.current.humidity}%
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800/70 border border-slate-700 p-4">
                <p className="text-sm text-slate-400">Wind</p>
                <p className="text-xl font-semibold text-white">
                  {weatherData.current.wind_kph} km/h
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800/70 border border-slate-700 p-4">
                <p className="text-sm text-slate-400">Visibility</p>
                <p className="text-xl font-semibold text-white">
                  {weatherData.current.vis_km} km
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800/70 border border-slate-700 p-4">
                <p className="text-sm text-slate-400">UV Index</p>
                <p className="text-xl font-semibold text-white">
                  {weatherData.current.uv}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-800 pt-4 text-center">
              <p className="text-sm text-slate-500">
                Local Time: {weatherData.location.localtime}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
