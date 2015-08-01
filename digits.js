var dots = document.querySelector('.clock.semicolumn div');
dots.classList.add('colon');

var digits = document.querySelectorAll('.h-m');
var today = new Date();

function two_digits(d){
    var a = d.toString();
    return [a[0], a[1]];
}

document.getElementById('hour-1').innerHTML = two_digits(today.getHours())[0];
document.getElementById('hour-2').innerHTML = two_digits(today.getHours())[1];

document.getElementById('minute-1').innerHTML = two_digits(today.getMinutes())[0];
document.getElementById('minute-2').innerHTML = two_digits(today.getMinutes())[1];