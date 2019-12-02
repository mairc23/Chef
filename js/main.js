window.onload = function()
      {
        var peso = document.getElementById('peso').value;
        var altura = document.getElementById('altura').value;
        var edad = document.getElementById('edad').value;
        var calorias = document.getElementById('calculo')
        calorias.onclick = function()
          {
            var seleccion = document.nowhere.genero;
            for (var i = 0; i < seleccion.length ; i++) {
              if (seleccion[i].checked) {
                var aux = i;
              }
            }

            if (aux != 1) {
              var hombre = 66 + (13.7 * peso) + (5 * altura) + (6.75 * edad);
              document.getElementById('col').innerHTML = hombre;
            } else {
              var mujer = 655 + (9.6 * peso) + (1.8 * altura) + (4.7 * edad);
              document.getElementById('col').innerHTML = mujer;
            }

          }
      }

function cotizar() {
  var plato1 = document.getElementById('plato1').value;
  var plato2 = document.getElementById('plato2').value;
  var plato3 = document.getElementById('plato3').value;
  var plato4 = document.getElementById('plato4').value;
  var plato5 = document.getElementById('plato5').value;
  var plato6 = document.getElementById('plato6').value;
  var plato7 = document.getElementById('plato7').value;
  var plato8 = document.getElementById('plato8').value;
  var plato9 = document.getElementById('plato9').value;

  var costo = (15 * plato1) + (20 * plato2) + (30 * plato3) + (50 * plato4) + (50 * plato5) + (40 * plato6) + (12 * plato7) + (45 * plato8) + (45 * plato9);
  alert("El costo total de la compra sería de Bs. " + costo);
}