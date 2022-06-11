var formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    var nombre = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if(nombre == "" || password == ""){
        var spanNombre = document.getElementById("spanMsg");
        if(spanNombre.className=="noVisible"){
            spanNombre.classList.remove("noVisible");
            spanNombre.classList.add("siVisible");
        }
    }else{
        window.location.assign('./home.html')
    }
});

var nombre = document.getElementById("user");
var password = document.getElementById("password");

nombre.addEventListener("click",()=>{
    var spanNombre = document.getElementById("spanMsg");
    if(spanNombre.className="siVisible"){
        spanNombre.classList.remove("siVisible");
        spanNombre.classList.add("noVisible");
    }
});

password.addEventListener("click",()=>{
    var spanNombre = document.getElementById("spanMsg");
    if(spanNombre.className="siVisible"){
        spanNombre.classList.remove("siVisible");
        spanNombre.classList.add("noVisible");
    }
});