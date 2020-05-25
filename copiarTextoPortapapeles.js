
function copy(){
  var codigoACopiar = document.getElementById('myText');//copia el  contenido  deldiv con id myText
  var seleccion = document.createRange();
  seleccion.selectNodeContents(codigoACopiar);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(seleccion);
  var res = document.execCommand('copy');
  setTimeout(() => {  window.getSelection().removeRange(seleccion); }, 1000);

}
