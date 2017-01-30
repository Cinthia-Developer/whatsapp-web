    var mensaje = document.getElementById("mensajes");
    var chat = document.getElementById("chat");
	mensaje.addEventListener('keyup', validarTecla);
// para que la tecla (enter) funcione:
function validarTecla(evt){
    if(evt.keyCode == 13 && mensaje.value.length != 0){
        agregarMensaje();
    }
}
// funcion para agregar un mensaje al chat con hora de envio:
function agregarMensaje(){
    var nuevoMensaje = mensaje.value;
// para agregar la hora de envio al chat:
    var fecha = new Date();
	var hora = fecha.getHours();
	var min = fecha.getMinutes();
// para agregar mensaje al chat:    
	var div1 = document.createElement("div");
	div1.className = "w-message w-message-out";
    chat.appendChild(div1);
    
	var div2 = document.createElement("div");
	div2.className = "w-message-text";
    div1.appendChild(div2);
    
	var parrafo = document.createElement("p");
    div2.appendChild(parrafo);
    parrafo.innerHTML = nuevoMensaje;
    
	var time = document.createElement("div");
	time.className = "time";
    div2.appendChild(time);
    time.innerHTML = hora + ":" + min;
// para limpiar el input una vez enviado el mensaje:	
	mensaje.value="";
}