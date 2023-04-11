const cards = document.querySelectorAll(".tcard");

function transition() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
}

cards.forEach((card) => card.addEventListener("click", transition));
