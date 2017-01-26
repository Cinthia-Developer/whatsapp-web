var mensaje = document.getElementById("mensajes");
var chat = document.getElementById("chat");
// para el valor del input.    
    var mensajeTotal = mensaje.value;

function validar(event) {
  mensajeTotal = (document.all) ? event.keyCode : event.which;
  if (mensajeTotal==13) alert ('Has pulsado enter');
    }
// funcion que agrega mensaje
function agregar(){
// para la hora
    var fecha = new Date();
    var hora = fecha.getHours()+":"+fecha.getMinutes();
// para crear nuevos mensajes.
    var div1 = document.createElement("div");
    div1.className = "w-message w-message-out";
    chat.appendChild(div1);
    
    var div2 = document.createElement("div");
    div2.className = "w-message-text";
    div1.appendChild(div2);
    
    var p = document.createElement("P");
    div2.appendChild(p);
    p.appendChild(document.createTextNode(mensajeTotal));
    
    var time = document.createElement("div");
    time.ClassName = "time";
    div2.appendChild(time);
    time.innerHTML=hora;
}

mensaje.addEventListener("keyup", agregar);

