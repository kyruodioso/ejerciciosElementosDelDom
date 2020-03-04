const contenedor = document.getElementById("contenedor");

const pregunta = confirm("quieres crear un elemento?");

if (pregunta) {
  const crearElemento = prompt("que elemento quieres crear?");
  elemento = document.createElement(crearElemento);
  const crearContenidoDeElemento = prompt("que contenido vas a agregar?");
  elemento.innerText = crearContenidoDeElemento;
  const crearAtributoDelElemento = prompt(
    "que atributo querés agregarle a tu elemento?"
  );
  const valorDelAtributo = prompt("cual será el valor del atributo?");
  elemento.setAttribute(crearAtributoDelElemento, valorDelAtributo);
  const colorDeFondo = prompt("De que color va a ser el fondo de tu elemento?");
  elemento.style.background = colorDeFondo;
  contenedor.appendChild(elemento);
} else {
  console.log("No aceptaste");
}
