'use strict';

const card = document.querySelector(".card");

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/deutschland");
request.send();

request.addEventListener("load", ()=> {
  const [data] = JSON.parse(request.responseText)

  console.log(data)

  const country_card = `<img src="${data?.flags?.png}" alt="Country Flag" />
  <div class="country-name">${data?.name?.common}</div>
  <div class="details">
    <div>Currency: ${data?.currencies?.EUR.name} ${data?.currencies?.EUR.symbol}</div>
    <div>Language: ${data?.languages?.deu}</div>
  <div>Population: <br>${(data?.population / 1000000).toFixed(1)} million</div>
  </div>`

  card.insertAdjacentHTML('beforeend', country_card);
})