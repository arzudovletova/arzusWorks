let rateUs = document.querySelector(".btn-rate");
let secondSection = document.querySelector(".second");
let points = document.querySelector(".points")
let submit = document.querySelector(".btn-submit");
let thirdSection = document.querySelector(".third");
let sec3p = document.querySelector(".sec3-p");
let icon = document.querySelector(".point-icon")

class ResponseList{
    constructor(id, image){
        this.id=id;
        this.image= image;
    }
}

let rateApp = new ResponseList();

rateApp= [
    {id: 1, image: '<i class="fa-solid fa-face-sad-tear"></i>'},
    {id: 2, image: '<i class="fa-solid fa-face-frown"></i>'},
    {id: 3, image: '<i class="fa-solid fa-face-meh"></i>'},
    {id: 4, image: '<i class="fa-solid fa-face-smile"></i>'},
    {id: 5, image: '<i class="fa-solid fa-face-smile-beam"></i>'}
]

rateApp.map(p => {
    points.innerHTML += `
        <div class="point">${p.id}</div>
    `
})

let point = document.querySelectorAll(".point");

rateUs.addEventListener("click", () =>{
    secondSection.classList.add("active")
})

point.forEach(p => {
    p.addEventListener("click", ()=>{
        point.forEach(p => {
            p.classList.remove('clicked');
        })
        p.classList.add('clicked');   
        submit.classList.add("clickbtn");
        sec3p.innerHTML = `You selected ${p.innerHTML} out of ${point.length}`
    })
})



submit.addEventListener("click", ()=>{
    secondSection.classList.remove("active");
    thirdSection.classList.add("active")

    let haveclicked = document.querySelector(".clicked");
    for(let rate of rateApp){
        if(haveclicked.innerHTML== rate.id){
            icon.innerHTML= rate.image
        }
        
    }
})





