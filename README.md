<!-- Documentación de la Aplicación de Clima -->

# Aplicación de Clima

![Captura de pantalla de la aplicación de clima](screenshot.png)

## Descripción

La Aplicación de Clima es una aplicación web que te permite obtener información actualizada sobre el clima de cualquier ciudad en el mundo. Utiliza la API de OpenWeatherMap para proporcionar datos precisos sobre la temperatura, condiciones climáticas y más. Es una herramienta útil para planificar tus actividades al aire libre, viajes y estar preparado para cualquier condición climática.

## Instrucciones de Uso

Sigue estos pasos para utilizar la aplicación:

1. **Clonar o Descargar:** Clona este repositorio en tu máquina local utilizando Git o descarga el código fuente como un archivo ZIP.

2. **Obtener una Clave de API:** Para acceder a la API de OpenWeatherMap, necesitas una clave de API. Regístrate en [OpenWeatherMap](https://openweathermap.org) para obtener tu clave de API de forma gratuita.

3. **Configurar la Clave de API:**
   - Abre el archivo `app.js` en un editor de código.
   - Busca la variable `appId` y coloca tu clave de API entre las comillas:
     ```javascript
     const appId = 'TU_CLAVE_DE_API_AQUI';
     ```

4. **Abrir la Aplicación:** Abre el archivo `index.html` en tu navegador web preferido. La aplicación estará lista para su uso.

5. **Consultar el Clima:**
   - Completa el formulario con la ciudad y el país que deseas consultar.
   - Haz clic en el botón "Buscar Clima".
   - Espera a que la aplicación obtenga la información del clima y la muestre en la pantalla.

## Requisitos

Para utilizar esta aplicación, necesitas:

- Un navegador web actualizado (Google Chrome, Mozilla Firefox, Safari, etc.).
- Una clave de API de OpenWeatherMap (gratuita).

## Características Destacadas

La Aplicación de Clima ofrece varias características:

- **Validación de Entrada:** La aplicación verifica que los campos de ciudad y país estén completos antes de realizar la consulta, evitando errores de entrada.

- **Interfaz de Usuario Intuitiva:** La interfaz de usuario es sencilla y fácil de usar. Muestra información esencial, como el nombre de la ciudad, la temperatura actual, la temperatura máxima y mínima.

- **Mensajes de Error:** Si la ciudad no se encuentra en la base de datos de OpenWeatherMap, la aplicación muestra un mensaje de error, proporcionando retroalimentación al usuario.

- **Spinner de Carga:** Mientras se realiza la consulta, se muestra un spinner de carga para indicar que la aplicación está trabajando en obtener los datos del clima.

## Tecnologías Utilizadas

Esta aplicación se ha construido utilizando las siguientes tecnologías:

- **HTML:** La estructura de la aplicación se basa en HTML.

- **CSS (Tailwind CSS):** El diseño y los estilos de la aplicación se han implementado utilizando el framework CSS Tailwind.

- **JavaScript:** La lógica y funcionalidad de la aplicación se programaron en JavaScript.

- **API de OpenWeatherMap:** La fuente de datos para la información del clima se obtiene de la API de OpenWeatherMap.

## Créditos

Este proyecto fue desarrollado por **Luis Furtado** y utiliza la API de OpenWeatherMap para proporcionar información precisa y actualizada sobre el clima.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes consultar el archivo `LICENSE` para obtener más detalles.

---

¡Espero que esta información te sea útil! Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en preguntar.
