console.log("welcome to spotify");
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gift=document.getElementById('gift');
let masterSongName=document.getElementById('masterSongName');
let songIteams=  Array.from(document.getElementsByClassName('songIteam'));
let songs=[
{songName:"Khwaab Ka Musafir - Laundry (Hindi Song) ", filePath:"songs/1.mp3", coverPath:"images (1).jpg"},
{songName:"openmindaudio-gospel-bedtime-prayer-song ", filePath:"songs/2.mp3", coverPath:"images (2).jpg"},
{songName:"rahulsapkal-golden-era-bollywood-love-song", filePath:"songs/3.mp3", coverPath:"images (3).jpg"},
{songName:"rahulsapkal-trending-punjabi-romantic-song", filePath:"songs/4.mp3", coverPath:"images (4).jpg"},
{songName:"soulfuljamtracks-party-dance-music", filePath:"songs/5.mp3", coverPath:"images(5).jpg"},
{songName:"DEAF KEV - Invincible [NCS Release]-320k", filePath:"songs/6.mp3", coverPath:"images.jpg"},
]
songIteams.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});-
//let audioElement= new Audio('1.mp3');
 //audioElement.play();
 //handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove(' fa-circle-play');//fa-regular
        masterPlay.classList.add('fa-circle-pause');//fa-regular
        gift.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove(' fa-circle-pause');//fa-regular
        masterPlay.classList.add('fa-circle-play');//fa-regular
        gift.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    //update seekbar
   let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  // console.log(progress);
   myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
const makeAllPlays = () => { 
    Array.from(document.getElementsByClassName('songIteamplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');//fa-regular
        element.classList.add( 'fa-circle-play');  //fa-regular
    });
};

Array.from(document.getElementsByClassName('songIteamplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-regular', 'fa-circle-play');
        e.target.classList.add('fa-regular', 'fa-circle-pause');
        audioElement.pause();
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;

       // audioElement.src = `${songIndex+1}.mp3`;
       // audioElement.currentTime = 0;
       // audioElement.play();
       // gift.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');//fa-regular
        masterPlay.classList.add( 'fa-circle-pause');//fa-regular
       gift.style.opacity = 1;
    });
});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    makeAllPlays();
    audioElement.pause();
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
 // audioElement.src = `${songIndex+1}.mp3`;
  //  masterSongName.innerText = songs[songIndex].songName;
  //  audioElement.currentTime = 0;
  //  audioElement.play();
    masterPlay.classList.remove( 'fa-circle-play');//fa-regular
    masterPlay.classList.add( 'fa-circle-pause');//fa-regular
    gift.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    makeAllPlays();
    audioElement.pause();
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
   // audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;

   // audioElement.currentTime = 0;
   // audioElement.play();
    masterPlay.classList.remove('fa-circle-play');//fa-regular
    masterPlay.classList.add('fa-circle-pause');//fa-regular
    gift.style.opacity = 1;
})
audioElement.addEventListener('ended', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    } 
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
});
    