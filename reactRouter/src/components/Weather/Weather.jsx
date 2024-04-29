import  { useState, useEffect } from "react";
import { useLoaderData, Form, useNavigate } from "react-router-dom";

function Weather() {
  const data = useLoaderData();
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setLocation(data.location.name);
    }
  }, [data]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/weather?location=${encodeURIComponent(location)}`);
  };

  return (
    <div>
      <div className="flex item-center justify-center mt-10">
        {" "}
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter location"
            className="text-black ml-8 w-1/2 bg-white border-black border-2 rounded-lg p-2 mb-2 mt-2 mr-2 ml-2 outline-none shadow-lg ring-2 ring-black ring-opacity-50 placeholder-black placeholder-opacity-50 font-bold font-sans font-serif 
          
          dark:text-black dark:bg-white dark:border-black dark:border-2 dark:rounded-lg dark:p-2 dark:mb-2 dark:mt-2 dark:mr-2 dark:ml-2 dark:outline-none dark:shadow-lg dark:ring-2 dark:ring-black dark:ring-opacity-50 dark:placeholder-black dark:placeholder-opacity-50 dark:font-bold dark:font-sans dark:font-serif"
          />
          <button type="submit" className="ml-4 text-green-700 font-bold">
            Get Weather
          </button>
        </Form>
      </div>
      {data && (
        <div className="flex my-4 items-center justify-center">
          <div className="flex flex-col bg-white border-2 rounded-xl p-4 w-full max-w-xs dark:bg-black dark:text-white dark:border dark:border-white">
            <div className="font-bold text-xl">📍{data.location.name}</div>
            <div className="text-sm text-gray-500">🗓️ {data.location.localtime}</div>
            <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
              <img src={`https:${data.current.condition.icon}`} />
            </div>
            <div className="flex flex-row items-center justify-center mt-6">
              <div className="font-medium text-6xl">{data.current.temp_c}°C</div>
              <div className="flex flex-col items-center ml-6">
                <div>{data.current.condition.text}</div>
                <div className="text-sm text-gray-500">Feels like {data.current.feelslike_c}°C</div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Wind</div>
                <div className="text-sm text-gray-500">{data.current.wind_kph}k/h</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Humidity</div>
                <div className="text-sm text-gray-500">{data.current.humidity}%</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Visibility</div>
                <div className="text-sm text-gray-500">{data.current.vis_km}km</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
