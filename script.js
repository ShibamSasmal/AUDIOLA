const arr = [
    {songName:"Ram Siya Ram", url:"./songs/_Ram Siya Ram(PagalWorld.com.cm).mp3",img:"./Images/Ram.jpg"},
    {songName:"Oh mahi", url:"./songs/O Mahi O Mahi(PagalWorld.com.cm).mp3",img:"./Images/Ohmahi.jpg"},
    {songName:"Pehle Bhi Main", url:"./songs/Pehle Bhi Main Animal 128 Kbps.mp3",img:"./Images/animal.jpg"},
    
];
var allSongs = document.querySelector("#all-songs");
var audio = new Audio();
var poster = document.querySelector("#left");
var selectedSongs = 0;
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

function mainFnc(){
    var clutter =""
arr.forEach(function(elem,idx){
clutter+=`<div class="song-card" id=${idx}>
<div class="part1">
 <img src=${elem.img} alt="">
 <h2>${elem.songName}</h2>
</div>
<h6>3.56</h6>
</div>`;
});

allSongs.innerHTML = clutter;
audio.src = arr[selectedSongs].url;
poster.style.backgroundImage = `url(${arr[selectedSongs].img})`;
}
mainFnc();

allSongs.addEventListener("click",function(dets){
    // console.log(dets.target.id);
    selectedSongs = dets.target.id;
    play.innerHTML = `<i class="ri-pause-line"></i>`
    f=1;
    mainFnc();
    audio.play();

});

var f = 0;
play.addEventListener("click",function(){
    if(f==0){

        play.innerHTML = `<i class="ri-pause-line"></i>`
        mainFnc();
        audio.play();
        f = 1;
    }
    else{
        play.innerHTML = `<i class="ri-play-line"></i>`
        mainFnc();
        audio.pause();
        f = 0; 
    }
});

forward.addEventListener("click",function(){
    if(selectedSongs < arr.length - 1){
        selectedSongs++;
        mainFnc();
        audio.play();
    }else{
        forward.style.opacity = 0.4;
    }
})

backward.addEventListener("click",function(){
    if(selectedSongs > 0){
        selectedSongs--;
        mainFnc();
        audio.play();
    }else{
        forward.style.opacity = 0.4;
    }
})