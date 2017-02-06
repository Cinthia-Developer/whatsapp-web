function onMensajeKey(evt){
    if(evt.keyCode == 13){
        var elInputMensajes = document.getElementById("mensajes");
        crearMensaje(elInputMensajes.value); 
        crearChat();
        elInputMensajes.value = "";
    }
}

function crearMensaje(_mensaje){
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
                    '<div class="time">'+ d.getHours() + ':' + d.getMinutes() + '</div>' +
                    '</div>' +  
                    ' </div>';
    
    var conversacion= document.getElementById("conversacion");
    conversacion.innerHTML+=mensajeOut;
}
function crearChat(_mensaje){
    _mensaje = document.getElementById("mensajes").value;
    var listaChats = document.getElementById("chatsUltimo");
    var listItem = document.createElement("li")
    var chatItem =  '<div class="avatar">' + 
                    '<img src="image/logocodeacademy.png" alt="" class="wh-44">' + 
                    '<h4 class="w-contact-name">Laboratoria Perú</h4>' +
                    '<p class="w-last-message" id="mensaje">'+ _mensaje + '</p>' +
                    '</div>' +
                    '<div class="time" id="hora">14:27</div>';
							

    listItem.innerHTML+= chatItem;
    listaChats.insertBefore(listItem, listaChats.childNodes[0]);
    listaChats.innerHTML+=chatItem;
}