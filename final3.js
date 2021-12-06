var todayfullDate = new Date();
var todayDate = todayfullDate.getDate();
var todayMonth = todayfullDate.getMonth() + 1;
var todayFullYear = todayfullDate.getFullYear();

document.getElementById("theDate").innerHTML = todayDate + "/" + todayMonth + "/" + todayFullYear;

var myPrompt = prompt("Who is your favourite Artist?")
console.log(myPrompt)
