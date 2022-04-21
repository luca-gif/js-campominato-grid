const container = document.querySelector(".container");
init();

document.getElementById("btn").addEventListener("click", function() {
    container.classList.toggle("dflex");
});

function init() {
    //genero più riquadri

    for (let i = 0; i < 100; i++) {
        generaRiquadro(container, i);
    }
}

/* Genera un riquadro */

function generaRiquadro(target, i) {
    const box = document.createElement("div");
    box.className = "riquadro riquadro100";
    target.append(box);
    box.addEventListener("click", function() {
        this.classList.toggle("blu");
    });

    box.innerHTML = i + 1;

    /* Cambio livelli difficoltà */

    document.querySelector("#difficult").addEventListener("click", function() {
        if (document.querySelector("#difficult").value == "hard") {
            box.classList.add("riquadro49");
        } else if (document.querySelector("#difficult").value == "medium") {
            box.classList.add("riquadro81");
        }
    });
}

/*Genera un numero casuale*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (min - max + 1) + min);
}