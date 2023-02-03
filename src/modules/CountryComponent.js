import React from "react";
import Button from "@mui/material/Button";
const CountryComponent = (props) => {
  const { country, updateCity, updataCapital } = props;
  const le = 0;
  const data = country[le];
  const update = (e) => {
    console.log(data.capital);
    updateCity(data.capital);

    updataCapital(true);
  };
  return (
    <>
      <img src={data.flags.png} alt="img"></img>
      <h3>Capital: {data.capital}</h3>
      <h3>Country's Population: {data.population} </h3>
      <h3>Latitude: {data.latlng[0]}</h3>
      <h3>Lognitude: {data.latlng[1]}</h3>
      <Button variant="contained" type="submit" onClick={update}>
        Capital Weather
      </Button>
    </>
  );
};
export default CountryComponent;
