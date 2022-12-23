//musicjs

class Music{
    constructor(title,singer,img,file){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file
    }
    getName(){
        return this.title+ " - " + this.singer
    }
}

let musicList= [
    new Music ("Soup is good food", "Dead Kennedys","dk.jpg","sigf.mp3" ),
    new Music ("Tonight I feel like Kafka", "Jelous of birds","job.jpg","tiflk.mp3" ),
    new Music ("Tom Waits", "Everything goes to hell","tw.jpg","egth.mp3" )
]

//musicplayerjs

class MusicPlayer{
    constructor(musicList){
        this.musicList=musicList;
        this.index= 0;
    }

    getMusic(){
        return this.musicList[this.index]
    }

    nextMusic(){
        if(this.index +1 != this.musicList.length){
            this.index++
        }else{
            this.index=0
        }
    }

    previousMusic(){
        if(this.index!= 0){
            this.index--;
        }else{
            this.index= this.musicList.length-1
        }
    }
}

//appjs

const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const duration= document.querySelector("#duration");
const currentTime= document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const ulList = document.querySelector(".ul-list")


const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList)
})

play.addEventListener("click", ()=>{
    if(!(container.classList.contains("playing"))){
        playingMusic()
    }else{
        pauseMusic()
    }
} )

function displayMusic(music){
    title.innerText = music.title;
    singer.innerText= music.singer;
    image.src = music.img;
    audio.src = music.file
}

function playingMusic(){
    container.classList.add("playing")
    play.querySelector("i").classList.add("fa-pause")
    playMusic()
    play.querySelector("i").classList.remove("fa-play");
}

function pauseMusic(){
    container.classList.remove("playing")
    play.querySelector("i").classList.add("fa-play");
    play.querySelector("i").classList.remove("fa-pause")
    playMusic()
}

function playMusic(){
    if(container.classList.contains("playing")){
        audio.play()
    }else{
        audio.pause();
    }
}

prev.addEventListener("click",() => {
    player.previousMusic();
    let music = player.getMusic()
    displayMusic(music);
    playingMusic()
})

next.addEventListener("click",() => {
    player.nextMusic()
    let music = player.getMusic()
    displayMusic(music)
    playingMusic()
})

const calculateTime = (toplamsaniye) => {
    const dakika= Math.floor(toplamsaniye/60)
    const saniye = Math.floor(toplamsaniye%60);
    const guncellenenSaniye = saniye <10 ? `0${saniye}`: `${saniye}`
    const sonuc =`${dakika}:${guncellenenSaniye}`;
    return sonuc
}

audio.addEventListener("loadedmetadata", ()=> {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max =Math.floor(audio.duration)
});

audio.addEventListener("timeupdate", ()=> {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value)
})

progressBar.addEventListener("input", ()=>{
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value
})

volumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value/100;
    if(value==0){
        volume.classList= "fa-solid fa-volume-xmark"
    }else{
        volume.classList= "fa-solid fa-volume-high"
    }
})

volume.addEventListener("click", () => {
    if(volumeBar.value>0){
        volumeBar.value =0;
        audio.muted = true;
        volume.classList= "fa-solid fa-volume-xmark"
    }else{
        volumeBar.value = 100;
        audio.muted= false
        volume.classList= "fa-solid fa-volume-high"
    }
   
})

function displayMusicList(list){
    for(let i=0; i<list.length; i++){
        let liTag = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${list[i].getName()}</span>
            <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
            <audio class="music-${i}" src="${list.file}"></audio>
        </li>
        `
        ulList.insertAdjacentHTML("beforeend", liTag)
    }
}
