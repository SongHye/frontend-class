function inputNumBtnClicked(){         
    
    var inputNum = document.getElementById("inputNum");
    var debug = document.getElementById("debug");
    
    for(i=1; i<10; i++){
        var result = inputNum.value + " * " + i + " = " + inputNum.value * i;
        debug.innerHTML += '<div id = "debug">' + result + '</div>';
    }
}

function whenInputNumChanged(change) {
     document.getElementById("debug").innerHTML = "";
}