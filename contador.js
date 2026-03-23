// Fecha calculada para que hoy 23/03/2026 marque 1093 días
const fechaInicio = new Date('2023-03-25T02:00:39');

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    const hDisplay = horas < 10 ? '0' + horas : horas;
    const mDisplay = minutos < 10 ? '0' + minutos : minutos;
    const sDisplay = segundos < 10 ? '0' + segundos : segundos;

    const elemento = document.getElementById('contador-tiempo');
    if (elemento) {
        elemento.style.color = "white"; // Para que se vea sobre el fondo oscuro
        elemento.innerHTML = `${dias} días con ${hDisplay}:${mDisplay}:${sDisplay}`;
    }
}

// Ejecutar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();