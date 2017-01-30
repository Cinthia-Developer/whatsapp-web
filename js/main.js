    var mensaje = document.getElementById("mensajes");
    var chat = document.getElementById("chat");
	mensaje.addEventListener('keyup', validarTecla);

function validarTecla(evt){
    if(evt.keyCode == 13 && mensaje.value.length != 0){
        agregarMensaje();
    }
}

function agregarMensaje(){
    var horario = new Date();
	var hora = horario.getHours();
	var minuto = horario.getMinutes();
    
	var texto = mensaje.value;
    
	var cuadro = document.createElement('div');
	cuadro.className = "w-message w-message-out";
    chat.appendChild(cuadro);
    
	var cuadro2 = document.createElement('div');
	cuadro2.className = "w-message-text";
    cuadro.appendChild(cuadro2);
    
	var parrafo = document.createElement('p');
    cuadro2.appendChild(parrafo);
    parrafo.innerHTML = texto;
    
	var time = document.createElement('div');
	time.className = "time";
    cuadro2.appendChild(time);
    time.innerHTML = hora + ":" + minuto;
	
    if(minuto<10){
		minuto='0'+minuto;
	}
	mensaje.value="";
    mensaje.focus();
    
}