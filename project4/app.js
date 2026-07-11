let timerdisplay=document.querySelector('.timerDisplay');
let btn1=document.getElementById("stop");
let btn3=document.getElementById("reset");
let btn2=document.getElementById("start");
let msec=0;
let secs= 0;
let mins = 0;
let timerId=null;
btn2.addEventListener('click',function(){
    if(timerId!=null){
        clearInterval(timerId);
    }
    timerId= setInterval(starttimer,10);
});
btn1.addEventListener('click',function(){
        clearInterval(timerId);
});
btn3.addEventListener('click',function(){
   clearInterval(timerId);
   timerdisplay.innerHTML='00:00:00';
   msec=secs=mins=0;
});
function starttimer(){
msec++;
if(msec==100){
    msec=0;
    secs++;
    if (secs==60){
        secs=0;
        mins++;
    }
}
let msecString=msec<10?`0${msec}`:msec;
let secsString=secs< 10?`0${secs}`:secs;
let minsString=mins<10?`0${mins}`:mins;
timerdisplay.innerHTML=`${minsString}:${secsString}:${msecString}`;
}