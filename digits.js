// var d = new Date();

function time(){
    var d = new Date();
    hours = ('0' + d.getHours()).slice(-2).toString().split('');
    minutes = ('0' + d.getMinutes()).slice(-2).toString().split('');

    document.getElementById('hour-1').innerHTML = hours[0];
    document.getElementById('hour-2').innerHTML = hours[1];

    document.getElementById('minute-1').innerHTML = minutes[0];
    document.getElementById('minute-2').innerHTML = minutes[1];

    console.log(d + d.getSeconds()); 
}
time();
setInterval(function () {time()},1000);

