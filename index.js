const web_player = document.querySelector(".web_player");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const sections = document.querySelectorAll(".navbar section");
const isDesktop = window.matchMedia("(min-width: 901px)");

const setPlayerBounds = () => {
  const bounds = navbar.getBoundingClientRect();
  web_player.style.left = `${isDesktop.matches ? bounds.right : bounds.left}px`;
  web_player.style.top = `${bounds.top}px`;
  web_player.style.width = `${bounds.width}px`;
  web_player.style.height = `${navbar.scrollHeight}px`;
};

sections.forEach((section) => {
  section.addEventListener("click", () => {
    setPlayerBounds();
    web_player.classList.add("is-open");
  });
});

logo.addEventListener("click", () => {
  web_player.classList.remove("is-open");
});

new ResizeObserver(setPlayerBounds).observe(navbar);
window.addEventListener("resize", setPlayerBounds);
isDesktop.addEventListener("change", setPlayerBounds);
setPlayerBounds();
