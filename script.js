const paletaList = document.querySelector('#color-palette')
    for(let index = 0; index < 4; index++){
        let paletaCrianca = document.createElement('button');
        paletaCrianca.className = 'color';
        paletaList.appendChild(paletaCrianca);

    }
window.onload = createPixels();
const blocoCor = document.getElementsByClassName('color')
function createPixels() {
    const pixel = document.querySelector('#pixel-board');
    

    for (let index = 0; index < 25; index += 1 ) {
        
        pixelCrianca = document.createElement('button');
        pixelCrianca.className = 'pixel';
        pixel.appendChild(pixelCrianca);
    }
    crearCor();
    
}
function crearCor(){
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

let listaDaPaleta = document.querySelector('.color');
for(let index = 0; index < listaDaPaleta.length; index++){
    listaDaPaleta[index].addEventListener('click', select())
}
function select (){
    const listaDaPaleta = document.querySelector('.color');
    let selecao = document.querySelector('selected')
    console.log('Funfou')
    for(let index = 0; index < listaDaPaleta.length; index++){
        console.log('Funfou')
        listaDaPaleta[index].classList.add('selected')
        selecao = listaDaPaleta[index].style.backgroundColor;  
        for(let i = 0; i < listaDaPaleta.length; i++) {
            console.log('Funfou')
            if(listaDaPaleta[index] !== listaDaPaleta[i] && listaDaPaleta[i].classList.contains('selected')){
                listaDaPaleta[i].classList.remove('select');
            }
        }
    }
    console.log('Funfou')
}