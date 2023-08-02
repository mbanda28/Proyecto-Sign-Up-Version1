const form = document.querySelector('#form')
const inp1 = document.querySelector('#first-name')
const inp2 = document.querySelector('#first-name')
const inp3 = document.querySelector('#email')
const inp4 = document.querySelector('#password')
const btn = document.querySelector('#btn')

document.addEventListener('DOMContentLoaded',send())

function send() {
    form.addEventListener('submit', function(event){
        event.preventDefault()
        const inputs = document.querySelectorAll("input")
        const mensajes = document.querySelectorAll('.form-error')
        const test = document.querySelector('.form-error')

            mensajes.forEach(mensaje => {
                mensaje.classList.add('error')
            })

    


        let isValid = true;
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                
                input.classList.add("similar");

                isValid = false;
                }
            });
        
            if (isValid) {
                form.submit()
        }
    })
}













// const formulario = document.querySelector('.user')
// const btn = document.querySelector('.btn')


// document.addEventListener("DOMContentLoaded", function() {

//     btn.addEventListener("submit", function(event) {
//         event.preventDefault(); // Evita el envío del formulario por defecto

//     // Restablece los estilos antes de la validación
//     const inputs = document.querySelectorAll("user");
//     inputs.forEach(input => {
//         input.classList.remove("error");
//     });

//     // Realiza la validación de cada campo
//     let isValid = true;
//     inputs.forEach(input => {
//         if (input.value.trim() === "") {
//         input.classList.add("error");
//         isValid = false;
//         }
//     });

//     // Si todos los campos están completos, envía el formulario
//     if (isValid) {
//         form.submit();
//     }
//     });
// });