// @ts-check
export {};  // null statement to tell VSCode we're doing a module

// draw the spiral - account for the checkbox and slider

let canvas = document.getElementById("canvas1");
let checkbox = document.getElementById("checkbox");
let slider = document.getElementById("slider");

if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

let context = canvas.getContext("2d");

function draw(u){
    let x = 200 + u * 180 * Math.cos(2 * Math.PI * 4 * u);
    let y = 200 + u * 180 * Math.sin(2 * Math.PI * 4 * u);

    context.fillRect(x, y, 2, 2);

    if(checkbox.checked){
        context.lineTo(x, y);
    }
}

function animate(timestamp){
    context.clearRect(0, 0, canvas.width, canvas.height);
    let len = 20;
    for(let i = 20; i<slider.value*200; i++)  len++;

    context.fillStyle = "blue";
    context.strokeStyle = "blue";
    context.lineWidth = 2;
    
    context.beginPath();
    context.moveTo(200,200);
    for(let i = 0; i< len; i++)    draw(i/len);
    context.stroke();
    context.closePath();
}

checkbox.onchange = function(e){
    window.requestAnimationFrame(animate);
}
slider.onchange = function(e){
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
