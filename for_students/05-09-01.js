// @ts-check
export {};  // null statement to tell VSCode we're doing a module

// recreate the picture from SVG - but don't use quadratics

let canvas = document.getElementById("canvas1");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

let context = canvas.getContext("2d");
let u = 100/3;

context.fillStyle = "#CCC";
context.strokeStyle = "black";
context.lineWidth = 5;

context.beginPath();
context.moveTo(150, 100);
context.bezierCurveTo(150,100+u, 100+u, 150, 100,150);
context.bezierCurveTo(100-u,150,50, 100+u, 50,100);
context.bezierCurveTo(50,100-u, 100-u, 50, 100,50);
context.bezierCurveTo(100,50+u, 150-u, 100, 150,100);
context.closePath();
context.fill();
context.stroke();
