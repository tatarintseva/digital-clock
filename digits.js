var d = new Date();

hours = d.getHours().toString().split('');
minutes = d.getMinutes().toString().split('');

document.getElementById('hour-1').innerHTML = hours[0];
document.getElementById('hour-2').innerHTML = hours[1];

document.getElementById('minute-1').innerHTML = minutes[0];
document.getElementById('minute-2').innerHTML = minutes[1];