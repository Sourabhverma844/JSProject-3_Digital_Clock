//const clock = document.querySelector('#clock');
//Hum ise use kar sakte the but just for fun hum nahi krenge
const clock = document.getElementById('clock');

//here is a method by using this we can control evets of js
//setInterval(function(){},time in miliseconds ki kitne time ke interval me hme code ko fir execute krna he continously)
setInterval(function(){
    let date = new Date();
    let currenttime = date.toLocaleTimeString();
    clock.innerHTML = `${currenttime}`
},1000);