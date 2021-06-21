const currentTime = new Date();{
     document.getElementById('time').innerHTML = currentTime.getHours();
}
const currentTimeMin = new Date();{
    document.getElementById('timeMin').innerHTML = currentTimeMin.getMinutes();
}
const currentTimeSecs = new Date();{
    document.getElementById('timeSecs').innerHTML = currentTimeSecs.getSeconds();
}
function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);}
AutoRefresh();