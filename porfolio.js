let pagina = 0;
const totalPaginas = 4;
const textoPagina = document.getElementById('pagina');

function actualizarTexto() {
    textoPagina.value = pagina;
}

function casos() {
    switch (pagina) {
        case 0:
            /* Naegador */
            /* Naegador Portada*/
            document.getElementById('portada').style.zIndex = '2';
            document.getElementById('portada').style.left = '';
            /* Naegador indice*/
            document.getElementById('marcadorpresentacion').style.display = 'flex';
            document.getElementById('marcadorpresentacion').style.zIndex = '0';
            document.getElementById('marcadorpresentacion').style.left = '';
            document.getElementById('marcadorpresentacion').style.transition = '';
            document.getElementById('marcadorpresentacion').style.transformOrigin = "";
            /* Naegador proyectos*/
            document.getElementById('marcadorproyectos').style.display = 'flex';
            document.getElementById('marcadorproyectos').style.zIndex = '0';
            document.getElementById('marcadorproyectos').style.left = '';
            document.getElementById('marcadorproyectos').style.transition = '';
            document.getElementById('marcadorproyectos').style.transformOrigin = "";
            /* Naegador proyecto1*/
            document.getElementById('marcadorproyecto1').style.display = 'flex';
            document.getElementById('marcadorproyecto1').style.zIndex = '0';
            document.getElementById('marcadorproyecto1').style.left = '';
            document.getElementById('marcadorproyecto1').style.transition = '';
            document.getElementById('marcadorproyecto1').style.transformOrigin = '';
            /* Naegador proyecto2*/
            document.getElementById('marcadorproyecto2').style.display = 'flex';
            document.getElementById('marcadorproyecto2').style.zIndex = '0';
            document.getElementById('marcadorproyecto2').style.left = '';
            document.getElementById('marcadorproyecto2').style.transition = '';
            document.getElementById('marcadorproyecto2').style.transformOrigin = '';
            /* Navegador Biblioteca */
            document.getElementById('navbiblio').style.left = '';
            document.getElementById('navbiblio').style.transformOrigin = '';
            /* Navegador Contraportada */
            document.getElementById('marcadorcontraportada').style.display = 'flex';
            document.getElementById('marcadorcontraportada').style.zIndex = '0';
            document.getElementById('marcadorcontraportada').style.left = "";
            document.getElementById('marcadorcontraportada').style.transition = "";
            document.getElementById('marcadorcontraportada').style.transformOrigin = "";
            /* CARAS */
            document.getElementsByClassName('portada')[0].style.display = 'flex';
            document.getElementsByClassName('folio')[0].style.display = 'none';
            document.getElementsByClassName('Presentacion')[0].style.display = 'none';
            document.getElementsByClassName('proyecto1')[0].style.display = 'none';
            document.getElementsByClassName('proyecto2')[0].style.display = 'none';
            document.getElementsByClassName('contraportada')[0].style.display = 'none';
            /*Anillas*/

            document.getElementById('espiral-contenedor').style.left = '';
            document.getElementById('espiral-contenedor').style.transform = '';
            break;
        case 1:
            /* Naegador */
            /* Naegador Portada*/
            document.getElementById('portada').style.zIndex = '0';
            document.getElementById('portada').style.left = '9em';
            /* Naegador indice*/
            document.getElementById('marcadorpresentacion').style.zIndex = '2';
            document.getElementById('marcadorpresentacion').style.display = 'flex';
            document.getElementById('marcadorpresentacion').style.left = '58em';
            document.getElementById('marcadorpresentacion').style.transition = 'none';
            document.getElementById('marcadorpresentacion').style.transformOrigin = "";
            /* Naegador proyectos*/
            document.getElementById('marcadorproyectos').style.display = 'flex';
            document.getElementById('marcadorproyectos').style.zIndex = '0';
            document.getElementById('marcadorproyectos').style.left = '29em';
            document.getElementById('marcadorproyectos').style.transition = '';
            document.getElementById('marcadorproyectos').style.transformOrigin = "";
            /* Naegador proyecto1*/
            document.getElementById('marcadorproyecto1').style.display = 'flex';
            document.getElementById('marcadorproyecto1').style.zIndex = '0';
            document.getElementById('marcadorproyecto1').style.left = '29em';
            document.getElementById('marcadorproyecto1').style.transition = '';
            document.getElementById('marcadorproyecto1').style.transformOrigin = '';
            /* Naegador proyecto2*/
            document.getElementById('marcadorproyecto2').style.display = 'flex';
            document.getElementById('marcadorproyecto2').style.zIndex = '0';
            document.getElementById('marcadorproyecto2').style.left = '29em';
            document.getElementById('marcadorproyecto2').style.transition = '';
            document.getElementById('marcadorproyecto2').style.transformOrigin = '';
            /* Navegador Biblioteca */
            document.getElementById('navbiblio').style.left = '';
            document.getElementById('navbiblio').style.transformOrigin = '';
            /* Navegador Contraportada */
            document.getElementById('marcadorcontraportada').style.display = 'flex';
            document.getElementById('marcadorcontraportada').style.zIndex = '0';
            document.getElementById('marcadorcontraportada').style.left = "58em";
            document.getElementById('marcadorcontraportada').style.transition = "";
            document.getElementById('marcadorcontraportada').style.transformOrigin = "";
            /* CARAS */
            document.getElementsByClassName('portada')[0].style.display = 'none';
            document.getElementsByClassName('folio')[0].style.display = 'flex';
            document.getElementsByClassName('Presentacion')[0].style.display = 'flex';
            document.getElementsByClassName('proyecto1')[0].style.display = 'none';
            document.getElementsByClassName('proyecto2')[0].style.display = 'none';
            document.getElementsByClassName('contraportada')[0].style.display = 'none';
            /*Anillas*/

            document.getElementById('espiral-contenedor').style.left = '';
            document.getElementById('espiral-contenedor').style.transform = '';
            break;
        case 2:
            /* Naegador */
            /* Naegador Portada*/
            document.getElementById('portada').style.zIndex = '0';
            document.getElementById('portada').style.left = '9em';
            /* Naegador indice*/
            document.getElementById('marcadorpresentacion').style.display = 'none';
            /* Naegador proyectos*/
            document.getElementById('marcadorproyectos').style.display = 'none';
            /* Naegador proyecto1*/
            document.getElementById('marcadorproyecto1').style.display = 'flex';
            document.getElementById('marcadorproyecto1').style.zIndex = '2';
            document.getElementById('marcadorproyecto1').style.left = '';
            document.getElementById('marcadorproyecto1').style.transition = 'none';
            document.getElementById('marcadorproyecto1').style.transformOrigin = '';
            /* Naegador proyecto2*/
            document.getElementById('marcadorproyecto2').style.display = 'flex';
            document.getElementById('marcadorproyecto2').style.zIndex = '0';
            document.getElementById('marcadorproyecto2').style.left = '';
            document.getElementById('marcadorproyecto2').style.transformOrigin = '';
            /* Navegador Biblioteca */
            document.getElementById('navbiblio').style.left = '';
            document.getElementById('navbiblio').style.transformOrigin = '';
            /* Navegador Contraportada */
            document.getElementById('marcadorcontraportada').style.display = 'flex';
            document.getElementById('marcadorcontraportada').style.zIndex = '0';
            document.getElementById('marcadorcontraportada').style.left = "58em";
            document.getElementById('marcadorcontraportada').style.transition = "";
            document.getElementById('marcadorcontraportada').style.transformOrigin = "";

            /* CARAS */
            document.getElementsByClassName('portada')[0].style.display = 'none';
            document.getElementsByClassName('folio')[0].style.display = 'flex';
            document.getElementsByClassName('Presentacion')[0].style.display = 'none';
            document.getElementsByClassName('proyecto1')[0].style.display = 'flex';
            document.getElementsByClassName('proyecto2')[0].style.display = 'none';
            document.getElementsByClassName('contraportada')[0].style.display = 'none';
            /*Anillas*/
            document.getElementById('espiral-contenedor').style.left = '';
            document.getElementById('espiral-contenedor').style.transform = '';
            break;
        case 3:
            /* Naegador */
            /* Naegador Portada*/
            document.getElementById('portada').style.zIndex = '0';
            document.getElementById('portada').style.left = '';
            /* Naegador indice*/
            document.getElementById('marcadorpresentacion').style.display = 'none';
            /* Naegador proyectos*/
            document.getElementById('marcadorproyectos').style.display = 'none';
            /* Naegador proyecto1*/
            document.getElementById('marcadorproyecto1').style.display = 'none';
            /* Naegador proyecto2*/
            document.getElementById('marcadorproyecto2').style.display = 'flex';
            document.getElementById('marcadorproyecto2').style.zIndex = '2';
            document.getElementById('marcadorproyecto2').style.left = '';
            document.getElementById('marcadorproyecto2').style.transition = 'none';
            document.getElementById('marcadorproyecto2').style.transformOrigin = "";
            /* Navegador Biblioteca */
            document.getElementById('navbiblio').style.left = '';
            document.getElementById('navbiblio').style.transformOrigin = '';
            /* Navegador Contraportada */
            document.getElementById('marcadorcontraportada').style.display = 'flex';
            document.getElementById('marcadorcontraportada').style.zIndex = '0';
            document.getElementById('marcadorcontraportada').style.left = "";
            document.getElementById('marcadorcontraportada').style.transition = "";
            document.getElementById('marcadorcontraportada').style.transformOrigin = "";

            /* CARAS */
            document.getElementsByClassName('portada')[0].style.display = 'none';
            document.getElementsByClassName('folio')[0].style.display = 'flex';
            document.getElementsByClassName('Presentacion')[0].style.display = 'none';
            document.getElementsByClassName('proyecto1')[0].style.display = 'none';
            document.getElementsByClassName('proyecto2')[0].style.display = 'flex';
            document.getElementsByClassName('contraportada')[0].style.display = 'none';
            /*Anillas*/
            document.getElementById('espiral-contenedor').style.left = '';
            document.getElementById('espiral-contenedor').style.transform = '';
            break;
        case 4:
            /* Naegador Portada*/
            document.getElementById('portada').style.zIndex = '2';
            document.getElementById('portada').style.left = '52em';
            /* Naegador indice*/
            document.getElementById('marcadorpresentacion').style.display = 'flex';
            document.getElementById('marcadorpresentacion').style.zIndex = '0';
            document.getElementById('marcadorpresentacion').style.left = '2em';
            document.getElementById('marcadorpresentacion').style.transformOrigin = "right";
            /* Naegador proyectos*/
            document.getElementById('marcadorproyectos').style.display = 'flex';
            document.getElementById('marcadorproyectos').style.zIndex = '0';
            document.getElementById('marcadorproyectos').style.left = '1em';
            document.getElementById('marcadorproyectos').style.transformOrigin = "right";
            /* Naegador proyecto1*/
            document.getElementById('marcadorproyecto1').style.display = 'flex';
            document.getElementById('marcadorproyecto1').style.zIndex = '0';
            document.getElementById('marcadorproyecto1').style.left = '3em';
            document.getElementById('marcadorproyecto1').style.transformOrigin = "right";
            /* Naegador proyecto2*/
            document.getElementById('marcadorproyecto2').style.display = 'flex';
            document.getElementById('marcadorproyecto2').style.zIndex = '0';
            document.getElementById('marcadorproyecto2').style.left = '3em';
            document.getElementById('marcadorproyecto2').style.transformOrigin = "right";
            /* Navegador Biblioteca */
            document.getElementById('navbiblio').style.left = '3em';
            document.getElementById('navbiblio').style.transformOrigin = 'right';
            /* Navegador Contraportada */
            document.getElementById('marcadorcontraportada').style.zIndex = "2";
            document.getElementById('marcadorcontraportada').style.left = "2em";
            document.getElementById('marcadorcontraportada').style.transition = "none";
            document.getElementById('marcadorcontraportada').style.transformOrigin = "right";
            /* CARAS */
            document.getElementsByClassName('portada')[0].style.display = 'none';
            document.getElementsByClassName('folio')[0].style.display = 'none';
            document.getElementsByClassName('Presentacion')[0].style.display = 'none';
            document.getElementsByClassName('proyecto1')[0].style.display = 'none';
            document.getElementsByClassName('proyecto2')[0].style.display = 'none';
            document.getElementsByClassName('contraportada')[0].style.display = 'flex';
            /*Anillas */
            /* AJUSTE DEL GUSANILLO PARA CONTRAPORTADA */
            document.getElementById('espiral-contenedor').style.transform = 'scaleX(-1)';
            document.getElementById('espiral-contenedor').style.left = '31.5em';
            break;

            break;
        default:
            break;
    }
}

