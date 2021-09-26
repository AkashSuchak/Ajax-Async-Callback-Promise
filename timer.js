function showTime(){
    const date = new Date()
    return date.getHours() + "Hrs: " + date.getMinutes() + " Mins : " + date.getSeconds() +" Sec : "
}
function showSessionExpire(){
    console.log("Acitivity B: Yor Session Expired at " + showTime());
}
console.log("Acitivity-A: Trigerring Activity-B at " + showTime());
setTimeout(showSessionExpire,5000)
console.log("Acitivity-A: Trigerred Activity-B at " + showTime()+ " will execute after 5 seconds");