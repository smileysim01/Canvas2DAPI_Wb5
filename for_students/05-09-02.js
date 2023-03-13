// @ts-check
export {};  // null statement to tell VSCode we're doing a module

// draw a picture using curves!

let canvas = document.getElementById("canvas1");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

let context = canvas.getContext("2d");

context.fillStyle = "#000000";
context.fillRect(0,0, canvas.width, canvas.height);

function drawOcean(){
    context.beginPath();
    context.moveTo(0,200);   
    context.bezierCurveTo(0, 160, 80, 160, 80, 200);
    context.bezierCurveTo(80, 240, 160, 240, 160, 200);
    context.bezierCurveTo(160, 160, 240, 160, 240, 200);
    context.bezierCurveTo(240, 240, 320, 240, 320, 200);
    context.bezierCurveTo(320, 160, 400, 160, 400, 200);
    // context.stroke();
    context.lineTo(canvas.width,canvas.height);   
    context.lineTo(0,canvas.height);
    context.lineTo(0,200);
    context.closePath();
    context.fill();
}

context.fillStyle = "#6497b1";
context.strokeStyle = "blue";
context.lineWidth = 5;
drawOcean();

context.save();
context.translate(-20,10);
context.fillStyle = "#005b967d";
context.strokeStyle = "blue";
context.lineWidth = 5;
drawOcean();
context.restore();

context.save();
context.translate(20,20);
context.fillStyle = "#03396c7d";
context.strokeStyle = "blue";
context.lineWidth = 5;
drawOcean();
context.restore();

context.save();
context.translate(40,20);
context.fillStyle = "#b3cde07d";
context.strokeStyle = "blue";
context.lineWidth = 5;
drawOcean();
context.restore();

context.save();
context.translate(0,20);
context.fillStyle = "#005b967D";
context.strokeStyle = "blue";
context.lineWidth = 5;
drawOcean();
context.restore();

context.fillStyle = "#f5f5f5";
context.save();
context.translate(0,-30);
context.scale(0.5,0.5);
context.beginPath();
context.arc(150,150,60,Math.PI*40/180,Math.PI*320/180);
context.bezierCurveTo(80,50,80,250,197,188);
context.closePath();
context.fill();
context.restore();






// let canvas = document.getElementById("canvas1");
// if (!(canvas instanceof HTMLCanvasElement))
//     throw new Error("Canvas is not HTML Element");


// var ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(100, 150);
// ctx.bezierCurveTo(125, 150, 100, 100, 150, 100);
// ctx.bezierCurveTo(200, 100, 175, 150, 225, 150);
// ctx.bezierCurveTo(300, 150, 150, 300, 100, 150);

//  ctx.closePath();

// ctx.strokeStyle = "black";
// ctx.lineWidth = 10;
// ctx.stroke();
// ctx.fillStyle  ="yellow";
// ctx.fill();