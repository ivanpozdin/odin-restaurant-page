import caponata from "./imgs/caponata-pasta.jpg";
import backedChicken from "./imgs/chicken_pasta_bake.jpg";
import gnocchi from "./imgs/gnocchi.jpg";
import salmonPasta from "./imgs/salmonpasta.jpg";
import meatballs from "./imgs/spaghetti_with_meatballs.jpg";
import carbonara from "./imgs/spaghetti-carbonara.jpg";
import bolognese from "./imgs/pasta-bolognese.jpg";
import cheesyHam from "./imgs/cheesy-ham.jpg";
import orangeJuice from "./imgs/orange-juice.jpg";
import water from "./imgs/water.jpg";
import coca from "./imgs/coca.jpg";
import beer from "./imgs/beer.jpg";

export default function renderMenuContent(element) {
  const menuHTML = `
  <div class="menu">
  <h1>Pasta</h1>
  <div class="pasta-container food-section-container">
    <div class="food-card">
      <img
        src="${caponata}"
        alt="Caponata pasta"
        srcset=""
      />
      <h2 class="name-food">Caponata pasta</h2>
      <p class="price-food">10$</p>
      <button class="order-food-btn">Order</button>
    </div>
    <div class="food-card">
      <img
        src="${backedChicken}"
        alt="Baked chicken pasta"
        srcset=""
      />
      <h2 class="name-food">Chicken pasta</h2>
      <p class="price-food">11$</p>
      <button class="order-food-btn">Order</button>
    </div>
    <div class="food-card">
      <img
        src="${gnocchi}"
        alt="Chorizo & mozzarella gnocchi bake"
        srcset=""
      />
      <h2 class="name-food">Chorizo & mozzarella gnocchi bake</h2>
      <p class="price-food">11.50$</p>
      <button class="order-food-btn">Order</button>
    </div>
    <div class="food-card">
      <img
        src="${salmonPasta}"
        alt="Pasta with salmon & peas"
        srcset=""
      />
      <h2 class="name-food">Pasta with salmon & peas</h2>
      <p class="price-food">13$</p>
      <button class="order-food-btn">Order</button>
    </div>
    <div class="food-card">
      <img
        src="${meatballs}"
        alt="Spaghetti & meatballs"
        srcset=""
      />
      <h2 class="name-food">Spaghetti & meatballs</h2>
      <p class="price-food">11$</p>
      <button class="order-food-btn">Order</button>
    </div>
    <div class="food-card">
      <img
        src="${carbonara}"
        alt="Spaghetti carbonara"
        srcset=""
      />
      <h2 class="name-food">Spaghetti carbonara</h2>
      <p class="price-food">14$</p>
      <button class="order-food-btn">Order</button>
    </div>
    <div class="food-card">
      <img
        src="${bolognese}"
        alt="Pasta bolognese"
        srcset=""
      />
      <h2 class="name-food">Pasta bolognese</h2>
      <p class="price-food">12$</p>
      <button class="order-food-btn">Order</button>
    </div>
    <div class="food-card">
      <img
        src="${cheesyHam}"
        alt="Cheesy ham & broccoli pasta"
        srcset=""
      />
      <h2 class="name-food">Cheesy ham & broccoli pasta</h2>
      <p class="price-food">14$</p>
      <button class="order-food-btn">Order</button>
    </div>
  </div>

  <h1>Drinks</h1>
  <div class="drinks-container food-section-container">
    <div class="food-card">
      <img
        src="${orangeJuice}"
        alt="Fresh orange juice"
        srcset=""
      />
      <h2 class="name-food">Fresh orange juice</h2>
      <p class="price-food">4$</p>
      <button class="order-food-btn">Order</button>
    </div>
    <div class="food-card">
      <img src="${water}" alt="Water" srcset="" />
      <h2 class="name-food">Water</h2>
      <p class="price-food">2$</p>
      <button class="order-food-btn">Order</button>
    </div>
    <div class="food-card">
      <img src="${coca}" alt="Coca-Cola" srcset="" />
      <h2 class="name-food">Coca-Cola</h2>
      <p class="price-food">3$</p>
      <button class="order-food-btn">Order</button>
    </div>
    <div class="food-card">
      <img src="${beer}" alt="Beer" srcset="" />
      <h2 class="name-food">Beer</h2>
      <p class="price-food">5$</p>
      <button class="order-food-btn">Order</button>
    </div>
  </div>
</div>
  `;
  element.innerHTML = "";
  element.insertAdjacentHTML("afterbegin", menuHTML);
}
