const hbs = require('hbs');
//helper para año
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
//helper para mes
hbs.registerHelper('getMonth', () => {
    return new Date().getMonth();
});
//capitalizar ortografia de mayuscula
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});