function main() {
	cur = time();
	manageAlarms(cur);
}

// Checking the current time
function time(){
	var d = new Date(),
		h = d.getHours(),
		m = d.getMinutes(),
		hours = ('0' + h).slice(-2).toString().split(''),
		minutes = ('0' + m).slice(-2).toString().split('');

	document.getElementById('hour-1').innerHTML = hours[0];
	document.getElementById('hour-2').innerHTML = hours[1];

	document.getElementById('minute-1').innerHTML = minutes[0];
	document.getElementById('minute-2').innerHTML = minutes[1]; 

	return (h+':'+m);
}

// Saving time for alarm into localStorage
function handleHourChange(){
	var alarmTime=document.getElementById("alarm-hour").value +':'
	+ document.getElementById("alarm-minute").value;
	console.log(alarmTime);
	if (window.localStorage){
		localStorage.setItem("alarm", alarmTime);
	}
	else{
		alert("Alarming is not supported in this browser")
	}
}

function alertOn(){
	document.getElementById('alarm-circle').style.display = "block";
}

function alertOff(){
	document.getElementById('alarm-circle').style.display = "none";
}

// Comparing the current time and defined alarm for making the alarm active
function manageAlarms(currentTime){
	var alarm = localStorage.getItem("alarm");
	if (cur === alarm) {
		alertOn()
	}
	else{
		alertOff();
	}
}

time();
setInterval(function () {main()},1000);