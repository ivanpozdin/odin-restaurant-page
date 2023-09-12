import HomeBackground from "./imgs/home-background.jpg";
export default function (element) {
  const homeHTML = `
    <img
            id="home-background-img"
            src="${HomeBackground}"
            alt="Several pasta dishes on a table"
            srcset=""
    /> 
    `;
  element.innerHTML = "";
  element.insertAdjacentHTML("afterbegin", homeHTML);
}
