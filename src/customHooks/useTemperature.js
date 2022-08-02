
import {useSelector} from "react-redux"

function useTemp(temp, toFixed = 0) {

  const {
    unit} = useSelector(state => state.weather);

  if (unit.toLowerCase() === "f") {
    return ((temp * 9) / 5 + 32).toFixed(toFixed);
  }

  return parseFloat(temp).toFixed(toFixed);
}

export default useTemp;
