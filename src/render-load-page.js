export default function renderLoadPage() {
  const loadPageHTML = `
    <div class="header">
      <h1>POZDINNI pasta</h1>
      <a href="#">HOME</a>
      <a href="#">MENU</a>
      <a href="#">CONTACT</a>
    </div>
    <div class="" id="content">
    </div>
    <div class="footer"></div>
    `;
  document.querySelector("body").insertAdjacentHTML("afterbegin", loadPageHTML);
}
