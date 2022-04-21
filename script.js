init();

document.addEventListener.querySelector;

function init() {
    const container = document.querySelector(".container");
    //genero i quadratini
    console.log(container);

    for (let i = 0; i < 100; i++) {
        generaRiquadro(container);
    }
}

/* Genera un riquadro */

function generaRiquadro(target) {
    const box = document.createElement("div");
    box.className = "riquadro";
    target.append(box);
}

/*Genera un numero casuale*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (min - max + 1) + min);
}