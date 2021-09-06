
/*function validar(){
  var ced = {}
  ced = document.getElementById("ced").Value;
  var cedula = /^[0 - 9]{10}$/g; // para validar datos que deban tener 10 numeros

  if (ced.value === "") {
    resultado = false;
    mensaje("Telefono es requerido", ced);
} else if (!cedula.number(ced.value)) {
    resultado = false;
    mensaje("Telefono debe ser de 10 digitos", ced);
}
  
  obj.ced.error = false;
  obj.ced.message = ""; onclick="validar(this)" 
  console.log("Tecla leva");
  if(obj.ced.number.length ==0000000072 && isNaN(number) == false)
  {
     obj.ced.message = "Sin problemas";
      return text;
  }
  else
  {
     obj.ced.message = "Largo no permitido o contiene letras";
    obj.ced.error = true;
      return ced;
  }
}
*/

function validar() {
/*oninput="validar(this);"
  /*if(this.value.length >= this.maxLength || this.value.length <=this.maxLength) this.value = this.value.slice(0, this.maxLength)*/
  /*if(obj.value.length > obj.maxlength){
    obj.value = obj.value.slice(0, obj.maxlength);
  }*/
  var ced;
  var ced = validar.getElementById("ced").value.trim();
  ced = document.getElementById("ced").Value;
    var total = 0;
    var longitud = ced.length;
    var longcheck = longitud - 1;

    if (form.ced !== "" && longitud === 10){
      for(i = 0; i < longcheck; i++){
        if (i%2 === 0) {
          var aux = obj.ced.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(ced.charAt(i)); // parseInt o concatenará en lugar de sumar
        }
      }

      total = total % 10 ? 10 - total % 10 : 0;

      if (form.ced.charAt(longitud-1) == total) {
        document.getElementById("salida").innerHTML = ("Cedula Válida");
      }else{
        document.getElementById("salida").innerHTML = ("Cedula Inválida");
      }
    }
  }


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  function validarFormulario(evento) {
    evento.preventDefault();
    var cedula = document.getElementById('cedula').value;
    if(cedula.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var cedula = document.getElementById('cedula').value;
    if (cedula.length < 6) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }