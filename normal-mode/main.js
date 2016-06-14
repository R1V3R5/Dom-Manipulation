var calculate = document.querySelector("#calculate-button");
calculate.addEventListener('click', function (event) {
  event.preventDefault();
  var input1 = document.querySelector("#value-one");
  var input2 = document.querySelector("#value-two");
  var answer = document.querySelector("#answer");
  answer.textContent = (Number(input1.value) + Number(input2.value));
});