export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");

    if (!city) {
      return Response.json(
        {
          success: false,
          message: "please enter a city name!",
        },
        {
          status: 400,
        },
      );
    }

    const trimmedCity = city.trim();
    const API_KEY = process.env.WEATHER_API_KEY;

    const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${trimmedCity}`;

    const response = await fetch(weatherApiUrl);

    if (!response.ok) {
      return Response.json(
        {
          success: false,
          message: "City not found!",
        },
        {
          status: 404,
        },
      );
    }

    const weatherData = await response.json();

    return Response.json(
      {
        success: true,
        data: weatherData,
        message: "data fetched successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Server error:", error);

    if (error?.cause?.code === "UND_ERR_CONNECT_TIMEOUT") {
      return Response.json(
        {
          success: false,
          message:
            "Weather service is taking too long to respond. Please try again.",
        },
        {
          status: 504,
        },
      );
    }

    return Response.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
