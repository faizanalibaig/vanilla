"use strict";

const request = new XMLHttpRequest();
request.open(
  "GET",
  `https://api.open-meteo.com/v1/forecast?latitude=33.6844&longitude=73.0479&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia/${}`
);
request.send();

request.addEventListener("load", () => {
  const data = JSON.parse(request.responseText);

return data;
});
