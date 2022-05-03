window.onload = createPixels()

function createPixels() {
    createSelection()
    let pixel = document.querySelector('#pixel-board');
    for (let index = 0; index < 25; index += 1 ) {
        let pixelCrianca = document.createElement('button');
        pixelCrianca.className = 'pixel';
        pixel.appendChild(pixelCrianca);
    }
    

}
function createSelection() {
    let colorSelected = document.createElement('div');
    colorSelected.className = 'selected';
    colorSelected.style.backgroundColor = 'black';
}