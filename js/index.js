import {apiUrl} from "./data/constants.js";
import { productContainer } from "./data/constants.js";


async function getProducts(){
    try{
        const response = await fetch(apiUrl);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getProducts();

function createHTML(products){
  products.forEach(function(product)
  {console.log(product);
    productContainer.innerHTML += 
      `<div>
        <h3>${product.name}</h3>
        <img class="game-catalogue-1-2" src="${product.images[0].thumbnail}" alt="${product.name}">
      
      </div>`;
  }
)
}

//Displayed games on index page 
function createGameElement(game) {
  const gameElement = document.createElement('div');}
  gameElement.innerHTML = `
      <div class="game-cover-background">
          <div class="game-cover" style="background-image: url('${game.image}');"></div>
          <div class="spaced-row">
              <div class="game-text">
                  <p class="game-text-big">${game.title}</p>
                  <p class="price-tag" >${game.price} $</p>
                  
              </div>
          </div>
      </div>
  `;












/*<document.addEventListener('DOMContentLoaded', function() {
    

    const apiUrl = 'https://games.gamehubz.no/wp-json/wc/v3/products';
    const gameCatalogueElement = document.getElementById('game-catalogue');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const loadingSpinner = document.querySelector(".loadingSpinner");
  
 //Fetch api, error handling and displaying of games
 fetch(apiUrl, {
    headers: {
      'Authorization': `Basic ${basicAuth}` // Add authorization header
    }
  })
    .then(response => {
        console.log(response);
      if (!response.ok) {
        throw new Error('Failed to fetch games: ' + response.statusText);
      }
      return response.json();
      
    })
    .then(data => {
      data.forEach(game => {
        const gameElement = createGameElement(game, loadingIndicator);
        gameCatalogueElement.appendChild(gameElement);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});


//Displayed games on index page 
function createGameElement(game, loadingIndicator) {
    const gameElement = document.createElement('div');
    gameElement.innerHTML = `
        <div class="game-cover-background">
            <div class="game-cover" style="background-image: url('${game.image}');"></div>
            <div class="spaced-row">
                <div class="game-text">
                    <p class="game-text-big">${game.title}</p>
                    <p class="price-tag" >${game.price} $</p>
                    
                </div>
            </div>
        </div>
    `;

    // Add click event listener
    gameElement.addEventListener('click', () => {
        // Show loading indicator
        loadingIndicator.style.display = 'block';
        // Wait for 1 seconds before redirecting
        setTimeout(() => {
            window.location.href = `details.html?id=${game.id}`;
        }, 1000); 
    });
      return gameElement;
}

window.addEventListener('pageshow', function(event) {         
const loadingIndicator = document.getElementById('loadingIndicator');     
        loadingIndicator.style.display = 'none'; });*/