document.getElementById('btn-prev').addEventListener('click', function () {
    if (pagina > 0) {
        pagina--;
        actualizarTexto();
        casos();
    }
});

document.getElementById('btn-next').addEventListener('click', function () {
    if (pagina < totalPaginas) {
        pagina++;
        actualizarTexto();
        casos();
    }
});

function saltarAPagina() {
    let numeroPaginaIngresado = parseInt(textoPagina.value);

    if (isNaN(numeroPaginaIngresado) ||
        numeroPaginaIngresado < 0 ||
        numeroPaginaIngresado > totalPaginas) {

        actualizarTexto();
        return;
    }

    let nuevoIndice = numeroPaginaIngresado;

    if (nuevoIndice !== pagina) {
        pagina = nuevoIndice;
        casos();
    }
}
function irAPagina(event, numeroPagina) {
    if (event) event.preventDefault();
    // 1. Actualizamos la variable global 'pagina' que ya tienes definida
    pagina = numeroPagina;

    // 2. Actualizamos el input del número de página (si lo tienes)
    if (document.getElementById('pagina')) {
        document.getElementById('pagina').value = pagina;
    }

    // 3. Ejecutamos tu función maestra para que cambie los display, z-index, etc.
    casos();
}
function crearAnillas(idContenedor, cantidad = 15) {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return; // Seguridad por si el ID no existe

    // Limpiamos contenido previo
    contenedor.innerHTML = '';

    // Generamos las anillas
    for (let i = 0; i < cantidad; i++) {
        let div = document.createElement('div');
        div.className = 'anilla';
        contenedor.appendChild(div);
    }
}

