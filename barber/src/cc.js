var cnv = document.getElementById("cnv");
var ctx = cnv.getContext("2d");

ctx.fillStyle = "red";

var py = 400

ctx.moveTo(200,py)
    function controler(event) {
    var x = event.touches[0].clientX
    var y = event.touches[0].clientY
    //ctx.moveTo(x,y)
    ctx.lineWidth = 1.5
    ctx.lineTo(x,y)
    ctx.clearRect(0,0,400,400)
    ctx.stroke()
    console.log(x+"  "+y)
    ctx.moveTo(x,y)
    requestAnimationFrame(controler)
}


function move(event) {
    alert("ok")
    var x = event.touches[0].clientX
    var y = event.touches[0].clientY
    ctx.moveTo(x,y)
}

alert()
cnv.addEventListener("mousemove",controler)
document.addEventListener("mousedown",move)