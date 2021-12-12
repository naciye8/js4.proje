const kelvin = 293;
let celsius = kelvin - 273;
let fahrenheit = celsius * (9 / 5 + 32);
let newton = Math.round(celsius * (33 / 100));
console.log("the temperature is ${fahrenheit} degrees Fahrenheit,which is equivalentto ${newton} degrees Newton.");