import "./style.css";
import renderLoadPage from "./render-load-page.js";
import renderHomeContent from "./render-home-content.js";
import renderMenuContent from "./render-menu-content.js";
import renderContactContent from "./render-contact-content";

renderLoadPage();
const contentContainer = document.querySelector("div#content");
renderHomeContent(contentContainer);

document.getElementById("home-btn").addEventListener("click", () => {
  console.log("home");
  renderHomeContent(contentContainer);
});
document.getElementById("menu-btn").addEventListener("click", () => {
  console.log("menu");
  renderMenuContent(contentContainer);
});
document.getElementById("contact-btn").addEventListener("click", () => {
  renderContactContent(contentContainer);
});
