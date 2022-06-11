(function () {
  var actualizarHora = function () {
    var fecha = new Date(),
      horas = fecha.getHours(),
      ampm,
      minutos = fecha.getMinutes(),
      segundos = fecha.getSeconds(),
      diaSemana = fecha.getDay(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      year = fecha.getFullYear();

    var pHoras = document.getElementById("horas"),
      pAMPM = document.getElementById("ampm"),
      pMinutos = document.getElementById("minutos"),
      pSegundos = document.getElementById("segundos"),
      pDiaSemana = document.getElementById("diaSemana"),
      pDia = document.getElementById("dia"),
      pMes = document.getElementById("mes"),
      pYear = document.getElementById("year");

    var semana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    pDiaSemana.textContent = semana[diaSemana];

    pDia.textContent = dia;

    var meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    pMes.textContent = meses[mes];

    pYear.textContent = year;

    if (horas >= 12) {
      horas -= 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    if (horas == 0) {
      horas = 12;
    }

    if (horas < 10) {
      horas = "0" + horas;
    }

    pHoras.textContent = horas;
    pAMPM.textContent = ampm;

    if (minutos < 10) {
      minutos = "0" + minutos;
    }

    if (segundos < 10) {
      segundos = "0" + segundos;
    }

    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;
  };

  actualizarHora();
  var intervalo = setInterval(actualizarHora, 1000);
})();

//Hamburger Menu
const menu = document.querySelector(".tools");
const menuItems = document.querySelectorAll(".menuItem");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "flex";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

menuIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

//Creación de notas

const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content, note.color, note.fondo);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

//Añadir notas por medio del boton
addNoteButton.addEventListener("click", () => addNote());

//Obtener las notas
function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
  //Arroja un arreglo
}

//Guardar las notas
function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
  //Recibe un JASON
}

//Crea el elemento de la nota
//Me retorna un textarea
function createNoteElement(id, content, color, fondo) {
  //Pruebas de agregar personalización

  //CREACIÓN DE ELEMENTOS
  const noteContainer = document.createElement("div");
  const caja = document.createElement("ul");

  const gotita = document.createElement("li");
  const reloj = document.createElement("li");

  //CREACIÓN DE IMAGENES
  const gotitaImg = document.createElement("img");
  const relojImg = document.createElement("img");
  gotitaImg.setAttribute("src", "images/gotita-icono.jpg");
  relojImg.setAttribute("src", "images/reloj-icono.png");

  caja.classList.add("funciones-nota");
  gotita.classList.add("icono-gotita");
  reloj.classList.add("icono-reloj");
  reloj.id = "icono-reloj";

  gotita.append(gotitaImg);
  reloj.append(relojImg);
  caja.append(gotita);
  caja.append(reloj);

  //CREACIÓN DE ELEMENTO TXT
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Sticky Note";
  element.style.color = fondo;
  element.style.backgroundColor = color;
  noteContainer.style.backgroundColor = color;

  //EVENTOS LISTENER
  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, noteContainer);
    }
  });

  //CLICK LISTENER DE EL ICONO DE LA GOTITA
  gotita.addEventListener("click", () => {
    var colorEscogido = cambiarColor();
    var fondo;
    if (colorEscogido == "#FF8C32" || colorEscogido == "#4700D8" || colorEscogido == "#9900F0") {
      element.style.color = "white";
      fondo="white";
    } else {
      element.style.color = "black";
      fondo="black";
    }

    element.style.backgroundColor = colorEscogido;
    noteContainer.style.backgroundColor = colorEscogido;
    updateColor(id,colorEscogido,fondo);
  });
  //Adjuntar los elemenetos dentro del note-container
  noteContainer.classList.add("note-container");
  noteContainer.append(caja);
  noteContainer.append(element);

  return noteContainer;
}

//Añade la nota
function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: "",
    color: "",
    fondo: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];
  targetNote.content = newContent;
  saveNotes(notes);
}

function updateColor(id, color,fondo) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];
  targetNote.color = color;
  targetNote.fondo = fondo;
  saveNotes(notes);
}


function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}

//Funcion de color random
function cambiarColor() {
  //azul     morado    morado    amarillo   naranja
  var colores = ["#00C3FF","#4700D8","#9900F0","#FFC600","#FF8C32","#FFFFFF"];
  var numeroRandom = Math.floor(Math.random() * colores.length);
  var colorEscogido = colores[numeroRandom];
  return colorEscogido;
}

//Grab Elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong, make sure that ${selector} exists or is typed correctly`
  );
};

//Open/Close search form popup
const reminderToggle = document.querySelectorAll("#icono-reloj");
const closeForm = selectElement("#form-close-btn");
const searchForm = selectElement("#search-form-container");
const toggleReminder = () => {
  searchForm.classList.toggle("activated");
};

for(i of reminderToggle){
  i.addEventListener("click", toggleReminder);
}

closeForm.addEventListener("click", toggleReminder);

window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") searchForm.classList.remove("activated");
});