// AL CARGAR LA PÁGINA: Ejecutamos para todos los libros
window.onload = function () {
    crearAnillas('espiral-contenedor');  // Libro 1
    crearAnillas('espiral-contenedor2'); // Libro 2
    crearAnillas('espiral-contenedor3'); // Libro 3
};
document.addEventListener('DOMContentLoaded', function () { //DOmContentLoaded se carga al iniciar
    //Captura cada tecla tecleada 
    textoPagina.addEventListener('input', saltarAPagina);

    //Captura cuando el campo pierde el foco (blur/Tabulador)
    textoPagina.addEventListener('blur', saltarAPagina);
    crearAnillas();


});

const navMarcadores = document.querySelectorAll('.marcapaginas .marcador');

navMarcadores.forEach(marcador => {
    // 2. Añade un escuchador de clic a cada marcador
    marcador.addEventListener('click', function (e) {

        // 3. ¡LA CLAVE! Detener el comportamiento por defecto del navegador.
        // Si no haces esto, el navegador intentaría saltar a la ancla #Presentacion, etc.
        e.preventDefault();

        // 4. Lee el número de la página (el índice) desde el atributo data-index del HTML.
        // Ejemplo: lee '0', '1', '2', '3', o '4'.
        const indiceDestino = parseInt(this.getAttribute('data-index'));

        // 5. Validación y Lógica de Navegación
        // Si el índice es válido y es diferente a la página actual...
        if (!isNaN(indiceDestino) && indiceDestino >= 0 && indiceDestino <= totalPaginas) {
            if (pagina !== indiceDestino) {

                // 6. Relaciona el clic con tu sistema: Actualiza la variable global
                pagina = indiceDestino;

                // 7. Ejecuta tus funciones de actualización de vista
                actualizarTexto(); // Sincroniza el número del input
                casos();           // Muestra el contenido de la nueva página
            }
        }
    });
});
//Funcionamiento de abrir y cerrar modal.

