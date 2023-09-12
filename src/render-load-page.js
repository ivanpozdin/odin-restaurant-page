export default function renderLoadPage() {
  const loadPageHTML = `
    <div class="header">
      <h1>POZDINNI <span>We're cooking best pasta in town since 1977</span></h1>
      <button class="section-btn" id="home-btn">HOME</button>
      <button class="section-btn" id="menu-btn">MENU</button>
      <button class="section-btn" id="contact-btn">CONTACT</button>
    </div>
    <div class="" id="content">
    </div>
    <div class="footer"></div>
    `;
  document.querySelector("body").insertAdjacentHTML("afterbegin", loadPageHTML);
}
