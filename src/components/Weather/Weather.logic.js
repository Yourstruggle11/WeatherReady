import { useReducer } from "react";
import { appReducer } from "../../provider/appContext";
import { getCityName } from "../../services/WeatherService";
import geoCoords from '../../utils/getUserGeoCoords';


export const WeatherLogic = () => {

  const [dispatchApp] = useReducer(appReducer);



    const GetCurrentLocationWeather = async () => {
        console.log('====================================');
        console.log("working");
        console.log('====================================');
        const { longitude: lon, latitude: lat } = await geoCoords();
        if (lon && lat) {
            const { name, country } = await getCityName(lon, lat);
            dispatchApp({ type: "GEO_COORDS", payload: { lon, lat } });
            dispatchApp({ type: "CITY", payload: name });
            dispatchApp({ type: "COUNTRY", payload: country });
        }
    }


    return {
        GetCurrentLocationWeather
    }
}