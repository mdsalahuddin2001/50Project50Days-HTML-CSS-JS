const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
nextBtn.addEventListener("click", () => {
  currentActive++;
  if (currentActive > 1) {
    prevBtn.removeAttribute("disabled");
  }
  if (currentActive >= circles.length) {
    currentActive = circles.length;
    nextBtn.setAttribute("disabled", true);
  }
  update();
});
prevBtn.addEventListener("click", () => {
  currentActive--;
  if (currentActive < circles.length) {
    nextBtn.removeAttribute("disabled");
  }
  if (currentActive <= 1) {
    currentActive = 1;
    prevBtn.setAttribute("disabled", true);
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (currentActive >= index + 1) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const width = ((currentActive - 1) / (circles.length - 1)) * 100;

  progress.style.width = width + "%";
}
