init();

function init() {
    const container = document.querySelector(".container");
    //genero più riquadri
    console.log(container);

    for (let i = 0; i < 100; i++) {
        generaRiquadro(container, i);
    }
}

/* Genera un riquadro */

function generaRiquadro(target, i) {
    const box = document.createElement("div");
    box.className = "riquadro";
    target.append(box);
    box.addEventListener("click", function() {
        this.classList.toggle("blu");
    });

    box.innerHTML = i + 1;
}

/*Genera un numero casuale*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (min - max + 1) + min);
}