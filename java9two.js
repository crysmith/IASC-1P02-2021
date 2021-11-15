var age = prompt("What is your age?")
console.log(age)

var todayfullDate = new Date();
var todayYear = todayfullDate.getFullYear();
console.log(todayYear);

document.getElementById("currentYr").innerHTML = todayYear - age;
