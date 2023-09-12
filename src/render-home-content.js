export default function (element) {
  const homeHTML = `
  <div id="home-restaurant-info-container">
  <p>
  POZDINNI is the best totally fictional pasta restaurant in Chicago. We've been cooking delicious italian dishes in website's author's imagination since 1977. This non-existent restaurant proved its food taste and quality by generations of our customers, number of which is suspiciously close to zero.
  </p>
  </div>
    `;
  element.innerHTML = "";
  element.insertAdjacentHTML("afterbegin", homeHTML);
}
