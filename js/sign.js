var formulario = document.getElementById("formulario-reg");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("last-name").value;
  var mail = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (nombre == "" || password == ""|| apellido == ""|| mail == "") {
    var spanNombre = document.getElementById("spanMsg");
    if (spanNombre.className == "noVisible") {
      spanNombre.classList.remove("noVisible");
      spanNombre.classList.add("siVisible");
    }
  } else {
    window.location.assign("./home.html");
  }
});