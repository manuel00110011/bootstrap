const container = document.getElementById("card-container");

fetch("cards.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Errore nel caricamento del JSON");
    }
    return response.json();
  })
  .then(cards => {
    cards.forEach(card => {
      container.innerHTML += `
  <div class="col-12 col-md-6 col-lg-3">
    <a href="${card.link}" class="text-decoration-none">
      <div class="card text-bg-${card.colore} h-100 shadow-sm hover-shadow">

        <div class="card-body d-flex flex-column">
         <div class="card-header">Notizia</div>

            <img src="OIP.jpeg" class="card-img-top" alt="foto">
          <h5 class="card-title">${card.titolo}</h5>
          <p class="card-text">${card.testo}</p>

          <div class="mt-auto d-flex justify-content-end">
            <span class="btn btn-light btn-sm">Apri</span>
          </div>
        </div>

      </div>
    </a>
  </div>
`;
    });
  })
  .catch(error => {
    console.error(error);
  });
