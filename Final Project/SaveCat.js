
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const myImg = new Image();
myImg.src = 'cat.jpg';

myImg.onload = function() {
ctx.drawImage(myImg, 10, 10, 80, 70);

const myImg2 = new Image();
myImg2.src = 'bomb.jpg';
myImg2.onload = function() {
ctx.drawImage(myImg2, 90, 90, 100, 100);
     

}

    setInterval(drawFunction,700);

let x1 = 90 , y1 = 10;
let x2 = 70 , y2 = 96;
let score = 0;

function drawFunction(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    x1 = Math.random()*(canvas.width-80);
    y1 = Math.random()*(canvas.height-70);

    x2 = Math.random()*(canvas.width-100);
    y2 = Math.random()*(canvas.height-100);

    ctx.drawImage(myImg, x1, y1, 80, 70);
    ctx.drawImage(myImg2, x2, y2, 100, 100);  

}



myCanvas.onmousedown = function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x >= x1 && x <= x1 + 80 && y >= y1 && y <= y1 + 70) {
        score += 1;
        alert("The cat is saved !!! \nScore: " + score);
    } else if (x >= x2 && x <= x2 + 100 && y >= y2 && y <= y2 + 100) {
        score -= 1;
        alert("BOOM!!! You clicked the bomb  \nScore: " + score);
    }

}

}
