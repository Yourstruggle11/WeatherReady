import Home from "./page/home";
import geoCoords from "./utils/getUserGeoCoords";
import getWeather, {
  getCityCoords,
  getCityName,
} from "./services/WeatherService";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"


function App() {
  const dispatch = useDispatch();
  const {city,geoCoords:geoCoordsState} = useSelector(state => state.weather);



  useEffect(() => {
    (async () => {
      const data = await getWeather(geoCoordsState.lon, geoCoordsState.lat);
      dispatch({ type: "WEATHER", payload: data });
      const formatter = Intl.DateTimeFormat([], {
        hour12: false,
        hour: "numeric",
        timeZone: data.timezone,
      });
      const localTime = parseInt(
        formatter
          .format(new Date(data.current.dt * 1000))
          .replace(/[A-Za-z]/gi, "")
      );
      const sunset = parseInt(
        formatter
          .format(new Date(data.current.sunset * 1000))
          .replace(/[A-Za-z]/gi, "")
      );
      const sunrise = parseInt(
        formatter
          .format(new Date(data.current.sunrise * 1000))
          .replace(/[A-Za-z]/gi, "")
      );
      if (localTime > sunset || localTime < sunrise) {
        dispatch({ type: "DARK", payload: true });
        localStorage.theme = 'dark'
      } else {
        dispatch({ type: "DARK", payload: false });
        localStorage.theme = 'light'
      }
    })();
  }, [geoCoordsState.lat, geoCoordsState.lon,dispatch]);



  useEffect(() => {
    (async () => {
      const { longitude: lon, latitude: lat } = await geoCoords();
      if (lon && lat) {
        const { name, country } = await getCityName(lon, lat);
        dispatch({ type: "GEO_COORDS", payload: { lon, lat } });
        dispatch({ type: "CITY", payload: name });
        dispatch({ type: "COUNTRY", payload: country });
      }
    })();
  }, [dispatch]);


  useEffect(() => {
    (async () => {
      const { lon, lat, country } = await getCityCoords(city);
      dispatch({ type: "GEO_COORDS", payload: { lon, lat } });
      dispatch({ type: "COUNTRY", payload: country });
    })();
  }, [city,dispatch]);


  return(
      <Home />
  ); 
}

export default App;
