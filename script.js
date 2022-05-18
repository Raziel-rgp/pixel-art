const paletaList = document.querySelector('#color-palette')
for(let index = 0; index < 4; index++){
    let paletaCrianca = document.createElement('li');
    paletaCrianca.className = 'color';

    paletaList.appendChild(paletaCrianca);
}

window.onload = iniciar()
function iniciar() {
    const selectedPaint = 'rgb(0, 0, 0)'
    createPixels();
}
const blocoCor = document.getElementsByClassName('color')
function createPixels() {
    const pixel = document.querySelector('#pixel-board');
    for (let index = 0; index < 25; index += 1 ) {
        pixelCrianca = document.createElement('li');
        pixelCrianca.className = 'pixel';
        pixel.appendChild(pixelCrianca);
    }
    crearCor();
}
function crearCor() {
    let blocoCor = document.getElementsByClassName('color');
    for(let index = 0; index < blocoCor.length; index += 1){
        const corAle = [];
        const corgb = 3;
        for (let rgbIndex = 0; rgbIndex < corgb; rgbIndex += 1 ){
            corAle.push(Math.floor(Math.random() * 254))
        }
        blocoCor[index].style.backgroundColor = `rgb(${corAle})`;
    }
    blocoCor[0].style.backgroundColor = 'rgb(0 , 0 , 0)';
    blocoCor[0].classList.add('selected')
}
function pintandoPixel () {
    let selectedPixel = document.querySelector('.selected')
    let pixelWhite = document.querySelectorAll('.pixel')
    for(let index = 0; index < pixelWhite.length; index ++){
        pixelWhite[index].addEventListener('click', () => {
            
            selectedPixel.classList.remove('selected')
            pixelWhite[index].className = 'pixel selected'
            pixelWhite[index].style.backgroundColor = selectedPaint

        })
    }
    
}
function select () {
    let listaDaPaleta = document.querySelectorAll('.color');
    for(let index = 0; index < listaDaPaleta.length; index++) {
        listaDaPaleta[index].addEventListener('click', () => {
            const colorSelect = document.querySelector('.selected');
            colorSelect.classList.remove('selected');
            listaDaPaleta[index].className = 'color selected';
            selectedPaint = listaDaPaleta[index].style.backgroundColor
        }) //Elias me ajudou
    }
}
select()
pintandoPixel()

