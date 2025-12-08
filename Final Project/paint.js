window.addEventListener('load', () => {

const canvas = document.getElementById('Canvas');
const strokeColor = document.getElementById('stroke');
const lineWidth = document.getElementById('lineWidth');
const clearBtn = document.getElementById('clear');
const ctx = canvas.getContext('2d');


 ctx.strokeStyle = strokeColor.value;
ctx.lineWidth = lineWidth.value;

strokeColor.addEventListener('change', (e) => {
  ctx.strokeStyle = e.target.value;
 
});

lineWidth.addEventListener('change', (e) => {
  ctx.lineWidth = e.target.value;
});

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
});

let painting = false;

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
  ctx.lineCap = 'round';

ctx.lineTo(e.clientX,e.clientY);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(e.clientX,e.clientY);


}


canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

});