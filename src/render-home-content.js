import HomeBackground from "./home-background.jpg";
export default function renderHomeContent(element) {
  const homeHTML = `
    <img
            src="${HomeBackground}"
            alt="Several pasta dishes on a table"
            srcset=""
    /> 
    `;
  element.innerHTML = "";
  element.insertAdjacentHTML("afterbegin", homeHTML);
}
