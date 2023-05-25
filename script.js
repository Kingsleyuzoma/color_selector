const GenerateBtn = document.getElementById('generate-btn');
const RGBBtn = document.getElementById('copy-RGB');
const ResetBtn = document.getElementById('resetBtn');
const Colourbox = document.getElementById('color-box');
const colorCode = document.getElementById('colorCode');
const copycolor = document.getElementById('copy-btn')

GenerateBtn.addEventListener('click', generate);


    function generate(){
        const hexChars = '0123456789ABCDEF';
        let hexColour = '#'

        for(i = 0; i < 6; i++){
            hexColour += hexChars[Math.floor(Math.random() * 16)];
            //console.log(i);
        }

        console.log(hexColour);
        Colourbox.style.backgroundColor = hexColour;
         
        const colourText = Colourbox.style.background;
        colorCode.innerHTML = hexColour
    
    }

RGBBtn.addEventListener('click', copyRGB);

function copyRGB(){
    const colourText = Colourbox.style.backgroundColor;
    const templeinpute = document.createElement('input');
    document.body.appendChild(templeinpute);
    templeinpute.value = colourText;
    templeinpute.select();
    document.execCommand('copy');
    document.body.removeChild(templeinpute)
    alert('colour copied to clipboard'  + colourText);

}

ResetBtn.addEventListener('click', Reset);
function Reset () {
    const colourText = Colourbox.style.backgroundColor = '';
    // console.log('hexColour')
}


copy-btn.addEventListener('click', copyColor );

//COPY TO HEX

function copyColor(){
    const colourText = Colourbox.style.backgroundColor;
    const hexCode = rgbToHex(colourText)
    const templeinpute = document.createElement('input');
    document.body.appendChild(templeinpute);
    templeinpute.value = colourText;
    templeinpute.select();
    document.execCommand('copy');
    document.body.removeChild(templeinpute)
    alert('colour copied to clipboard' + colourText); 
}

//RGB TO HEX

function rgbToHex (rgbColor){
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const matches = regex . exec (rgbColor);
    const r = parseInt(matches[1]);
    const g = parseInt(matches[2]);
    const b = parseInt(matches[3]);
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.lenght == 1 ? "0" + hex : hex;
}
