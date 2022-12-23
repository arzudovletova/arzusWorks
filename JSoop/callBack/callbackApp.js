let btnSearch = document.querySelector("#btnSearch");
let txtSearch = document.querySelector("#txtSearch")

btnSearch.addEventListener("click", () => {
    getCountry(txtSearch.value)
})


let getCountry = (country) => {

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/"+country);
request.send();

request.addEventListener("load",  function(){
    const data = JSON.parse(this.responseText)
    renderCountry(data[0])

    const countries = data[0].borders.toString();

    const req = new XMLHttpRequest();
    req.open("GET", "https://restcountries.com/v3.1/alpha?codes="+countries)
    req.send()

    req.addEventListener("load", function(){
        const data = JSON.parse(req.responseText)
        renderNeighbours(data)
    })
})}

function renderCountry(data){

        let html = `
            <div class="card-header">
                Arama sonucu
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <img src="${data.flags.png}" alt="" class="img-fluid">
                    </div>
                    <div class="col-8">
                        <h3 class="card-title">${data.name.common}</h3>
                        <hr>
                        <div class="row">
                            <div class="col-4">Population:</div>
                            <div class="col-4">${(data.population/1000000).toFixed(1)} milyon</div>
                        </div>
                        <div class="row">
                            <div class="col-4">Language:</div>
                            <div class="col-4">${Object.values(data.languages)}</div>
                        </div>
                        <div class="row">
                            <div class="col-4">Capital:</div>
                            <div class="col-4">${data.capital}</div>
                        </div>
                        <div class="row">
                            <div class="col-4">Currencies:</div>
                            <div class="col-4">${Object.values(data.currencies)[0].name}</div>
                        </div>
                    </div>

                </div>
            </div>
        `
     document.querySelector("#country-details").innerHTML = html

    }

    let neighbours = document.querySelector("#neighbours")

function renderNeighbours(data){
    for(let country of data){
        let html = `
            <div class="col-2 mt-2">
                <div class="card">
                    <img src="${country.flags.png}" class="card-img-top">
                    <div class="card-body">
                        <h6 class="card-title">${country.name.common}</h6>
                    </div>
                </div>
            </div>
        `

        neighbours.insertAdjacentHTML("beforeend", html)
    }


}

