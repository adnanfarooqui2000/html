$(document).ready(function(){
    $('#menu').click(function(){
        $('aside').toggle()
        $('#menu').css({
            'color':'black'
            'backgroundColor':'white'
        })
    })
})
let len;
function run(){
    async function fetchdata(){
        let data= await fetch('https://jsonplaceholder.typicode.com/todos');
        let response=await data.json();
        len=response.length;
        alert(len)
        let fildata=response.filter(e=>e.completed===true);
        document.querySelector('#taskcompleted').innerHTML=fildata.length
        let fildata1=response.filter(e=>e.completed===false);
        document.querySelector('#taskuncompleted').innerHTML=fildata1.length
    }
    fetchdata()
}
setInterval(runningvalue,100)
function runningvalue(){
    let count=0;
    if(count<=len){
        document.querySelector('#user').innerHTML=count;
        count++;
    }
}
