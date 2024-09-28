const starshipUrl = localStorage.getItem('starshipUrl');

// Detayları çek ve göster
async function fetchStarshipDetails() {
    const response = await fetch(starshipUrl);
    const data = await response.json();
    displayStarshipDetails(data);
}

function displayStarshipDetails(starship) {
    const detailsContainer = document.getElementById('starship-details');
    detailsContainer.innerHTML = `
        <h2>${starship.name}</h2>
        <p><strong>Model:</strong> ${starship.model}</p>
        <p><strong>Passengers:</strong> ${starship.passengers}</p>
        <p><strong>Max Speed:</strong> ${starship.max_atmosphering_speed}</p>
        <p><strong>Manufacturer:</strong> ${starship.manufacturer}</p>
        <p><strong>Crew:</strong> ${starship.crew}</p>
        <p><strong>Cargo Capacity:</strong> ${starship.cargo_capacity}</p>
    `;
}

// Geri dönme fonksiyonu
function goBack() {
    window.location.href = 'index.html';
}

// Detay sayfası yüklendiğinde yıldız gemisi bilgilerini getir
document.addEventListener('DOMContentLoaded', fetchStarshipDetails);