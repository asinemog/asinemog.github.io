function getfib(){

    var index = document.getElementById("fibnum").value;
     
    var x = 1;
    var y = 0;
    var temp = 0;
    var count = 0;

    while(count < index - 1){
        temp = x;
        x = x + y;
        y = temp;
        count++;
    }

    document.getElementById("cummies").innerHTML = y;
}

function goBack(){
    window.history.back();
}

function drawCanvas(){
    var c = document.getElementById("testCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}