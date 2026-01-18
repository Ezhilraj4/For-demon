const lines = document.querySelectorAll(".line, .signature");
const btn = document.getElementById("chooseBtn");
const finalText = document.getElementById("finalText");

lines.forEach((line, index) => {
  setTimeout(() => {
    line.style.opacity = "1";
    line.style.transition = "opacity 1.5s";
  }, index * 900);
});

btn.addEventListener("click", () => {
  finalText.style.opacity = "1";
  btn.style.display = "none";
});
