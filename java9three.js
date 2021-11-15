function output(){
  console.log(document.getElementById("textInput").value);
  var firstInput = document.getElementById("textInput").value;
  console.log(document.getElementById("textInput2").value);
  var secondInput = document.getElementById("textInput2").value;
  document.getElementById("math").innerHTML = Number(firstInput) + Number(secondInput);
}
