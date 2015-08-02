// var d = new Date();
country = "Ukr";
var ratio = 0

if (country === "Ukr"){
    ratio = 0;
}
else if (country === "Fr"){
    ratio = -1;
}
else if (country === "Eng"){
    ratio = -2;
}

function time(ratio){
    var d = new Date();

    hours = d.getHours()+ratio;
    hours = ('0' + hours).slice(-2).toString().split('');
    minutes = ('0' + d.getMinutes()).slice(-2).toString().split('');

    document.getElementById('hour-1').innerHTML = hours[0];
    document.getElementById('hour-2').innerHTML = hours[1];

    document.getElementById('minute-1').innerHTML = minutes[0];
    document.getElementById('minute-2').innerHTML = minutes[1];
}

setInterval(function () {time(ratio)},0, 1000);

