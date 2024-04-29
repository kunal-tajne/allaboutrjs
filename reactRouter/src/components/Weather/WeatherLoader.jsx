
export const weatherLoader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('location') || 'New York';
  const apiKey = '6dc51b050723462ea11144605242904';
  const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`;

  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    if (!jsonData || !jsonData.location) {
      throw new Error('Invalid weather data response');
    }
    return jsonData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};