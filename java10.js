function output1(){
  console.log(document.getElementById("inputOne").value);
  var firstInput = document.getElementById("inputOne").value;
  console.log(document.getElementById("inputTwo").value);
  var secondInput = document.getElementById("inputTwo").value;
  document.getElementById("answer").innerHTML = Number(firstInput) + Number(secondInput);
}

function output2(){
  console.log(document.getElementById("inputOne").value);
  var firstInput = document.getElementById("inputOne").value;
  console.log(document.getElementById("inputTwo").value);
  var secondInput = document.getElementById("inputTwo").value;
  document.getElementById("answer").innerHTML = Number(firstInput) - Number(secondInput);
}

function output3(){
  console.log(document.getElementById("inputOne").value);
  var firstInput = document.getElementById("inputOne").value;
  console.log(document.getElementById("inputTwo").value);
  var secondInput = document.getElementById("inputTwo").value;
  document.getElementById("answer").innerHTML = Number(firstInput) * Number(secondInput);
}

function output4(){
  console.log(document.getElementById("inputOne").value);
  var firstInput = document.getElementById("inputOne").value;
  console.log(document.getElementById("inputTwo").value);
  var secondInput = document.getElementById("inputTwo").value;
  document.getElementById("answer").innerHTML = Number(firstInput) / Number(secondInput);
}
