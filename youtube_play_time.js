var times = document.querySelectorAll('.pl-video .pl-video-time .timestamp span');
var duration = 0;
for(var i=0; i<times.length; i++){
   var t = times[i];
   t = t.innerText;
   t = t.split(':')
   min = t[0];
   sec = t[1];
   duration = duration + parseInt(sec) + parseInt(min)*60
}
console.log(duration/60/60);