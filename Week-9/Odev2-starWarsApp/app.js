const apiUrl = 'https://swapi.dev/api/starships/';
let currentPage = 1;

// Yıldız gemilerini listeleme fonksiyonu
async function fetchStarships(page = 1) {
    const response = await fetch(`${apiUrl}?page=${page}`);
    const data = await response.json();
    displayStarships(data.results);
}

// Yıldız gemilerini ekrana yazdırma
function displayStarships(starships) {
    const starshipContainer = document.getElementById('starship-list');
    starships.forEach(ship => {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        col.innerHTML = `
            <div class="starship-item">
                <h2>${ship.name}</h2>
                <p><strong>Model:</strong> ${ship.model}</p>
                <p><strong>Speed:</strong> ${ship.max_atmosphering_speed || 'Unknown'}</p>
                <button onclick="goToDetails('${ship.url}')">Details</button>
            </div>
        `;
        starshipContainer.appendChild(col);
    });
}

// Daha fazla yıldız gemisi yükleme
function loadMore() {
    currentPage++;
    fetchStarships(currentPage);
}

// Arama fonksiyonu
async function searchStarships(query) {
    if (query.length > 0) {
        const response = await fetch(`${apiUrl}?search=${query}`);
        const data = await response.json();
        document.getElementById('starship-list').innerHTML = '';
        displayStarships(data.results);
    } else {
        document.getElementById('starship-list').innerHTML = '';
        fetchStarships(); // Ana listeyi yeniden yükleyin
    }
}

// Detay sayfasına yönlendirme
function goToDetails(url) {
    localStorage.setItem('starshipUrl', url);
    window.location.href = 'details.html';
}

// Sayfa yüklendiğinde gemileri getir
document.addEventListener('DOMContentLoaded', () => {
    fetchStarships();
});