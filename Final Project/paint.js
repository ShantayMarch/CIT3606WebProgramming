window.addEventListener('load', () => {

const canvas = document.getElementById('Canvas');
const strokeColor = document.getElementById('stroke');
const lineWidth = document.getElementById('lineWidth');
const clear = document.getElementById('clear');
const eraser = document.getElementById('eraser');
const ctx = canvas.getContext('2d');


 ctx.strokeStyle = strokeColor.value;
ctx.lineWidth = lineWidth.value;

let erasing = false;
let previousColor = ctx.strokeStyle;

strokeColor.addEventListener('change', (e) => {
  ctx.strokeStyle = e.target.value;
  previousColor = e.target.value;
 if (erasing) {
    erasing=false;
    eraser.textContent = "Eraser";
 }
});

lineWidth.addEventListener('change', (e) => {
  ctx.lineWidth = e.target.value;
});

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
});

eraser.addEventListener('click', () => {
    erasing = !erasing;
    if (erasing) {
        previousColor = ctx.strokeStyle;
        ctx.strokeStyle = "white";
        eraser.textContent = "Erasing";
    } else {
        ctx.strokeStyle= previousColor;
        eraser.textContent = "Eraser";
    }
});

let painting = false;

function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
ctx.beginPath();
}

function draw(e) {
  if (!painting) return;

  const pos = getPos(e);
  ctx.lineCap = 'round';

ctx.lineTo(pos.x, pos.y);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(pos.x, pos.y);


}


canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

});