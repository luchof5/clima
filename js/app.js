const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e) {
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        // Hubo un error
        mostrarError('Ambos campos son obligatorios');

        return;
    }

    // Consultariamos la API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta) {
        // Crear un alerta
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>    
        `;

        container.appendChild(alerta)

        // Se elemina esa alerta despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
    
    }
    
}

function consultarAPI(ciudad, pais) {
    
    const appId = '5839ef29d07b05249699a86711ea729c';

    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    fetch(url)
        .then(respusta => respusta.json())
        .then(datos => {

            limparHTML(); // Limpiar el HTML previo

            if(datos.cod === "404") {
                mostrarError('Ciudad no encontrada');

                return;
            }

            // Imprime la respuesata en el HTML
            mostarClima(datos);
        })
}


function mostarClima(datos) {
    const { main: {temp, temp_max, temp_min } } = datos;

    const centigrados = kelvinAcentigrados(temp);

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(actual);

    resultado.appendChild(resultadoDiv)
}

const kelvinAcentigrados = grados => parseInt(grados - 273.15);


function limparHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}