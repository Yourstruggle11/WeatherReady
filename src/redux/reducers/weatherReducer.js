export const weatherReducer =  (state={
    weather: null,
    unit: "C",
    city: "Kolkata",
    country: "IN",
    isDark: false,
    geoCoords: {
      lon: 88.3639,
      lat: 22.5726,
}
}, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "WEATHER":
        return { ...state, weather: payload };
      case "CITY":
        return { ...state, city: payload };
      case "COUNTRY":
        return { ...state, country: payload };
      case "UNIT":
        return { ...state, unit: payload };
      case "GEO_COORDS":
        return { ...state, geoCoords: payload };
      case "DARK":
        return { ...state, isDark: payload };
      default:
        return state;
    }
  }