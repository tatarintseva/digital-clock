function country_selection(id){
    console.log(id);
    var ratio = 0;
    if (document.getElementById('Ukr').checked){
        ratio = 0;
        console.log('Ukraine' + ratio);
    }
    else if (document.getElementById('Fr').checked){
        ratio = -1;
        console.log('France' + ratio);
    }
    else if (document.getElementById('Gb').checked){
        ratio = -2;
        console.log('Gb' + ratio);
    }
    setInterval(function () {time(ratio)},0, 100);    
}

function time(ratio){
    var d = new Date();

    // console.log("ratio = " + ratio);

    hours = d.getHours()+ratio;
    hours = ('0' + hours).slice(-2).toString().split('');
    minutes = ('0' + d.getMinutes()).slice(-2).toString().split('');

    document.getElementById('hour-1').innerHTML = hours[0];
    document.getElementById('hour-2').innerHTML = hours[1];

    document.getElementById('minute-1').innerHTML = minutes[0];
    document.getElementById('minute-2').innerHTML = minutes[1];
    return hours;
}

function initial_country(){
    return "Ukr";
}

// country_selection();

function boot(){
    console.log("boot")
    var id = 'Gb'
    var country_selectors = document.getElementsByClassName('country-selector');
    console.log("here" + document.getElementsByClassName('country-selector').id)
    for (var i=0;i<country_selectors.length;i++){
        console.log("for in boot")
        country_selectors[i].onclick = function (){console.log('a'); country_selection(id)};   
    }
}

boot()
//onchange = "country_selection(this.id);" 