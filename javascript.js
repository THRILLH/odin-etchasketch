const sketchContainer = document.querySelector("#sketch-container");

function fillSquare() {
    let dynamicVars = {};
    for (let i = 1; i <= 9; i++) {
        dynamicVars[`pix${i}`] = document.createElement("div");
    }
        dynamicVars.pix1.classList.add("pixel");
        sketchContainer.appendChild(dynamicVars.pix1)
        dynamicVars.pix2.classList.add("pixel");
        sketchContainer.appendChild(dynamicVars.pix2)
        dynamicVars.pix3.classList.add("pixel");
        sketchContainer.appendChild(dynamicVars.pix3)
        dynamicVars.pix4.classList.add("pixel");
        sketchContainer.appendChild(dynamicVars.pix4)
        dynamicVars.pix5.classList.add("pixel");
        sketchContainer.appendChild(dynamicVars.pix5)
        dynamicVars.pix6.classList.add("pixel");
        sketchContainer.appendChild(dynamicVars.pix6)
        dynamicVars.pix7.classList.add("pixel");
        sketchContainer.appendChild(dynamicVars.pix7)
        dynamicVars.pix8.classList.add("pixel");
        sketchContainer.appendChild(dynamicVars.pix8)
        dynamicVars.pix9.classList.add("pixel");
        sketchContainer.appendChild(dynamicVars.pix9)
    }

fillSquare();




// [i].classList.add("pixel");
// sketchContainer.appendChild([i]);
