function show() {
  var a = new Date(2023, 0, 1, 0, 0, 0);
  var b = new Date();
  var day = Math.floor((a - b) / 86400000);
  var hour = 23 - b.getHours();
  var minutes = 60 - b.getMinutes();
  var second = 60 - b.getSeconds();
  document.getElementById("day").innerHTML = test_input(day);
  document.getElementById("hour").innerHTML = test_input(hour);
  document.getElementById("minute").innerHTML = test_input(minutes);
  document.getElementById("second").innerHTML = test_input(second);
}

function show2() {
  var a = new Date(2023, 0, 22, 0, 0, 0);
  var b = new Date();
  var day = Math.floor((a - b) / 86400000);
  var hour = 23 - b.getHours();
  var minutes = 60 - b.getMinutes();
  var second = 60 - b.getSeconds();
  document.getElementById("day2").innerHTML = test_input(day);
  document.getElementById("hour2").innerHTML = test_input(hour);
  document.getElementById("minute2").innerHTML = test_input(minutes);
  document.getElementById("second2").innerHTML = test_input(second);
}

function killCopy(e) {
  return false;
}

function reEnable() {
  return true;
}

document.onselectstart = new Function("return false");

if (window.sidebar) {
  document.onmousedown = killCopy;
  document.onclick = reEnable;
}
var message = "NoRightClicking";
function defeatIE() {
  if (document.all) {
    message;
    return false;
  }
}
function defeatNS(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) {
      message;
      return false;
    }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = defeatNS;
} else {
  document.onmouseup = defeatNS;
  document.oncontextmenu = defeatIE;
}
document.oncontextmenu = new Function("return false");

function test_input(a) {
  if (a < 10) return "0" + a;
  return a;
}
setInterval(show, 100);
setInterval(show2, 100);
