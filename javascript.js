const sketchContainer = document.querySelector("#sketch-container");

function fillSquare(length) {
    let pixels = length ** 2;
    let pixArray = [];
    for (let i = 0; i < pixels; i++) {
        pixArray[i] = document.createElement("div");
        pixArray[i].classList.add("pixel");
        sketchContainer.appendChild(pixArray[i]);
    }
    }

fillSquare(8);
