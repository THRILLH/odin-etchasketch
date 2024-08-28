const sketchContainer = document.querySelector("#sketch-container");

function darkenPixels() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach( (pixel) => {
        pixel.removeEventListener("mouseover", blackPixelHandler);
        pixel.removeEventListener("mouseover", colorPixelHandler);
        pixel.removeEventListener("mouseover", darkenPixelHandler);
        pixel.addEventListener("mouseover", darkenPixelHandler);
    });
}

function darkenPixelHandler(event) {
    const pixel = event.target;
    if (!pixel.style.opacity) pixel.style.opacity = '1';
    let opacity = parseFloat(pixel.style.opacity);
    pixel.style.opacity = opacity - 0.2;
}

function blackPixels() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.removeEventListener("mouseover", darkenPixelHandler);
        pixel.removeEventListener("mouseover", colorPixelHandler);
        pixel.removeEventListener("mouseover", blackPixelHandler);
        pixel.addEventListener("mouseover", blackPixelHandler);
    });
}

function blackPixelHandler(event) {
    const pixel = event.target;
    pixel.style.background = 'black';
}

function colorPixels() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach( (pixel) => {
        pixel.removeEventListener("mouseover", blackPixelHandler);
        pixel.removeEventListener("mouseover", darkenPixelHandler);
        pixel.removeEventListener("mouseover", colorPixelHandler);
        pixel.addEventListener("mouseover", colorPixelHandler);
    });
}

function colorPixelHandler(event) {
    const pixel = event.target;
    pixel.style.background = "#" + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
}

function fillSquare(length) {
    sketchContainer.innerHTML = '';
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
    blackPixels();
    }
    
const slider = document.querySelector("#myRange");
let output = document.querySelector("#demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = slider.value;
    fillSquare(this.value);
}

fillSquare(slider.value);

const blackBtn = document.querySelector("#black-btn");
blackBtn.addEventListener("click", () => {
    blackPixels();
})

const colorBtn = document.querySelector("#color-btn");
colorBtn.addEventListener("click", () => {
    colorPixels();
})

const sketchBtn = document.querySelector("#sketch-btn");
sketchBtn.addEventListener("click", () => {
    darkenPixels();
})