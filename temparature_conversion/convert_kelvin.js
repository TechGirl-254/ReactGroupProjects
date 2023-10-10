// This module converts temparatures from kelvin to fahrenheit and celcius

const kelvin = 293;
let celsius = kelvin - 273;

/**
 * Converst celsius to fahrenheit
 * @returns does not return any value, but prints a message on stdout
 */
function celsius_to_fahrenheit() {
    let fahrenheit_unconverted = celsius * (9/5) + 32

    let fahrenheit = Math.floor(fahrenheit_unconverted)

    console.log(`The temparature is ${fahrenheit} degrees Fahrenheit.`)

}

celsius_to_fahrenheit()