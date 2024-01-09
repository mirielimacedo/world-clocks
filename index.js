function updateTime(){
//Adelaide
let adelaideElement = document.querySelector("#adelaide");
if(adelaideElement){
let adelaideDateElement =  adelaideElement.querySelector(".date");
let adelaideTimeElement = adelaideElement.querySelector(".time");
let adelaideTime = moment().tz("Australia/Adelaide");

adelaideDateElement.innerHTML= adelaideTime.format("MMMM Do YYYY");
adelaideTimeElement.innerHTML =  adelaideTime.format("h:mm:ss [<small>]A[</small>]" );
}
}

//Perth
let perthElement = document.querySelector("#perth");
if(perthElement){
let perthDateElement =  perthElement.querySelector(".date");
let perthTimeElement = perthElement.querySelector(".time");
let perthTime = moment().tz("Australia/Perth");

perthDateElement.innerHTML= perthTime.format("MMMM Do YYYY");
perthTimeElement.innerHTML =  perthTime.format("h:mm:ss [<small>]A[</small>]" );

}

function updateCity(event){
     let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment().tz().guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
updateTime();
setInterval(updateTime, 10000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);