document.querySelector('.marcador2').addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector('.proyectos-modal').style.display = 'block';
});

const botonesCierre = document.querySelectorAll('.cerrar-modal, .cerrar-modal-estanteria, #btn-close-sudoku');
const modalProyectos = document.querySelector('.proyectos-modal');
const appSudoku = document.getElementById('sudoku-app');

botonesCierre.forEach(boton => {
    boton.addEventListener('click', function () {
        // 1. Ocultar el modal principal
        modalProyectos.style.display = 'none';

        // 2. Ocultar el Sudoku (por si se quedó abierto)
        if (appSudoku) {
            appSudoku.style.display = 'none';
        }

        console.log("Modal de biblioteca cerrado.");
    });
});

// LA BIBLIOTECA (hotspot)
const hotspots = document.querySelectorAll('.hotspot');
const tooltip = document.getElementById('tooltip');

hotspots.forEach(spot => {
    // Entrar
    spot.addEventListener('mouseenter', () => {
        const texto = spot.getAttribute('data-texto');
        tooltip.innerText = texto;
        tooltip.style.display = 'block';
    });

    // Mover
    spot.addEventListener('mousemove', (e) => {
        // Ajuste para que el tooltip no parpadee ni tape el cursor
        const offset = 15;
        tooltip.style.left = (e.clientX + offset) + 'px';
        tooltip.style.top = (e.clientY + offset) + 'px';
    });

    // Salir
    spot.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});

// Zona interactiva

