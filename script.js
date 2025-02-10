//const clock = document.querySelector('#clock');
//Hum ise use kar sakte the but just for fun hum nahi krenge
const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    let currenttime = date.toLocaleTimeString();
    clock.innerHTML = `${currenttime}`
},1000);