import { getCityName } from "../../services/WeatherService";
import geoCoords from '../../utils/getUserGeoCoords';
import { useDispatch } from "react-redux";



export const WeatherLogic = () => {

    const dispatch = useDispatch();





    const GetCurrentLocationWeather = async () => {
        const { longitude: lon, latitude: lat } = await geoCoords();
        if (lon && lat) {
            const { name, country } = await getCityName(lon, lat);
            dispatch({ type: "GEO_COORDS", payload: { lon, lat } });
            dispatch({ type: "CITY", payload: name });
            dispatch({ type: "COUNTRY", payload: country });
        }
    }


    return {
        GetCurrentLocationWeather
    }
}