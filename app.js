document.body.addEventListener('click', function playGlobal() {
    const musica = document.getElementById("MusicaFondo");
    if (musica && musica.paused) {
        musica.play().catch(e => console.log("Esperando interacción para audio..."));
        musica.volume = 0.5;
    }
    document.body.removeEventListener('click', playGlobal);
});

function irAlMensaje() {
    const musica = document.getElementById("MusicaFondo");
    if (musica) { musica.play(); musica.volume = 0.5; }
    
    document.getElementById("SeccionInicio").style.display = "none";
    document.getElementById("resultado").style.display = "block";
}

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.getElementById("SeccionPrincipal").style.display = "block";
    iniciarContador();
});

function iniciarContador() {
    document.getElementById("contador-tiempo").innerHTML = "1094 Días, 5 Horas, 20 Minutos";
}

const canvas = document.getElementById('Flor');
const ctx = canvas.getContext('2d');

document.getElementById("B1").addEventListener('click', () => {
    document.querySelector(".Con").style.display = "none";
    document.getElementById("Titulo").style.display = "none";
    document.getElementById("SeccionTexto").style.display = "block";
    DibujarFlor(400, 150, 6, 35, 200);
    setTimeout(iniciarFlotante1, 2000);
});

document.getElementById("B12").addEventListener('click', () => {
    document.querySelector(".Con").style.display = "none";
    document.getElementById("Titulo").style.display = "none";
    document.getElementById("SeccionTexto").style.display = "block";
    CrearVarias();
    setTimeout(iniciarFlotante1, 2000);
});

let intervaloLoco1;
function iniciarFlotante1() {
    const btnLoco1 = document.getElementById("BotonLoco1");
    if (btnLoco1) {
        btnLoco1.style.left = (window.innerWidth / 2 - 150) + "px";
        btnLoco1.style.top = (window.innerHeight / 2) + "px";
        btnLoco1.style.display = "block";
        
        void btnLoco1.offsetWidth; 
        
        btnLoco1.style.opacity = "1"; 
        moverBotonRandom(btnLoco1);
        intervaloLoco1 = setInterval(() => moverBotonRandom(btnLoco1), 8000); 
    }
}

function irAPaginaFinal() {
    clearInterval(intervaloLoco1);
    document.getElementById("BotonLoco1").style.display = "none";
    document.getElementById("SeccionPrincipal").style.display = "none";
    document.getElementById("PaginaFinal").style.display = "flex";
}

function mostrarPreguntaAmor() {
    irAPaginaFinal();
    document.getElementById("PreguntaAmorContainer").style.display = "flex";
    setTimeout(iniciarFlotante2, 2000); 
}

let intervaloLoco2;
function iniciarFlotante2() {
    const btnLoco2 = document.getElementById("BotonLoco2");
    if (btnLoco2) {
        btnLoco2.style.left = (window.innerWidth / 2 - 150) + "px";
        btnLoco2.style.top = (window.innerHeight / 2) + "px";
        btnLoco2.style.display = "block";
        
        void btnLoco2.offsetWidth; 
        
        // El botón desvanece suavemente hacia arriba (opacity 1) e inicia movimiento
        btnLoco2.style.opacity = "1";
        moverBotonRandom(btnLoco2);
        intervaloLoco2 = setInterval(() => moverBotonRandom(btnLoco2), 10000);
    }
}

// EFECTO TIPO DE LETRA PARA EL POEMA DE TENOR
const poemaLineas = [
    "Nadie puede explicarlo",
    "Quizás sea como mirar el cielo a través de un espejo",
    "Me da vueltas la cabeza, pero no puedo apartar la vista",
    "Sinceramente, no sé qué estoy diciendo ahora"
];

function iniciarTipeoPoema() {
    const contenedor = document.getElementById("PoemaTipeo");
    contenedor.innerHTML = "";
    let lineaActual = 0;
    let charActual = 0;

    function tipear() {
        if (lineaActual < poemaLineas.length) {
            if (charActual === 0) {
                const p = document.createElement("p");
                p.id = "linea-" + lineaActual;
                contenedor.appendChild(p);
            }
            
            const pActual = document.getElementById("linea-" + lineaActual);
            pActual.innerHTML += poemaLineas[lineaActual].charAt(charActual);
            charActual++;

            if (charActual >= poemaLineas[lineaActual].length) {
                lineaActual++;
                charActual = 0;
                setTimeout(tipear, 500); 
            } else {
                setTimeout(tipear, 40); 
            }
        }
    }
    tipear();
}

function mostrarRespuestaFinal() {
    clearInterval(intervaloLoco2);
    document.getElementById("BotonLoco2").style.display = "none";
    document.getElementById("PreguntaAmorContainer").style.display = "none";
    
    // Muestra la tarjeta 3D de Tenor
    document.getElementById("SeccionSliderTenor").style.display = "flex";
    iniciarTipeoPoema();
}

function revelarNocheEstrellada() {
    // Oculta Tarjeta de Tenor
    document.getElementById("SeccionSliderTenor").style.display = "none";
    
    // Revela Noche Estrellada + Gato + Neón + Amor
    document.body.style.background = "linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f)";
    document.getElementById("StarryBackground").style.display = "block";
    document.getElementById("PantallaGatoAmor").style.display = "flex";
    document.getElementById("GifAmor").style.display = "block";
}

function moverBotonRandom(btn) {
    if (!btn) return;
    const anchoBoton = btn.offsetWidth;
    const altoBoton = btn.offsetHeight;
    const maxLeft = window.innerWidth - anchoBoton - 20;
    const maxTop = window.innerHeight - altoBoton - 20;
    const randomLeft = Math.max(10, Math.floor(Math.random() * maxLeft));
    const randomTop = Math.max(10, Math.floor(Math.random() * maxTop));
    btn.style.left = randomLeft + "px";
    btn.style.top = randomTop + "px";
}

function DibujarPetalo(x, y, rX, sc, rot, col) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(1, sc); ctx.beginPath();
    for (let i = 0; i <= 60; i++) {
        const a = (Math.PI / 60) * 2 * i; const r = Math.sin(a) * rX;
        ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.fillStyle = col; ctx.fill(); ctx.restore();
}

function DibujarFlor(x, y, n, r, alto) {
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + alto);
    ctx.lineWidth = 5; ctx.strokeStyle = 'green'; ctx.stroke();
    for (let i = 0; i < n; i++) DibujarPetalo(x, y, r, 2, (Math.PI * 2 / n) * i, 'yellow');
    ctx.beginPath(); ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fillStyle = '#5d4037'; ctx.fill();
}

function CrearVarias() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const col = 3; const fil = 4;
    const pX = canvas.width / (col + 1); const pY = canvas.height / (fil + 1);
    for (let i = 0; i < 12; i++) {
        const x = pX * ((i % col) + 1); const y = pY * (Math.floor(i / col) + 0.5);
        setTimeout(() => DibujarFlor(x, y, 8, 22, 65), i * 150);
    }
}