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

document.getElementById('minute-1').innerHTML = today.getMinutes();
document.getElementById('minute-2').innerHTML = today.getMinutes();
console.log(today);