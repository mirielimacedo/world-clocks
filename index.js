function updateTime(){
//Adelaide
let adelaideElement = document.querySelector("#adelaide");
if(adelaideElement){
let adelaideDateElement =  adelaideElement.querySelector(".date");
let adelaideTimeElement = adelaideElement.querySelector(".time");
let adelaideTime = moment().tz("Australia/Adelaide");

adelaideDateElement.innerHTML = adelaideTime.format("MMMM Do YYYY");
adelaideTimeElement.innerHTML = adelaideTime.format("h:mm:ss") + " <small>" + adelaideTime.format("A").toLowerCase() + "</small>";


//Texas
let texasElement = document.querySelector("#texas");
if(texasElement){
let texasDateElement =  texasElement.querySelector(".date");
let texasTimeElement = texasElement.querySelector(".time");
let texasTime = moment().tz("America/Texas");

texasDateElement.innerHTML = texasTime.format("MMMM Do YYYY");
texasTimeElement.innerHTML = texasTime.format("h:mm:ss") + " <small>" + texasTime.format("A").toLowerCase() + "</small>";


}
}
}



function updateCity(event){
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment.tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A").toLowerCase()}</small></div>

    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);