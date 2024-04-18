function esPalindromo(cadena: string): boolean {
    // Convertir la cadena a minúsculas y eliminar espacios en blanco
    const cadenaFormateada = cadena.toLowerCase().replace(/\s/g, '');

    // Obtener la cadena invertida
    const cadenaInvertida = cadenaFormateada.split('').reverse().join('');

    // Comparar la cadena original con la cadena invertida
    const esPalindromo = cadenaFormateada === cadenaInvertida;

    // Mostrar un mensaje indicando si la cadena es un palíndromo o no
    if (esPalindromo) {
        console.log(`La cadena "${cadena}" es un palíndromo.`);
    } else {
        console.log(`La cadena "${cadena}" no es un palíndromo.`);
    }

    return esPalindromo;
}

// Ejemplos de uso
esPalindromo("Anita lava la tina"); // Devuelve: La cadena "Anita lava la tina" es un palíndromo.
esPalindromo("Hola mundo");         // Devuelve: La cadena "Hola mundo" no es un palíndromo.
