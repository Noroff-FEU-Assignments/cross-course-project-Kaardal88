




document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.noroff.dev/api/v1/gamehub';
    const gameCatalogueElement = document.getElementById('game-catalogue');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const loadingSpinner = document.querySelector(".loadingSpinner");
  
 
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch games: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(game => {
                const gameElement = createGameElement(game, loadingIndicator);
                gameCatalogueElement.appendChild(gameElement); 
                const displayedGames = [];
                let length = data.length = 10;       
            });

            
          
        
        })
        .catch(error => {
            console.error('Error:', error);
        });
});


 
function createGameElement(game, loadingIndicator) {
    const gameElement = document.createElement('div');
    gameElement.innerHTML = `
        <div class="game-cover-background">
            <div class="game-cover" style="background-image: url('${game.image}');"></div>
            <div class="spaced-row">
                <div class="game-text">
                    <p class="game-text-big">${game.title}</p>
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