// --- Lógica de la Biblioteca Interactiva (SVG) ---
const tooltipSvg = document.getElementById('tooltip-svg');
const hotspotsSvg = document.querySelectorAll('.hotspot');

hotspotsSvg.forEach(spot => {
    spot.addEventListener('mouseenter', () => {
        tooltipSvg.innerText = spot.getAttribute('data-texto');
        tooltipSvg.style.display = 'block';
    });
    spot.addEventListener('mousemove', (e) => {
        tooltipSvg.style.left = (e.clientX + 15) + 'px';
        tooltipSvg.style.top = (e.clientY + 15) + 'px';
    });
    spot.addEventListener('mouseleave', () => tooltipSvg.style.display = 'none');

    // Navegación desde el SVG
    spot.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        if (target) {
            // Reutilizamos tu lógica de navegación por índices si es necesario
            // O cerramos el modal y saltamos
            document.querySelector('.proyectos-modal').style.display = 'none';
        }
    });
});

//Logica sodoku 

// Variable global para almacenar la solución correcta
let sudokuSolution = [];

// 1. Mostrar/Ocultar Sudoku
document.getElementById('spot-sudoku').addEventListener('click', () => {
    const app = document.getElementById('sudoku-app');
    app.style.display = 'block';
    generarNuevoSudoku();
});

// 2. Generar Juego con Lógica Real
function generarNuevoSudoku() {
    const grid = document.getElementById('sudoku-grid');
    const level = parseInt(document.getElementById('sudoku-level').value);
    grid.innerHTML = '';
    document.getElementById('sudoku-feedback').innerText = '';

    // Crear matriz vacía de 9x9
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));

    // Llenar la matriz con una solución válida usando recursividad
    solveSudoku(board);

    // Guardamos la solución plana (81 números) para validar fácilmente después
    sudokuSolution = board.flat();

    // Crear las celdas en el HTML
    for (let i = 0; i < 81; i++) {
        const row = Math.floor(i / 9);
        const col = i % 9;
        const valorCorrecto = board[row][col];

        const cell = document.createElement('div');
        cell.className = 'cell-s';

        // Decidir si mostrar el número (pistas) o dejarlo vacío (input)
        // level suele ser 40 (fácil), 60 (medio), 80 (difícil) en inputs de rango
        // Aquí invertimos la lógica: a mayor nivel, menos números visibles
        if (Math.random() * 100 > level) {
            cell.innerText = valorCorrecto;
            cell.classList.add('fixed');
        } else {
            cell.contentEditable = "true";
            cell.classList.add('input-user');

            // Validación de entrada: solo 1 número del 1 al 9
            cell.oninput = (e) => {
                const text = e.target.innerText;
                e.target.innerText = text.replace(/[^1-9]/g, '').slice(-1);
                e.target.classList.remove('error', 'success');

                // Mover el cursor al final del texto después de limpiar
                const range = document.createRange();
                const sel = window.getSelection();
                range.selectNodeContents(e.target);
                range.collapse(false);
                sel.removeAllRanges();
                sel.addRange(range);
            };
        }
        grid.appendChild(cell);
    }
}

// --- FUNCIONES LÓGICAS DEL SUDOKU ---

function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        // Revisa fila, columna y cuadrado 3x3
        if (board[row][i] === num || board[i][col] === num || board[m][n] === num) {
            return false;
        }
    }
    return true;
}

function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                // Números aleatorios del 1-9 para que cada juego sea distinto
                let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
                for (let num of nums) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) return true;
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// 3. Botón Corregir
document.getElementById('btn-check-sudoku').addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell-s');
    let fallos = 0;
    let vacios = 0;

    cells.forEach((cell, i) => {
        if (cell.classList.contains('input-user')) {
            const val = cell.innerText.trim();
            if (val === "") {
                vacios++;
                return;
            }
            if (parseInt(val) === sudokuSolution[i]) {
                cell.classList.add('success');
                cell.classList.remove('error');
            } else {
                cell.classList.add('error');
                cell.classList.remove('success');
                fallos++;
            }
        }
    });

    const feedback = document.getElementById('sudoku-feedback');
    if (vacios === 0 && fallos === 0) {
        feedback.innerText = "¡Felicidades! Sudoku completado.";
        feedback.style.color = "green";
    } else {
        feedback.innerText = fallos === 0 ? "Vas por buen camino..." : `Tienes ${fallos} error(es).`;
        feedback.style.color = fallos === 0 ? "blue" : "red";
    }
});

