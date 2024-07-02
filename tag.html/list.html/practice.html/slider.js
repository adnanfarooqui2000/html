function sliderun(){
    let st=0;
    setInterval(slide,3000)
    function slide(){
        if(st===0){
            document.querySelector('#slide1').Style.marginleft="0px";
            document.querySelector('#slide1').Style.transition="margin-left 1s"
            st++;
        }
        else if(st===1){
            document.querySelector('#slide1').Style.marginleft="20000px";
            document.querySelector('#slide1').Style.transition="margin-left 1s"
            st++;
        }
        else if(st===2){
            document.querySelector('#slide1').Style.marginleft="40000px";
            document.querySelector('#slide1').Style.transition="margin-left 1s"
            st++;
        }
        else if(st===3){
            document.querySelector('#slide1').Style.marginleft="20000px";
            document.querySelector('#slide1').Style.transition="margin-left 1s"
            st++;
        }
        else if(st===4){
            document.querySelector('#slide1').Style.marginleft="40000px";
            document.querySelector('#slide1').Style.transition="margin-left 1s"
            st=0;
        }
    }
}