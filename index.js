function updateAdelaideTime(){
//Adelaide
let adelaideElement = document.querySelector("#adelaide");
let adelaideDateElement =  adelaideElement.querySelector(".date");
let adelaideTimeElement = adelaideElement.querySelector(".time");
let adelaideTime = moment().tz("Australia/Adelaide");

adelaideDateElement.innerHTML= adelaideTime.format("MMMM Do YYYY");
adelaideTimeElement.innerHTML =  adelaideTime.format("h:mm:ss [<small>]A[</small>]" );
}
updateAdelaideTime();
setInterval(updateAdelaideTime, 1000);

function updatePerthTime(){
//Perth
let perthElement = document.querySelector("#perth");
let perthDateElement =  perthElement.querySelector(".date");
let perthTimeElement = perthElement.querySelector(".time");
let perthTime = moment().tz("Australia/Perth");

perthDateElement.innerHTML= perthTime.format("MMMM Do YYYY");
perthTimeElement.innerHTML =  perthTime.format("h:mm:ss [<small>]A[</small>]" );
}
updatePerthTime();
setInterval(updatePerthTime, 1000);
