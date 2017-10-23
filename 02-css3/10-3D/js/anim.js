var x,y,n=0,ny=0,rotInt,stop=0;
function rotate(){
    y = document.getElementById("test");
    clearInterval(rotInt);
    rotInt = setInterval("start()",15);
}

function stopRotate(){
    if(stop){
        stop = 0;
        clearInterval(rotInt);
    }else{
        stop = 1;
        rotate();
        document.getElementById("test")
    }
}

function start(){
    ny=ny+1;
    y.style.transform="rotateY(" + ny + "deg)";
    y.style.webkitTransform="rotateY(" + ny + "deg)";
    y.style.OTransform="rotateY(" + ny + "deg)";
    y.style.MozTransform="rotateY(" + ny + "deg)";
    if (ny==180 || ny>=360){
        //clearInterval(rotInt);
        if (ny>=360){
            ny=0;
        }
    }
}
