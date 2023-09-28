Aplicación de Clima
    Esta es una aplicación web simple que te permite consultar el clima de una ciudad y país específicos utilizando la API de OpenWeatherMap.


Instrucciones de Uso
1- Clona este repositorio en tu máquina local o descarga el código fuente.

2- Abre el archivo index.html en tu navegador web.

3- Completa el formulario con la ciudad y el país que deseas consultar y haz clic en el botón "Buscar Clima".

4- Espera a que la aplicación obtenga la información del clima y la muestre en la pantalla.


Requisitos
    Para que esta aplicación funcione correctamente, necesitarás una clave de API de OpenWeatherMap. Puedes obtener una clave de API registrándote en OpenWeatherMap de forma gratuita.

    Después de obtener tu clave de API, colócala en la variable appId en el archivo app.js de la siguiente manera:

        const appId = 'TU_CLAVE_DE_API_AQUI';


Características
.- Validación de entrada: La aplicación verifica que ambos campos (ciudad y país) estén completos antes de realizar la consulta.

.- Interfaz de usuario simple: La aplicación tiene una interfaz de usuario minimalista que muestra el nombre de la ciudad, la temperatura actual, la temperatura máxima y la temperatura mínima.

.- Mensajes de error: Si la ciudad no se encuentra en la base de datos de OpenWeatherMap, se muestra un mensaje de error.

.- Spinner de carga: Mientras se realiza la consulta, se muestra un spinner de carga para indicar que la aplicación está trabajando en obtener los datos.


Tecnologías Utilizadas
    HTML
    CSS (Tailwind CSS)
    JavaScript
    API de OpenWeatherMap


Créditos
    Este proyecto fue creado por Luis Furtado y utiliza la API de OpenWeatherMap.


Licencia
    Este proyecto está bajo la licencia MIT. Puedes consultar el archivo LICENSE para obtener más detalles.


¡Espero que esta información te sea útil! Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en preguntar.