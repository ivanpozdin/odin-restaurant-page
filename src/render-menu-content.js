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

const Food = [
  { name: "Caponata pasta", price: "10$", imageSrc: caponata },
  { name: "Chicken pasta", price: "11$", imageSrc: backedChicken },
  {
    name: "Chorizo & mozzarella gnocchi bake",
    price: "11.50$",
    imageSrc: gnocchi,
  },
  { name: "Pasta with salmon & peas", price: "13$", imageSrc: salmonPasta },
  { name: "Spaghetti & meatballs", price: "11$", imageSrc: meatballs },
  { name: "Spaghetti carbonara", price: "14$", imageSrc: carbonara },
  { name: "Pasta bolognese", price: "12$", imageSrc: bolognese },
  { name: "Cheesy ham & broccoli pasta", price: "14$", imageSrc: cheesyHam },
];

const Drinks = [
  { name: "Orange juice", price: "6$", imageSrc: orangeJuice },
  { name: "Water", price: "2$", imageSrc: water },
  { name: "Coca-Cola", price: "3$", imageSrc: coca },
  { name: "Beer", price: "5$", imageSrc: beer },
];

const createFoodCardElement = function (food) {
  const foodCardDiv = document.createElement("div");
  foodCardDiv.classList.add("food-card");
  const imageOfFood = new Image();
  imageOfFood.setAttribute("src", food.imageSrc);
  imageOfFood.setAttribute("alt", food.name);

  foodCardDiv.innerHTML = `
  <h2 class="name-food">${food.name}</h2>
  <p class="price-food">${food.price}</p>
  <button class="order-food-btn">Order</button>
  `;
  foodCardDiv.insertAdjacentElement("afterbegin", imageOfFood);

  return foodCardDiv;
};

const createMenuElement = function () {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");
  menuContainer.insertAdjacentHTML("afterbegin", "<h1>Pasta</h1>");
  menuContainer.insertAdjacentElement("beforeend", createFoodMenu(Food));
  menuContainer.insertAdjacentHTML("beforeend", "<h1>Drinks</h1>");
  menuContainer.insertAdjacentElement("beforeend", createFoodMenu(Drinks));
  return menuContainer;
};

const createFoodMenu = function (foodList) {
  const foodMenuContainer = document.createElement("div");
  foodMenuContainer.classList.add("food-section-container");
  for (const food of foodList) {
    foodMenuContainer.insertAdjacentElement(
      "beforeend",
      createFoodCardElement(food)
    );
  }
  return foodMenuContainer;
};

export default function renderMenuContent(element) {
  const menu = createMenuElement();
  element.innerHTML = "";
  element.insertAdjacentElement("afterbegin", menu);
}
