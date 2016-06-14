var one= document.querySelector(".one");
var two= document.querySelector(".two");
var three= document.querySelector(".three");
var four= document.querySelector(".four");
var five= document.querySelector(".five");
var six= document.querySelector(".six");
var seven= document.querySelector(".seven");
var eight= document.querySelector(".eight");
var nine= document.querySelector(".nine");
var add= document.querySelector(".add");
var subtract= document.querySelector(".subtract");
var multiply= document.querySelector(".multiply");
var divide= document.querySelector(".divide");
var equal= document.querySelector(".equal");
var period= document.querySelector(".period");
var clear= document.querySelector(".clear");
var zero= document.querySelector(".zero");

var calculator = document.querySelector(".calculator");
calculator.addEventListener('click', function (e) {
  console.log(e.target.textContent);
  var display = document.querySelector("#display")
  display.innerHTML = e.target.textContent
});