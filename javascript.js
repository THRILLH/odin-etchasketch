const sketchContainer = document.querySelector("#sketch-container");


function fillSquare(length) {
    let rowArray = [];
    for (let i = 0; i < length; i++) {
        rowArray[i] = document.createElement("div");
        rowArray[i].classList.add("pixel-row");
        sketchContainer.appendChild(rowArray[i]);

        let pixArray = [];
        for (let j = 0; j < length; j++) {
            pixArray[j] = document.createElement("div");
            pixArray[j].classList.add("pixel");
            rowArray[i].appendChild(pixArray[j]);
        }
    }
    }

fillSquare(16);

const pixels = document.querySelectorAll(".pixel");
pixels.forEach( (pixel) => {
    pixel.addEventListener("mouseover", () => {
        pixel.setAttribute("style", "background: white");
    });
    
}
);