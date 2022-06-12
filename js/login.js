var formulario = document.getElementById('formulario');

//SPANS
var spanUsuario = document.getElementById('spanUsuario');
var spanPassword = document.getElementById('spanPassword');

//INPUTS
var usuario = document.getElementById('usuario');
var password = document.getElementById('password');

formulario.addEventListener('submit',(e) => {
    e.preventDefault();
    if(usuario.value === ''){
        if(spanUsuario.className === 'noVisible'){
            spanUsuario.classList.remove('noVisible');
            spanUsuario.classList.add('siVisible');
        }
    }

    if(password.value === ''){
        if(spanPassword.className === 'noVisible'){
            spanPassword.classList.remove('noVisible');
            spanPassword.classList.add('siVisible');
        }
    }
});

//Eventos que se activan al dar click sobre el nombre o la password
usuario.addEventListener('click', () =>{
    if(spanUsuario.className === 'siVisible'){
        spanUsuario.classList.remove('siVisible');
        spanUsuario.classList.add('noVisible');
    }
});

password.addEventListener('click', () =>{
    if(spanPassword.className === 'siVisible'){
        spanPassword.classList.remove('siVisible');
        spanPassword.classList.add('noVisible');
    }
});
