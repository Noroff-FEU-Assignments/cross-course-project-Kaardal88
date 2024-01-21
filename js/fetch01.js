document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    
 
    if (gameId) {
        const apiUrl = `https://api.noroff.dev/api/v1/gamehub/${gameId}`;
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch game details: ' + response.statusText);
                }
                return response.json();
            })
            .then(gameDetails => {
                displayGameDetails(gameDetails);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        // Handle case where no game ID is provided in URL
        console.error('Game ID not provided.');
    }
});

//Data who get's displayed from the api call 
function displayGameDetails(gameDetails) {
    const detailsContainer = document.getElementById('game-details');
    detailsContainer.innerHTML = `
<img class="displayedImg" src="${gameDetails.image}" alt="${gameDetails.title}">
<div class="background-info">
<h1 id="displayedGameTitle">${gameDetails.title}</h1>
<p class="description-textbox"><b>About the Game:</b> ${gameDetails.description}</p>
<p><b>Genre:</b> ${gameDetails.genre}</p>
<p><b>Released:</b> ${gameDetails.released}</p>
<p><b>Age Limit:</b> ${gameDetails.ageRating}</p>
<h3><b>Price:</b> ${gameDetails.price}</h3>
</div>
`;
}


