var formulario = document.getElementById("formulario-reg");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("last-name").value;
  var mail = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  //Validar campos llenados
  if (nombre == "" || password == ""|| apellido == ""|| mail == "") {
    //Hacer aparecer mensaje advertencia
    var spanMsg = document.getElementById("spanMsg");
    if (spanMsg.className == "noVisible") {
      spanMsg.classList.remove("noVisible");
      spanMsg.classList.add("siVisible");
    }
  } else {
    window.location.assign("./home.html");
  }
});

//Borrar mensaje cuando se haga clic en un input
var nombre = document.getElementById("name");
var apellido = document.getElementById("last-name");
var mail = document.getElementById("email");
var password = document.getElementById("password");

nombre.addEventListener("click", () => {
  invisibleMsg();
});
apellido.addEventListener("click", () => {
  invisibleMsg();
});
mail.addEventListener("click", () => {
  invisibleMsg();
});
password.addEventListener("click", () => {
  invisibleMsg();
});

function invisibleMsg() {
  var spanMsg = document.getElementById("spanMsg");
  if ((spanMsg.className = "siVisible")) {
    spanMsg.classList.remove("siVisible");
    spanMsg.classList.add("noVisible");
  }
}