const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
intervalID = null;

const trafficLight = (event) => {
  stopAuto();
  turnOn[event.target.id]();
};
const nextIndex = () => {
  //usando ternário (não alinhar muito ternários)
  colorIndex = colorIndex < 2 ? ++colorIndex : 0;

  /*-- usando if
 if ( colorIndex < 2 ){
    colorIndex++
    }else{
        colorIndex = 0;
    }--*/
};

const stopAuto = () => {
  clearInterval(intervalID);
};

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const turnOn = {
  red: () => (img.src = "/pics/s_vermelho.jpg"),
  yellow: () => (img.src = "/pics/s_amarelo.jpg"),
  green: () => (img.src = "/pics/s_verde.jpg"),
  auto: () => (intervalID = setInterval(changeColor, 1000)),
};

buttons.addEventListener("click", trafficLight);
