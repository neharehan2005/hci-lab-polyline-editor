const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const modeText = document.getElementById("mode");
const statusText = document.getElementById("status");
let selectedPoint = null;

let mode = "draw";
let polylines = [];
let currentPolyline = [];

document.addEventListener("keydown", (e) => {
  if (e.key === "b") {
    if (currentPolyline.length > 0) {
      polylines.push(currentPolyline);
      currentPolyline = [];
    }
    mode = "draw";
  }
  if (e.key === "m") mode = "move";
  if (e.key === "d") mode = "delete";
  if (e.key === "r") {
      statusText.innerText = "Canvas refreshed";
      setTimeout(() => {
          statusText.innerText = "";
        }, 1000);
        redraw();
  }
  redraw();
  if (e.key === "q") {
    polylines = [];
    currentPolyline = [];
    redraw();
    window.close();
  }
  modeText.innerText = "MODE : " + mode.toUpperCase();
  console.log("Key pressesd", e.key);
});

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (mode === "draw") {
    currentPolyline.push({ x, y });
    console.log(x, y);
    redraw();
  } else if (mode === "move") {
    // for first click : select nearest point
    if (!selectedPoint) {
      selectedPoint = findNearestPoint(x, y);
      if (selectedPoint) {
        console.log("Point selected to move : ", selectedPoint);
      }
    }
    // for second click : move selected point
    else {
      const { polylineIndex, pointIndex } = selectedPoint;
      polylines[polylineIndex][pointIndex] = { x, y };
      selectedPoint = null;
      console.log("Point moved to: ", x, y);
      redraw();
    }
  } else if (mode === "delete") {
    const nearest = findNearestPoint(x, y);
    if (nearest) {
      const { polylineIndex, pointIndex } = nearest;

      polylines[polylineIndex].splice(pointIndex, 1);

      console.log("Point deleted at index:", pointIndex);
      redraw();
    }
  }
});

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw saved polylines
  polylines.forEach(drawPolyline);
  // Draw current polylines
  drawPolyline(currentPolyline);
}

function drawPolyline(points) {
  console.log("points and its length " + points, points.length);
  if (points.length < 2) return;

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }

  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;
  ctx.stroke();

  points.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
  });
}

function findNearestPoint(x, y) {
  let minDist = Infinity;
  let nearest = null;

  polylines.forEach((polyline, pIdx) => {
    polyline.forEach((point, ptIdx) => {
      const dist = Math.hypot(point.x - x, point.y - y);
      if (dist < minDist) {
        minDist = dist;
        nearest = { polylineIndex: pIdx, pointIndex: ptIdx };
      }
    });
  });
  return minDist < 10 ? nearest : null;
}
