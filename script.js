let valorContador = 0;
const elementoContador = document.getElementById('contador');

function incrementarContador() {
    valorContador++;
    elementoContador.textContent = valorContador;
    actualizarColorContador();
}

function decrementarContador() {
    valorContador--;
    elementoContador.textContent = valorContador;
    actualizarColorContador();
}

function actualizarColorContador() {
    if (valorContador === 10) {
        elementoContador.classList.add('color-especial');
    } else {
        elementoContador.classList.remove('color-especial');
    }
}