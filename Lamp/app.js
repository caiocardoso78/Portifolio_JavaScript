const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lampada');


function lampon() {
    if (!islampBroken()){
    lampada.src = "./pictures/lampada_ligada.jpg";
    }
}

function lampoff() {
    if (!islampBroken()){
    lampada.src = "./pictures/lampada_desligada.jpg";
}
}

function lampBroken(){
    lampada.src = "./pictures/lampada_quebrada.jpg";
}

function islampBroken(){
    return lampada.src.indexOf('quebrada') > -1
}

turnOn.addEventListener('click', lampon);
turnOff.addEventListener('click', lampoff);
lampada.addEventListener('mouseover', lampon);
lampada.addEventListener('mouseleave', lampoff);
lampada.addEventListener('dblclick', lampBroken);


