var comingdate = new Date("Mar 1, 2019 00:00:00");

var dias = document.getElementById('dias');
var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

var x = setInterval(function() {
    var now = new Date();
    var des = comingdate.getTime() - now.getTime();

    var diasSet = Math.floor(des/(1000 * 60 * 60 * 24));
    var horasSet = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutosSet = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
    var segundosSet = Math.floor(des%(1000 * 60) / 1000);

    dias.innerHTML = obterNumero(diasSet);
    horas.innerHTML = obterNumero(horasSet);
    minutos.innerHTML = obterNumero(minutosSet);
    segundos.innerHTML = obterNumero(segundosSet);

    if (des <= 0) clearInterval(x);
    
}, 1000);

function obterNumero(x) {
    if (x<10) return '0'+ x;
    else return x;
}