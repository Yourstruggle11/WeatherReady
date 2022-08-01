import useTemp from "../../customHooks/useTemperature";


function Temperature({ temperature }) {
  const temp = useTemp(temperature);
  return temp;
}

export default Temperature;
