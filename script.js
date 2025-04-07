// Replace this with your OpenWeatherMap API key
const apiKey = '// Replace this with your OpenWeatherMap API key
const apiKey = '3d15276f11ca858d530185cba87387c4';  // Replace with your API key from OpenWeatherMap

function getWeather() {
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById('city-name').textContent = `Weather in ${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        
        document.getElementById('weather-info').style.display = 'block';  // Show weather info
      } else {
        alert('City not found!');
      }
    })
    .catch(error => {
      alert('Error fetching weather data.');
      console.error(error);
    });
}';  // Replace with your API key from OpenWeatherMap

function getWeather() {
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById('city-name').textContent = `Weather in ${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        
        document.getElementById('weather-info').style.display = 'block';  // Show weather info
      } else {
        alert('City not found!');
      }
    })
    .catch(error => {
      alert('Error fetching weather data.');
      console.error(error);
    });
}
