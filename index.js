document.getElementById("boton-dark").onclick = function () {
  document.body.style.backgroundColor = "#1e1e20";
  document.getElementById("fondo-nav").style.backgroundColor = "#000";
  document.getElementById("fondo-nav").style.color = "#ffffff";
};

document.getElementById("boton-light").onclick = function () {
  document.body.style.backgroundColor = "#ffffff";
  document.getElementById("fondo-nav").style.backgroundColor = "#c7c5c5";
  document.getElementById("fondo-nav").style.color = "#000";
};

document.getElementById("boton-aceptar").addEventListener("click", function () {
  let nombre = document.getElementById("input-nombre").value;
  document.getElementById("nombre").innerHTML = nombre;
});

document.getElementById("boton-aceptar").addEventListener("click", function () {
  let apellido = document.getElementById("input-apellido").value;
  document.getElementById("apellido").innerHTML = apellido;
});

document.getElementById("boton-aceptar").addEventListener("click", function () {
  let profesion = document.getElementById("input-profesion").value;
  document.getElementById("profesion").innerHTML = profesion;
});
