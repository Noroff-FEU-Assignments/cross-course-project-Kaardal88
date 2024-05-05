import { apiUrl } from "./data/constants.js";
import { getQueryParameter } from "./helper/getQueryparameter.js";

const detailsContainer = document.getElementById("game-details");
const gameDetailsContainer = document.querySelector("#game-details");

// ---

async function fetchGame() {
  const gameId = getQueryParameter("id");

  if (!gameId) {
    // if falsy redirect back to homepage.
    document.location.href = "/";
  }

  const gameUrl = `${apiUrl}/${gameId}`;

  try {
    const response = await fetch(gameUrl);

    if (!response.ok) {
      throw new Error("there was an error fetching the game");
    }

    const game = await response.json();
    console.log(game);
    return game;
  } catch (error) {
    console.error(error);
  }
}

// ---

async function handleGameInformation() {
  const game = await fetchGame();
  try {
    displayGameInformation(game, detailsContainer);
  } catch (error) {
    // displays the error to the console.
    console.error(error);
    // displays the error to the user.
    gameDetailsContainer.innerHTML = "Something went wrong displaying the game";
  }
}
handleGameInformation();

// ---

function displayGameInformation(game) {
  detailsContainer.innerHTML = `
    <img class="displayedImg" src="${game.images[0].src}" alt="${game.name}">
    <div class="background-info">
    <h1 id="displayedGameTitle">${game.name}</h1>
    <p class="description-textbox"><b>About the Game:</b>${game.description}</p>
    <p><b>Genre:</b> ${game.tags[0].name}</p>
    
    <h3><b>Price:</b> ${game.prices.price} ${game.prices.currency_prefix}</h3>
    </div>
    `;
}

{
  /* <p><b>Released:</b> ${game.released}</p>
    <p><b>Age Limit:</b> ${game.ageRating}</p> */
}
