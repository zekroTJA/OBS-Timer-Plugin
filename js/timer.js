var timer = document.getElementById("timer");
var t = {
	sec : 0,
	min : 0,
	hr 	: 0,
}

setInterval(setTime, 1000);

function setTime() {
	t.sec++;
	
	if (t.sec == 60) {
		t.sec = 0;
		t.min++;
	}
	
	if (t.min == 60) {
		t.min = 0;
		t.hr++;
	}
	
	timer.innerHTML = pad(t.hr) + ":" + pad(t.min) + ":" + pad(t.sec);
}

function pad(i) {
	if (i <= 9)
		return "0" + i;
	else
		return i;
}