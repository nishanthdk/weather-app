import styled from "styled-components";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px auto;
  & Button {
    left: 10px;
    width: 35%;
  }
`;

const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  const [value, setvalue] = useState("");
  const update = (e) => {
    updateCity(e.target.value);
    setvalue(e.target.value);
  };

  return (
    <>
      <WeatherLogo src="/react-weather-app/icon/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your country</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <TextField
          onChange={update}
          id="outlined-text-input"
          label="Enter country"
          value={value}
        />
        <Button variant="contained" disabled={!value} type="submit">
          Submit
        </Button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
