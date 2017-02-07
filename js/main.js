var listItem = null;
// funcion principal valida la tecla enter, llama funciones y da valores:
function onMensajeKey(evt){
    if(evt.keyCode == 13){
        var f=new Date();
        var cad=f.getHours()+":"+f.getMinutes(); 
        var inputMensajes = document.getElementById("mensajes");
        crearMensaje(inputMensajes.value, cad); 
        crearChat(inputMensajes.value, cad);
        inputMensajes.value = "";
    }
}
// funcion para crear los chats (burbujas verdes):
function crearMensaje(_mensaje, _hora){
    var mensajeIn = '<div class="w-message w-message-in">' + 
                    '<div class="w-message-text">' + 
                    '<h5 class="blue-1">Andrea Lamas</h5>' + 
                    '<p>Chicos han visto el nuevo corte de Aldo?</p>' +
                    '<div class="time">11:12</div>' +
                    ' </div>' +
                    '</div>';
    var d = new Date();
    var mensajeOut ='<div class="w-message w-message-out">' +
                    '<div class="w-message-text">' +
                    '<p>' + _mensaje + '</p>' +          
                    '<div class="time">'+ _hora + '</div>' +
                    '</div>' +  
                    ' </div>';
   var mensaje = document.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;
     var hour = document.getElementById("hora");
	hour.innerHTML = _hora;
    // para que el scroll este posicionado al mensaje mas reciente:   
    var chatBox = document.getElementById("chat");
    chatBox.innerHTML += mensajeOut;
    chatBox.scrollTop = chatBox.scrollHeight;
}

// funcion para crear una lista de chats con datos validados:
function crearChat(_mensaje){
    var listaChats = document.getElementById("chatsUltimo");
    if(listItem==null){
    listItem = document.createElement("li")
    var chatItem =  '<div class="avatar">' + 
                    '<img src="image/logocodeacademy.png" alt="" class="wh-44">' + 
                    '<h4 class="w-contact-name">Laboratoria Perú</h4>' +
                    '<p class="w-last-message" id="mensaje">'+ _mensaje + '</p>' +
                    '</div>' +
                    '<div class="time" id="hora">'+ f.getHours()+":"+f.getMinutes() +'</div>';
							
    listItem.innerHTML+= chatItem;
    listaChats.insertBefore(listItem, listaChats.childNodes[0]);
    listaChats.innerHTML+=chatItem;
    }
}