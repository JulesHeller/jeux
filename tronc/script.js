let barre = document.querySelector(".barre");
let slider = document.querySelector(".slider");

let isRunning = 0;

document.querySelector("#kilt").addEventListener("click", function () {
    this.style.transition = "1s";
    this.style.transform = "translateY(500%)";
})

// Gestion difficulté

document.querySelector("#d1").addEventListener("click", facile);

function facile() {
    document.querySelector("#lancerTronc").classList.add("cliquable");

    document.querySelector("#film").style.display = "none";

    barre.style.animationPlayState = "running";
    barre.classList.add("barreAnim1");

    isRunning = 1;
}

document.querySelector("#d2").addEventListener("click", moyen);

function moyen() {
    document.querySelector("#lancerTronc").classList.add("cliquable");
    
    document.querySelector("#film").style.display = "none";
    
    barre.style.animationPlayState = "running";
    barre.classList.add("barreAnim2");

    isRunning = 1;
}

document.querySelector("#d3").addEventListener("click", difficile);

function difficile() {
    document.querySelector("#lancerTronc").classList.add("cliquable");
    
    document.querySelector("#film").style.display = "none";
    
    barre.style.animationPlayState = "running";
    barre.classList.add("barreAnim3");

    isRunning = 1;
}

// Stopper le curseur et calcul victoire / défaite

document.querySelector("#lancerTronc").addEventListener("click", stopAnimation);

function stopAnimation() {
    barre.style.animationPlayState = "paused";

    barre.offsetHeight;
    setTimeout(function () {
        let tailleSlider = slider.offsetHeight;
        tailleSlider = tailleSlider - 4;

        let hauteur = window.getComputedStyle(barre).top;
        hauteur = parseInt(hauteur);

        let pourCent = 100 * hauteur / tailleSlider;

        console.log(pourCent);

        if (pourCent < 56 && pourCent > 42) {
            victoire();
            boutonRecommencer();
        } else {
            defaite();
            boutonRecommencer();
        }
    }, 20)
}

// Gestion victoire / défaite

let vic = document.querySelector("#vic");
let def = document.querySelector("#def");

function victoire() {
    console.log("Victoire !");

    document.querySelector("#cadre").classList.add("victoire");


    setTimeout(function () {
        if (isRunning == 1) {
            vic.classList.add("visible");
        }
    }, 1000)
}

function defaite() {
    console.log("Défaite...")

    document.querySelector("#cadre").classList.add("defaite");

    setTimeout(function () {
        if (isRunning == 1) {
            def.classList.add("visible");
        }
    }, 1200)
}

function boutonRecommencer() {
    document.querySelector("#lancerTronc").style.display = "none";
    document.querySelector("#recommencer").style.display = "block";
}

// RELANCER

document.querySelector("#recommencer").addEventListener("click", reinit);

function reinit() {
    isRunning = 0;

    document.querySelector("#lancerTronc").style.display = "block";
    document.querySelector("#recommencer").style.display = "none";

    barre.classList.remove("barreAnim1");
    barre.classList.remove("barreAnim2");
    barre.classList.remove("barreAnim3");
    barre.style.animationPlayState = "paused";

    document.querySelector("#film").style.display = "block";

    document.querySelector("#cadre").classList.remove("defaite");
    document.querySelector("#cadre").classList.remove("victoire");

    document.querySelector("#vic").classList.remove("visible");
    document.querySelector("#def").classList.remove("visible");

    document.querySelector("#lancerTronc").classList.remove("cliquable");
}