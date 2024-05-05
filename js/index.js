import { apiUrl } from "./data/constants.js";
import { productContainer } from "./data/constants.js";

async function getProducts() {
  try {
    const response = await fetch(apiUrl);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    console.log(product);
    productContainer.innerHTML += `<div>
                                     <a href="./details.html?id=${product.id}">
                                       <img class="game-catalogue-1-2" src="${product.images[0].thumbnail}" alt="${product.name}">
                                     </a>
                                  </div>`;
  });
}


