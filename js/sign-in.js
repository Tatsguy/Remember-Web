var formulario = document.getElementById('formulario');

//SPANS
var spanNombre = document.getElementById('spanNombre');
var spanApellido = document.getElementById('spanApellido');
var spanEmail = document.getElementById('spanEmail');
var spanPassword = document.getElementById('spanPassword');

//INPUTS
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var password = document.getElementById('password');

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(nombre.value === ''){
        if(spanNombre.className === 'noVisible'){
            spanNombre.classList.remove('noVisible');
            spanNombre.classList.add('siVisible');
        }
    }

    if(apellido.value === ''){
        if(spanApellido.className === 'noVisible'){
            spanApellido.classList.remove('noVisible');
            spanApellido.classList.add('siVisible');
        }
    }

    if(email.value === ''){
        if(spanEmail.className === 'noVisible'){
            spanEmail.classList.remove('noVisible');
            spanEmail.classList.add('siVisible');
        }
    }

    if(password.value === ''){
        if(spanPassword.className === 'noVisible'){
            spanPassword.classList.remove('noVisible');
            spanPassword.classList.add('siVisible');
        }
    }
});

/*EVENTOS CLICK*/
nombre.addEventListener('click',()=>{
    if(spanNombre.className === 'siVisible'){
        spanNombre.classList.remove('siVisible');
        spanNombre.classList.add('noVisible');
    }
});

apellido.addEventListener('click',()=>{
    if(spanApellido.className === 'siVisible'){
        spanApellido.classList.remove('siVisible');
        spanApellido.classList.add('noVisible');
    }
});

email.addEventListener('click',()=>{
    if(spanEmail.className === 'siVisible'){
        spanEmail.classList.remove('siVisible');
        spanEmail.classList.add('noVisible');
    }
});

password.addEventListener('click',()=>{
    if(spanPassword.className === 'siVisible'){
        spanPassword.classList.remove('siVisible');
        spanPassword.classList.add('noVisible');
    }
});

//IDEA PARA MEJORAMIENTO DE CÓDIGO
function definirInput(input,span){
    var tipoInput = input.getAttribute('id');
    var tipoSpan = span.getAttribute('id'); 
}
