$(function() {

//botones presentación receta
$("#Enviar_correo").click(function() {
  alert("El correo ha sido enviado exitosamente")
})

$("#Anadir_favoritos").click(function() {
  alert("La receta se ha agregado a favoritos en forma exitosa")
})

//ingredientes
$('body').on('dblclick', 'H4', function() {
  $(this).css("color","#DC3545");
})

$('body').on('click', 'H4', function() {
  $(this).css("color","#DC3545");
})

$('body').on('dblclick', 'li', function() {
  $(this).css("color","#DC3545");
})

$('body').on('click', 'li', function() {
  $(this).css("color","#373a3c");
})

//Tarjetas
$("#card1").click(function() {
  $("#cardtext1").toggle();
})

$("#card2").click(function() {
  $("#cardtext2").toggle();
})

$("#card3").click(function() {
  $("#cardtext3").toggle();
})

//botón Subscripción
$ ("#empezar").click(function() {
  alert("Se remitirá a otra página")
})










})
