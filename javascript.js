const sketchContainer = document.querySelector("#sketch-container");
// Change function so parameter is width and number of 
// pixels is width squared
function fillSquare(pixels) {
    let pixArray = [];
    for (let i = 0; i < pixels; i++) {
        pixArray[i] = document.createElement("div");
        pixArray[i].classList.add("pixel");
        sketchContainer.appendChild(pixArray[i]);
    }
    }

fillSquare(256);




// [i].classList.add("pixel");
// sketchContainer.appendChild([i]);
