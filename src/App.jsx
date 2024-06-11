import WeatherForecast from './WeatherForecast'
import './App.css'

function App() {
  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ]
  
  return (
  <>
  <h1>Local Weather</h1>
  <section>
    <WeatherForecast
      day={weatherForecasts[0].day}
      img={weatherForecasts[0].img}
      imgAlt={weatherForecasts[0].imgAlt}
      conditions={weatherForecasts[0].conditions}
      time={weatherForecasts[0].time}
    />
    <WeatherForecast
      day={weatherForecasts[1].day}
      img={weatherForecasts[1].img}
      imgAlt={weatherForecasts[1].imgAlt}
      conditions={weatherForecasts[1].conditions}
      time={weatherForecasts[1].time}
    />
    <WeatherForecast
      day={weatherForecasts[2].day}
      img={weatherForecasts[2].img}
      imgAlt={weatherForecasts[2].imgAlt}
      conditions={weatherForecasts[2].conditions}
      time={weatherForecasts[2].time}
    />
    <WeatherForecast
      day={weatherForecasts[3].day}
      img={weatherForecasts[3].img}
      imgAlt={weatherForecasts[3].imgAlt}
      conditions={weatherForecasts[3].conditions}
      time={weatherForecasts[3].time}
    />
    <WeatherForecast
      day={weatherForecasts[4].day}
      img={weatherForecasts[4].img}
      imgAlt={weatherForecasts[4].imgAlt}
      conditions={weatherForecasts[4].conditions}
      time={weatherForecasts[4].time}
    />
  </section>
  </>
  )
}

export default App
