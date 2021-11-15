var start = new Date();
var todayTime = start.getTime();
var seconds = 1000

console.log(todayTime);


function stopTime(){
var stop = new Date();
var secondTime = stop.getTime();
console.log(secondTime);
document.getElementById("time").innerHTML = Number(todayTime) + Number(secondTime) / Number(seconds) - start.getTime();
}
