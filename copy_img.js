// Importamos el módulo 'fs' (File System) nativo de Node.js para interactuar con los archivos del sistema.
const fs = require('fs');
// Importamos el módulo 'path' nativo de Node.js para manejar y transformar las rutas de los directorios y archivos.
const path = require('path');

// Definimos la ruta del directorio de origen desde donde se copiarán las imágenes.
const srcDir = 'C:\\Users\\emili\\.gemini\\antigravity\\brain\\447e73ad-8301-443b-99ea-990ee18aa0f6';
// Definimos la ruta del directorio de destino hacia donde se copiarán las imágenes.
const destDir = 'c:\\Users\\emili\\OneDrive\\Documentos\\Practicas\\Cerveza_kbro\\img';

// Creamos un arreglo de objetos. Cada objeto contiene el nombre del archivo de origen (src) y el nombre con el que se guardará en el destino (dest).
const filesToCopy = [
    { src: 'certeza_bottle_exact_1778501112214.png', dest: 'certeza_bottle.png' },
    { src: 'certeza_hero_exact_1778501098491.png', dest: 'certeza_hero.png' },
    { src: 'certeza_lifestyle_exact_1778501125693.png', dest: 'certeza_lifestyle.png' },
    { src: 'certeza_brewery_1778503450724.png', dest: 'certeza_brewery.png' }
];

// Iteramos sobre el arreglo de archivos usando un bucle forEach.
filesToCopy.forEach(file => {
    // Unimos la ruta del directorio de origen con el nombre del archivo de origen para obtener la ruta completa.
    const srcFile = path.join(srcDir, file.src);
    // Unimos la ruta del directorio de destino con el nombre del archivo de destino para obtener la ruta completa.
    const destFile = path.join(destDir, file.dest);
    
    // Verificamos si el archivo existe en la ruta de origen.
    if (fs.existsSync(srcFile)) {
        // Si existe, copiamos el archivo desde la ruta de origen a la ruta de destino.
        fs.copyFileSync(srcFile, destFile);
        // Imprimimos un mensaje de éxito en la consola.
        console.log(`Copiado ${file.src} a ${file.dest}`);
    } else {
        // Si no existe, imprimimos un mensaje de error indicando qué archivo no se encontró.
        console.log(`Archivo no encontrado: ${srcFile}`);
    }
});

// Imprimimos un mensaje final en la consola para indicar que el proceso ha terminado.
console.log('¡Proceso de copia de imágenes réplicas exactas finalizado!');
