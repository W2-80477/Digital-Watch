function updateTime(){
    let dateTime=new Date();
    
    let hours=dateTime.getHours();
    let minutes=dateTime.getMinutes();
    let seconds=dateTime.getSeconds();

    let session=document.getElementById('session');
    let hr=document.getElementById('hr');
    let min=document.getElementById('min');
    let sec=document.getElementById('sec');

    let sess='AM';
    
    if(hours>=12){
      sess='PM'
    }

    session.innerHTML= sess;

    if(hours>12) hours= hours-12;
    if(hours==0) hours=12;
    

    if(/^\d$/.test(hours))hours=`0${hours}`
    if(/^\d$/.test(minutes))minutes=`0${minutes}`
    if(/^\d$/.test(seconds))seconds=`0${seconds}`
    

    hr.innerHTML=hours;
    min.innerHTML=minutes;
    sec.innerHTML=seconds;
}
setInterval(updateTime,10)