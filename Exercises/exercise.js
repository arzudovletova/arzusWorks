let countryDetails = document.querySelector("#country-details");
let neighbours = document.querySelector("#neighbours");
let errors = document.querySelector(".errors");

document.querySelector("#btnSearch").addEventListener("click", () => {
  document.querySelector("#details").style.opacity = 0;
  let text = document.querySelector("#txtSearch").value;
  getCountry(text);
});

async function getCountry(country) {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/name/" + country
    );
    if (!response.ok) {
      throw new Error("ulke bulunamadi");
    }
    const data = await response.json();
    renderCountry(data[0]);
    let countries = data[0].borders;
    if (!countries) {
      throw new Error("Komsu ulkeler bulunamadi");
    }

    const response2 = await fetch(
      "https://restcountries.com/v3.1/alpha?codes=" + countries.toString()
    );
    const neighbors = await response2.json();
    renderNeighbours(neighbors);
  } catch (err) {
    console.log(err);
  }
}

function renderCountry(data) {
  countryDetails.innerHTML = "";
  neighbours.innerHTML = "";
  let html = `

      <div class="col-4">
        <img src="${data.flags.png}" alt="" class="img-fluid"
      </div>
      <div class="col-8">
        <h3 class="card-title">${data.name.common}</h3>
        <hr />
        <div class="row">
          <div class="col-4">Nufus:</div>
          <div class="col-8">Population: ${(data.population / 1000000).toFixed(
            1
          )}</div>
        </div>
        <div class="row">
          <div class="col-4">Resmi dil:</div>
          <div class="col-8">${Object.values(data.languages)}</div>
        </div>
        <div class="row">
          <div class="col-4">Bas kent:</div>
          <div class="col-8">${data.capital[0]}</div>
        </div>
        <div class="row">
          <div class="col-4">Para birimi:</div>
          <div class="col-8">${Object.values(data.currencies)[0].name} ${
    Object.values(data.currencies)[0].symbol
  }</div>
        </div>
      </div>
  `;
  document.querySelector("#details").style.opacity = 1;
  countryDetails.innerHTML = html;
}

function renderNeighbours(data) {
  let html = "";
  for (let country of data) {
    html += `
      <div class="col-2 mt-2">
        <div class="card">
          <img src="${country.flags.png}" class="card-img-top">
          <div class="card-body">
            <h6 class="card-title">${country.name.common}</h6>
          </div>
        </div>
      </div>
    `;
  }
  neighbours.innerHTML = html;
}

function renderError(err) {
  html = `
    <div class="alert alert-danger">
      ${err.message}
    </div>
  `;
  setTimeout(() => {
    errors.innerHTML = "";
  }, 3000);
  errors.innerHTML = html;
}
