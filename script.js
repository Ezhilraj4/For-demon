let current = 0;
const pages = document.querySelectorAll(".page");
const finalText = document.getElementById("finalText");
const chooseBtn = document.getElementById("chooseBtn");

function showPage(index) {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    showPage(current);
  }
}

chooseBtn.addEventListener("click", () => {
  finalText.style.opacity = "1";
  chooseBtn.style.display = "none";
});

showPage(current);
