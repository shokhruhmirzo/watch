var elHour = document.querySelector('.hour');
var elMin = document.querySelector('.min');
var elSec = document.querySelector('.sec');

setInterval(()=>{
    var date = new Date();

    elHour.textContent = date.getHours();
    elMin.textContent = date.getMinutes();
    elSec.textContent = date.getSeconds();
},1000)

document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("Kod ni ko'chirish mumkinmas !!!");
});

