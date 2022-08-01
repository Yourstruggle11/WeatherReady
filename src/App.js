import Home from "./page/home";
import AppContext, { appReducer, initialAppState } from "./provider/appContext";
import geoCoords from "./utils/getUserGeoCoords";
import getWeather, {
  getCityCoords,
  getCityName,
} from "./services/WeatherService";
import { useEffect, useReducer } from "react";


function App() {
  const [app, dispatchApp] = useReducer(appReducer, initialAppState);



  useEffect(() => {
    (async () => {
      const data = await getWeather(app.geoCoords.lon, app.geoCoords.lat);
      dispatchApp({ type: "WEATHER", payload: data });
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
        dispatchApp({ type: "DARK", payload: true });
      } else {
        dispatchApp({ type: "DARK", payload: false });
      }
    })();
  }, [app.geoCoords.lat, app.geoCoords.lon]);



  useEffect(() => {
    (async () => {
      const { longitude: lon, latitude: lat } = await geoCoords();
      if (lon && lat) {
        const { name, country } = await getCityName(lon, lat);
        dispatchApp({ type: "GEO_COORDS", payload: { lon, lat } });
        dispatchApp({ type: "CITY", payload: name });
        dispatchApp({ type: "COUNTRY", payload: country });
      }
    })();
  }, []);


  useEffect(() => {
    (async () => {
      const { lon, lat, country } = await getCityCoords(app.city);
      dispatchApp({ type: "GEO_COORDS", payload: { lon, lat } });
      dispatchApp({ type: "COUNTRY", payload: country });
    })();
  }, [app.city]);


  return(
    <AppContext.Provider value={{ app, dispatchApp }}>
      <Home />;
    </AppContext.Provider>
  ); 
}

export default App;
