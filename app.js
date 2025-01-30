// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarALista(amigoNombre) {
    let listAmigos = document.querySelector('#listaAmigos');
    let amigo = document.createElement('li');
    amigo.textContent = amigoNombre;
    listAmigos.appendChild(amigo);
}

function limpiar() {
    let amigo = document.querySelector('#amigo');
    amigo.value = '';
}
function limpiarListaMostrada() {
    let listAmigos = document.querySelector('#listaAmigos');
    listAmigos.replaceChildren();
}

function mostrarAmigo(amigosorteo) {
    let resultado = document.querySelector('#resultado');
    let amigosecreto = document.createElement('li');
    amigosecreto.textContent = "Tú amigo secreto es : " + amigosorteo;
    resultado.appendChild(amigosecreto);
}
function limpiarAmigoSecreto() {
    let resultado = document.querySelector('#resultado');
    resultado.replaceChildren();
}

//agregar amigo en lista para el sorte y en lista para mostrar en la interfaz
function agregarAmigo() {
    let amigo = document.querySelector('#amigo').value;

    if (amigo == '' || amigo.length < 3) {
        alert('Por favor, Agregar un nombre válido.!');

    } else {
        agregarALista(amigo);
        listaAmigos.push(amigo);
        limpiar();
    }
}

//Sorteo del amigo secreto 
function sortearAmigo() {
    if (listaAmigos.length <= 1) {
        alert('Debes por lo menos agregar Dos nombres de tus amigos.!');
    } else {
        limpiarAmigoSecreto();
        let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        limpiarListaMostrada();
        mostrarAmigo(amigoSecreto);
    }

}