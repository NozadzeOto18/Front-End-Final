function navIcon() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";      //navigaciis baris responsive dizainit chanacvleba an piriqit screen zomis mixedvit
    }
}

//navigaciis menus actiuri komponentis gamoyofa
var lastBackgroundColor = "home";  //dasawyisistvis Default actiuri komponenti
function active(text){
    document.getElementById("pageName").innerHTML = text;  //id-it migeba elementis
    document.getElementById(lastBackgroundColor).style.background = "none";  //uwindelis default ferze dayeneba
    lastBackgroundColor = text;  //id-s shenaxva shemdegi moqmedebistvis
    document.getElementById(text).style.backgroundColor = "#b42323";  //amjerad actiuris gamoyofa sxva ferit
}

let slideIndex = 1;       //slideris dasawyebad
showSlides(slideIndex);   
function currentSlide(n) {
    clearTimeout(timeout);       //wertilze dacherisas acherebs cikls da gadascmes index-s saidanac tavidan iwyebs cikls
    showSlides(slideIndex = n);
}

//slider 10 suratistvis
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    //yoveli shemtxvevistvis zedmeti indexi rom ar gadaeces
    if (n < 1) {slideIndex = slides.length}    //naklebis shemtxvevashi bolo indexsidan iwyebs
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";      //aqrobs yvela surats rom chaanacvlos adgili shemdegma
    } 
    if (slideIndex > slides.length) {slideIndex = 1}  //rom ar gadaacharbos da tavidan daiwyos
    slides[slideIndex-1].style.display = "block";    //achvenebs shemdegi suratit
    slideIndex++;
    timeout = setTimeout(showSlides, 1000);   //cikli
  
}
