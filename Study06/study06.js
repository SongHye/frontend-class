//var edgePoint = {
//    "left":document.body.clientWidth-110,
//    "top":document.body.clientHeight-110,
//}
//
//var originalPoint = {
//    "left":10,
//    "top":10,
//}
//
//function move(point){
//    $('#container').animate({                    
//        left: point.left,
//        top: point.top,
//    }, 900);
//}
//
//$('#move').toggle(move(edgePoint),move(originalPoint));


$('#move').toggle(
    function(){
    $('#container').animate(
        {left: document.body.clientWidth-110,top: document.body.clientHeight-110}, 700)
    }, 
    function(){      
    $('#container').animate(
        {left: 10,top: 10,}, 700);
    }
);