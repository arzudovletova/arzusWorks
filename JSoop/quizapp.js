
    let questionTxt = document.querySelector(".question_text")
    let btnStart = document.querySelector(".btn_start");
    let quizbox = document.querySelector(".quiz_box");
    let optionLst = document.querySelector('.option_list');
    let btnNext = document.querySelector(".next-btn");
    let btnReply = document.querySelector(".btn_replay");
    let btnFinish = document.querySelector(".btn_finish");
    let quesInd = document.querySelector(".question_index");
    let scbox = document.querySelector(".score-box");
    let sctxt = document.querySelector(".score_text")
    const correct ='<div class="icon"><i class="fas fa-check"></i></div>'
    const incorrect ='<div class="icon"><i class="fas fa-times"></i></div>'


function Soru(sorumetni, cevapsecenekleri, dogrucevap){
    this.sorumetni=sorumetni;
    this.cevapsecenekleri=cevapsecenekleri;
    this.dogrucevap=dogrucevap
}

Soru.prototype.cevabikontrolet= function(cevap){
    return cevap ===this.dogrucevap
}

let sorular = [
    new Soru("1-Hangisi Js paket yonetim uygulamasidir?", {a:"Node.js", b:"Typescript",c:"Npm",d:"Nuget"}, "c"),
    new Soru("2-Hangisi Js paket yonetim uygulamasidir?", {a:"Node.js", b:"Typescript",c:"Npm"}, "c"),
    new Soru("3-Hangisi Js paket yonetim uygulamasidir?", {a:"Node.js", b:"Typescript",c:"Npm",d:"Nuget"}, "c"),
    new Soru("4-Hangisi Js paket yonetim uygulamasidir?", {a:"Node.js", b:"Typescript",c:"Npm",d:"Nuget"}, "c")
]

function Quiz(sorular){
    this.sorular=sorular;
    this.soruIndex=0;
    this.dogrucevapsayisi= 0;
}

Quiz.prototype.sorugetir= function(){
    return this.sorular[this.soruIndex];
}

const quiz= new Quiz(sorular);

btnStart.addEventListener("click",function(){
    if(quiz.sorular.length!= quiz.soruIndex){
        quizbox.classList.add("active")
        let soru = quiz.sorugetir();
        soruGoster(soru);
        SoruSayisiniGoster(quiz.soruIndex+1 , quiz.sorular.length)
        btnNext.classList.remove("dispopn")
    }
})

btnNext.addEventListener("click",function(){
    if(quiz.sorular.length!= quiz.soruIndex+1){
        quizbox.classList.add("active")
        quiz.soruIndex+=1;
        let soru = quiz.sorugetir();
        soruGoster(soru);
        SoruSayisiniGoster(quiz.soruIndex+1 , quiz.sorular.length)
        btnNext.classList.remove("dispopn")
    }else{
        quizbox.classList.remove("active");
        scbox.classList.add("active")
        scoreBilgisi(quiz.sorular.length, quiz.dogrucevapsayisi)
        btnStart.style = "display:none"
    }
    
})

btnFinish.addEventListener("click", function(){
    window.location.reload()
})

btnReply.addEventListener("click", function(){
    quiz.soruIndex=0;
    quiz.dogrucevapsayisi=0;
    btnStart.click();
    scbox.classList.remove("active")
})

btnFinish.addEventListener("click", function(){
    if(quiz.sorular.length!= quiz.soruIndex){
        scbox.classList.remove("active")
        quizbox.classList.add("active")
        let soru = quiz.sorugetir();
        soruGoster(soru);
        SoruSayisiniGoster(quiz.soruIndex+1 , quiz.sorular.length)
        btnNext.classList.remove("dispopn")
    }
})

function soruGoster(soru){
    let question = `
    <span>${soru.sorumetni}</span>
    `
    let options="";
    for(let cevap in soru.cevapsecenekleri){
        options += `
        <div class="option">
        <span><b>${cevap}</b>: ${soru.cevapsecenekleri[cevap]}</span>
        </div>
        `
    }
    questionTxt.innerHTML =question;
    optionLst.innerHTML= options; 

    let option= optionLst.querySelectorAll(".option")

    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(option){
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.sorugetir();

    if(soru.cevabikontrolet(cevap)){
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend", correct)
        quiz.dogrucevapsayisi+= 1
    }else{
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend",incorrect)
    }

    for(let i=0; i<optionLst.children.length; i++){
        optionLst.children[i].classList.add("disabled")
    }

    btnNext.classList.add("dispopn")
   
}

function SoruSayisiniGoster(sorusirasi,toplamsoru){
    let queue = `
    <span class="badge bg-warning">${sorusirasi} / ${toplamsoru}</span>
    `
    quesInd.innerHTML= queue;
}

function scoreBilgisi(toplamsoru, dogrucevapsayisi){
    let tag= `
    Toplam ${toplamsoru} sorudan ${dogrucevapsayisi} dogru cevap verdiniz
     `
    sctxt.innerHTML= tag
}

function setTime(){
    for(let i=10; i>0; i--){
        setTimeout()
    }
}



