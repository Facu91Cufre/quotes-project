// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    frase:
      '"La libertad es, en sí, el primer bien, el primer derecho del hombre."',
    persona: "Simón Bolívar",
  },
  {
    frase: '"Prefiero morir de pie que vivir de rodillas."',
    persona: "Emiliano Zapata",
  },
  {
    frase:
      '"La patria es la lengua, la historia, la tradición, la lengua y la religión."',
    persona: "José Martí",
  },
  {
    frase:
      '"No soy un hombre de letras, soy un militar, pero hay cosas que la razón no puede aceptar."',
    persona: "José de San Martín",
  },
  {
    frase: '"La revolución no se hace, se organiza."',
    persona: "Augusto César Sandino",
  },
  {
    frase: '"La libertad no es un fin, es un medio para desarrollarnos."',
    persona: "Manuel Belgrano",
  },
  {
    frase:
      '"Cuando la patria está en peligro, todo está permitido, excepto no defenderla."',
    persona: "Joaquín Gallegos Lara",
  },
  {
    frase:
      '"Venceréis, porque tenéis sobrada fuerza bruta, pero no convenceréis. Para convencer hay que persuadir."',
    persona: "José Martí",
  },
  {
    frase: '"La suerte favorece a la mente preparada."',
    persona: "Louis Pasteur",
  },
  {
    frase: '"Trabajo y más trabajo es el único camino hacia la grandeza."',
    persona: "José de San Martín",
  },
  {
    frase: '"Más allá de las dificultades, está la gloria."',
    persona: "Simón Bolívar",
  },
  {
    frase:
      '"La gloria no consiste en no caer nunca, sino en levantarse cada vez que se cae."',
    persona: "Manuel Belgrano",
  },
  { frase: '"La patria es dicha, dolor y sacrificio."', persona: "Sarmiento" },
  {
    frase: '"El que manda debe oír aunque duela lo que no quiera."',
    persona: "Bolívar",
  },
  {
    frase: '"Prefiero ser el primero en una aldea que el segundo en Roma."',
    persona: "Julio César",
  },
  {
    frase: '"Un pueblo ignorante es instrumento ciego de su propia destrucción."',
    persona: "Sarmiento",
  },
  {
    frase: '"En la patria hay que hacer todo por el país y para el país."',
    persona: "San Martín",
  },
  {
    frase:
      '"La perseverancia es la virtud por la cual todas las otras virtudes dan su fruto."',
    persona: "Sarmiento",
  },
  { frase: '"Ser libres o morir."', persona: "Artigas" },
  { frase: '"La educación es la base de la libertad."', persona: "Bolívar" },
  {
    frase: '"El deber de un gobierno es hacer que el pueblo sea feliz."',
    persona: "Sarmiento",
  },
  {
    frase:
      '"La justicia es la reina de las virtudes republicanas y con ella se sostiene la igualdad y la libertad."',
    persona: "Bolívar",
  },
];

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].frase;
    person.innerText = quotes[random].persona;
});

