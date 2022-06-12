var formulario = document.getElementById("formulario-login");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  var nombre = document.getElementById("user").value;
  var password = document.getElementById("password").value;

  //Validar campos llenos
  if (nombre == "" || password == "") {
    //Hacer aparecer mensaje advertencia
    var spanNombre = document.getElementById("spanMsg");
    if (spanNombre.className == "noVisible") {
      spanNombre.classList.remove("noVisible");
      spanNombre.classList.add("siVisible");
    }
  } else {
    //Validar contraseña del admin
    if(nombre == "UncleJoe" && password == "1234"){
      window.location.assign("./admin.html");
    }else{
      window.location.assign("./home.html");
    }
  }
});

//Borrar mensaje cuando se haga clic en un input
var nombre = document.getElementById("user");
var password = document.getElementById("password");
nombre.addEventListener("click", () => {
  invisibleMsg();
});
password.addEventListener("click", () => {
  invisibleMsg();
});

function invisibleMsg() {
  var spanNombre = document.getElementById("spanMsg");
  if ((spanNombre.className = "siVisible")) {
    spanNombre.classList.remove("siVisible");
    spanNombre.classList.add("noVisible");
  }
}