// 4. Botones de Control
document.getElementById('btn-new-sudoku').addEventListener('click', generarNuevoSudoku);

document.getElementById('btn-close-sudoku').addEventListener('click', () => {
    document.getElementById('sudoku-app').style.display = 'none';
});

document.getElementById('sudoku-level').addEventListener('change', generarNuevoSudoku);

// Formulario 
const formulario = document.getElementById('contacto-biblioteca');
const btnNuevoRegistro = document.getElementById('nuevo-registro');

if (formulario) {
    formulario.addEventListener('submit', async function (event) {
        event.preventDefault(); // Evita que la página se recargue

        const formData = new FormData(this);

        // Enviar los datos a Formspree
        const response = await fetch(this.action, {
            method: this.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('¡Registro enviado con éxito!');
            formulario.reset(); // Limpia los campos
        } else {
            alert('Hubo un error al enviar. Por favor, inténtelo de nuevo.');
        }
    });
}


/* mostrar libros proyectos */

document.getElementById('enlace-mostrar-libro2').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('libro2').style.display = 'block';
    document.querySelector('.proyectos-modal').style.display = 'none';
    document.getElementById('libro3').style.display = 'none';
});

document.getElementById('enlace-mostrar-libro3').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('libro2').style.display = 'none';
    document.querySelector('.proyectos-modal').style.display = 'none';
    document.getElementById('libro3').style.display = 'block';
});

document.getElementById('spot-proy2').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('libro2').style.display = 'none';
    document.querySelector('.proyectos-modal').style.display = 'none';
    document.getElementById('libro3').style.display = 'block';
});

document.getElementById('spot-proy1').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('libro2').style.display = 'block';
    document.querySelector('.proyectos-modal').style.display = 'none';
    document.getElementById('libro3').style.display = 'none';
});

/* Libro 2 */
let paginaL2 = 0;

function cambiarPaginaLibro2(event, n) {
    paginaL2 = n;
    // Si el evento existe, evitamos que el enlace (href) haga algo
    if (event) event.preventDefault();
    // Lista de elementos
    const portada2 = document.getElementById('portadapagina2');
    const indice2 = document.getElementById('folio2-indice');
    const detalle2 = document.getElementById('folio2-detalle');

    // Ocultar todos
    if (portada2) portada2.style.display = 'none';
    if (indice2) indice2.style.display = 'none';
    if (detalle2) detalle2.style.display = 'none';

    // Mostrar el activo
    switch (paginaL2) {
        case 0: if (portada2) portada2.style.display = 'flex'; break;
        case 1: if (indice2) indice2.style.display = 'block'; break;
        case 2: if (detalle2) detalle2.style.display = 'block'; break;
    }
}
/* Libro 3 */
let paginaL3 = 0;

function cambiarPaginaLibro3(event, n) {
    paginaL3 = n;
    // Si el evento existe, evitamos que el enlace (href) haga algo
    if (event) event.preventDefault();

    // 1. Lista de todos los elementos del Libro 3
    const portada3 = document.getElementById('portadapagina3');
    const indice3 = document.getElementById('folio3-indice');
    const detalle3 = document.getElementById('folio3-detalle');

    // 2. Ocultamos todos primero para resetear la vista
    if (portada3) portada3.style.display = 'none';
    if (indice3) indice3.style.display = 'none';
    if (detalle3) detalle3.style.display = 'none';

    // 3. Mostramos solo el que corresponde según el caso
    switch (paginaL3) {
        case 0: // Portada
            if (portada3) portada3.style.display = 'flex';
            break;
        case 1: // Índice
            if (indice3) indice3.style.display = 'block';
            break;
        case 2: // Detalle técnico
            if (detalle3) detalle3.style.display = 'block';
            break;
    }
    console.log("Libro 3 en página: " + n);
}
/* Navegación */
/* irAPagina(0,4); */
/* cambiarPaginaLibro2(0, 2) */
/* cambiarPaginaLibro3(0, 1) */

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-bienvenida');
    const btnEntrar = document.getElementById('btn-entrar-sitio');

    // Al pulsar el botón, ocultamos el modal
    if (btnEntrar && modal) {
        btnEntrar.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});

//Revision de href

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos los tres elementos por su nueva clase
    const enlacesInactivos = document.querySelectorAll('.enlace-inactivo');

    enlacesInactivos.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            // Evitamos cualquier acción por defecto del enlace
            event.preventDefault();

            // Mostramos el mensaje de alerta
            alert('Servicios no disponibles actualmente');
        });
    });
});