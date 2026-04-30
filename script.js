const images = document.querySelectorAll(".logo");

images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.classList.add("shake");
  });

  img.addEventListener("mouseleave", () => {
    img.classList.remove("shake");
  });
});
