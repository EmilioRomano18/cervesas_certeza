# Proyecto Web: Certeza® - La Cerveza con Carácter

## Descripción General
Este proyecto es una landing page moderna, dinámica y responsiva para "Certeza®", una marca premium de cerveza. El diseño y la estructura web han sido cuidadosamente elaborados para reflejar una identidad de marca sólida, inspirada en las mejores prácticas del diseño web y orientada a proporcionar una experiencia de usuario (UX) excepcional. 

El sitio presenta la historia de la marca, los detalles de sus productos (Certeza® 0.0 y Certeza® Original), información sobre campañas, patrocinios y su estricta política de sostenibilidad y consumo consciente ("Disfruta Responsablemente").

## Estructura del Proyecto

El proyecto está compuesto por los siguientes elementos principales:

- **`index.html`**: Archivo principal que define la estructura semántica de la página. Está organizado de forma lógica en diversas secciones (Navegación, Hero, Historia, Productos, Responsabilidad, Campañas y Footer). Además, contiene la lógica en JavaScript en la parte final para dotar de interactividad a los componentes de la interfaz.
- **`styles.css`**: Hoja de estilos que determina la apariencia visual y la experiencia estética del sitio. Utiliza un sistema moderno de variables CSS (Design Tokens) para la paleta de colores y espaciados. Se apoya fuertemente en Flexbox y CSS Grid para organizar los elementos de manera responsiva.
- **`copy_img.js`**: Un script escrito en Node.js que automatiza la transferencia de imágenes desde una carpeta de origen externa hacia el directorio del proyecto, asegurando que todos los recursos gráficos (assets) estén en el lugar adecuado.
- **`/img`**: Carpeta destinada a alojar todas las imágenes (botellas, fondos, etc.) referenciadas en el HTML y el CSS.

## Tecnologías Utilizadas
- **HTML5**: Semántica y maquetación estructural.
- **CSS3**: Estilos avanzados, transiciones suaves, variables globales, Grid y Flexbox.
- **JavaScript (Vanilla JS)**: Interacciones del lado del cliente (ventanas emergentes, barra de navegación interactiva, slider dinámico).
- **Node.js**: Manipulación del sistema de archivos local.

## Arquitectura de la Interfaz (UI)

La página está estructurada en los siguientes bloques principales:

1. **Barra de Navegación (Navbar)**: Cabecera superpuesta (absolute) que cambia a posición fija (fixed) y obtiene un fondo opaco al detectar el desplazamiento vertical del usuario, garantizando visibilidad en todo momento.
2. **Hero (Pantalla Principal)**: Ocupa toda la altura de la ventana del navegador (`100vh`) ofreciendo una imagen de gran impacto y un mensaje introductorio claro para retener al usuario.
3. **Sección Historia**: Implementa una cuadrícula de dos columnas con tarjetas que tienen efectos visuales atractivos al pasar el ratón (Hover) y que sirven como disparadores (Triggers) para abrir ventanas modales.
4. **Sección Productos (Slider interactivo)**: Diseño dividido a la mitad (Split Layout). A la izquierda, se encuentra la información y un botón dinámico; a la derecha, la imagen del producto con controles direccionales para alternar entre variedades de cerveza.
5. **Sección Responsabilidad**: Otro diseño dividido que destina la mitad izquierda a impactantes logos visuales sobre fondo de gradiente verde, y la derecha a texto explicativo detallando las políticas sociales de la empresa.
6. **Campañas**: Área dedicada a la narrativa textual de los patrocinios.
7. **Footer (Pie de Página)**: Una cuadrícula (Grid) robusta de múltiples columnas que contiene todos los enlaces de políticas legales, contacto y redes sociales, junto con sellos de garantía.

## Funcionalidades y Componentes Interactivos

- **Sistema de Modales**: Para mantener al usuario en la página principal, se crearon contenedores ocultos que se activan mediante JavaScript, mostrando textos largos como "Aviso Legal" o "Política de Cookies".
- **Carrusel de Productos (Slider)**: Un arreglo de objetos de datos en JavaScript permite actualizar en tiempo real los textos, los colores y la imagen del producto expuesto, aplicando un efecto *fade in/fade out* a través de la manipulación del DOM y CSS.
- **Diseño Adaptable (Responsive Web Design)**: Por medio de consultas de medios (`@media queries`) en la hoja de estilos, el sitio ajusta sus cuadrículas para funcionar de manera óptima tanto en computadoras de escritorio como en tablets y teléfonos móviles.

## Documentación del Código
Para facilitar futuras mejoras, mantenimiento y el trabajo en equipo, **todo el código fuente ha sido rigurosamente comentado en español**. Cada archivo (HTML, CSS y JS) explica detalladamente el propósito de sus variables, selectores, funciones y estructuras HTML.
