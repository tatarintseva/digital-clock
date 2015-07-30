var dots = document.querySelector('.clock.semicolumn div');
dots.classList.add('colon');

var digits = document.querySelectorAll('.h-m');

var today = new Date();

if (today.getHours() < 10){
    document.getElementById('hour-1').innerHTML = '0';
}
else if ((today.getHours() >= 10) && (today.getHours() < 20)){
    document.getElementById('hour-1').innerHTML = '1';
}
else if ((today.getHours() >= 20)){
    document.getElementById('hour-1').innerHTML = '2';
}

if (today.getHours() < 10){
    document.getElementById('hour-2').innerHTML = today.getHours();
}
else if ((today.getHours() >= 10) && (today.getHours() < 20)){
    document.getElementById('hour-2').innerHTML = today.getHours() - 10;
}
else if ((today.getHours() >= 20)){
    document.getElementById('hour-2').innerHTML = today.getHours() - 20;
}

if (today.getMinutes() < 10){
    document.getElementById('minute-1').innerHTML = '0';
}
else if ((today.getMinutes() >= 10) && (today.getMinutes() < 20)){
    document.getElementById('minute-1').innerHTML = '1';
}
else if ((today.getMinutes() >= 20) && (today.getMinutes() < 30)){
    document.getElementById('minute-1').innerHTML = '2';
}
else if ((today.getMinutes() >= 30) && (today.getMinutes() < 40)){
    document.getElementById('minute-1').innerHTML = '3';
}
else if ((today.getMinutes() >= 40) && (today.getMinutes() < 50)){
    document.getElementById('minute-1').innerHTML = '4';
}
else if ((today.getMinutes() >= 50)){
    document.getElementById('minute-1').innerHTML = '5';
}

if (today.getMinutes() < 10){
    document.getElementById('minute-2').innerHTML = today.getMinutes();
}
else if ((today.getMinutes() >= 10) && (today.getMinutes() < 20)){
    document.getElementById('minute-2').innerHTML = today.getMinutes() - 10;
}
else if ((today.getMinutes() >= 20) && (today.getMinutes() < 30)){
    document.getElementById('minute-2').innerHTML = today.getMinutes() - 20;
}
else if ((today.getMinutes() >= 30) && (today.getMinutes() < 40)){
    document.getElementById('minute-2').innerHTML = today.getMinutes() - 30;
}
else if ((today.getMinutes() >= 40) && (today.getMinutes() < 50)){
    document.getElementById('minute-2').innerHTML = today.getMinutes() - 40;
}
else if ((today.getMinutes() >= 40) && (today.getMinutes() < 50)){
    document.getElementById('minute-2').innerHTML = today.getMinutes() - 50;
}
console.log(today);