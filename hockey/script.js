let palet = document.querySelector("#palet");

document.querySelector("#tirer").addEventListener("click", tir)

let canShoot = 1;
let goalNumber = 0;

let best = 0;

function tir() {
    if (canShoot == 1) {
        canShoot = 0;

        document.querySelector("#divPalet").style.animationPlayState = "paused";
        document.querySelector("#fleche").style.animationPlayState = "paused";

        // Calcul matrice / angle

        let matrice = window.getComputedStyle(document.querySelector("#divPalet")).transform;

        var valeurs = matrice.split('(')[1],
            valeurs = valeurs.split(')')[0],
            valeurs = valeurs.split(',');
        var sin = valeurs[1];

        let angle = Math.asin(sin) * (180 / Math.PI);
        console.log(angle);

        // Comptage des points 

        if (angle > -7 && angle < 7) {
            setTimeout(but, 250);
            goalNumber++;
        } else {
            setTimeout(manque, 250);
            goalNumber = 0;
        }

        function but() {
            console.log("But !");
            document.querySelector("#cadre").classList.add("cadre2");
            document.querySelector("#chiffre").innerText = goalNumber;

            if (goalNumber > best) {
                document.querySelector(".best").innerText = "Meilleur score : " + goalNumber;
                best = goalNumber;
            } 

            setTimeout(function () {
                document.querySelector("#cadre").classList.remove("cadre2");
            }, 200)
        }

        function manque() {
            console.log("But !");
            document.querySelector("#chiffre").innerText = goalNumber;
        }

        // Gestion des palets

        document.querySelector("#FP1").classList.remove("FP2");

        palet.classList.add("paletTire");

        setTimeout(function () {
            document.querySelector("#FP1").classList.add("FP2");
        }, 200);

        setTimeout(function () {
            palet.classList.remove("paletTire");

            document.querySelector("#divPalet").style.animationPlayState = "running";
            document.querySelector("#fleche").style.animationPlayState = "running";

            setTimeout(function () {
                canShoot = 1;
            }, 80)
        }, 400)
    }
}