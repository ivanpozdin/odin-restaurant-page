import "./style.css";
import renderLoadPage from "./render-load-page.js";
import renderHomeContent from "./render-home-content.js";

renderLoadPage();
renderHomeContent(document.querySelector("div#content"));
