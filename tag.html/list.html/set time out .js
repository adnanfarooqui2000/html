function run(){
    setTimeout(o,5000);
    setInterval(w,2000);
}
function o(){
    alert("after 5 secands")
}
let y=0;
function w(){
    if(y<10){
        alert(y)
        y++;
    }
    else{
        clearInterval()
    }
}