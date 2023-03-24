import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");//selecciona todos los inputs

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});