function cargar(){
    var request = new XMLHttpRequest();
    request.addEventListener("load", cargarNombres, false);
    request.open("GET", "baseDeDatos.xml", true);
    request.send("null");
}

function cargarNombres(e){
    var botnre = document.createElement("input");
    var correoT = document.getElementById("nameC").value;
    var errorMess;
    var forD = document.getElementById("frmContacto");
    var divS = document.getElementById("divForm1");
    var divA = document.getElementById("llenarForm");
    var forSe = document.createElement("form");
    var estu = e.target.responseXML;
    var listaEst = estu.getElementsByTagName("estudiante");
    forSe.setAttribute("id", "sesionActi");
    var nombre, correo, apellido,textnom,textape,textcor;
    var sexo, telf, dir,textdir, radsexM, radsexF, texttel, radcarS, radcarN;
    var textpla, areadescrip,textfa,texttw;   
    divS.style.textAlign="left";
    forD.setAttribute("style", "display:none");
    for(i=0;i<listaEst.length;i++){
        nombre = listaEst[i].getElementsByTagName("nombre")[0].innerHTML;
        apellido = listaEst[i].getElementsByTagName("apellido")[0].innerHTML;
        correo = listaEst[i].getElementsByTagName("correo")[0].innerHTML;
        sexo= listaEst[i].getElementsByTagName("sexo")[0].innerHTML;
        dir= listaEst[i].getElementsByTagName("direccion")[0].innerHTML;
        if(correo==correoT){
            botnre.setAttribute("type", "button");
            botnre.value = "Registrar";
            textnom = document.createElement("input");
            textape = document.createElement("input");
            textcor = document.createElement("input");
            textdir = document.createElement("input");
            radsexM = document.createElement("input");
            texttel = document.createElement("input");
            radsexF = document.createElement("input");
            radcarS = document.createElement("input");
            radcarN = document.createElement("input");
            textpla = document.createElement("input");
            textnom.setAttribute("class", "textput");
            textape.setAttribute("class", "textput");
            textcor.setAttribute("class", "textput");
            textdir.setAttribute("class", "textput");
            texttel.setAttribute("class", "textput");
            textpla.setAttribute("class", "textput");
            areadescrip = document.createElement("textarea");
            areadescrip.setAttribute("class", "textput");
            textfa = document.createElement("input");
            texttw = document.createElement("input");
            textfa.setAttribute("class", "textput");
            texttw.setAttribute("class", "textput");
            textnom.setAttribute("type", "text");
            textfa.setAttribute("type", "text");
            texttw.setAttribute("type", "text");
            textpla.setAttribute("type", "text");
            textape.setAttribute("type", "text");
            textcor.setAttribute("type", "text");
            textdir.setAttribute("type", "text");
            texttel.setAttribute("type", "text");
            texttel.setAttribute("id", "texttelf");
            textfa.setAttribute("id","textface");
            radsexM.setAttribute("type", "radio");
            radcarS.setAttribute("type", "radio");
            radcarN.setAttribute("type", "radio");
            radcarS.setAttribute("name", "opcion");
            radcarN.setAttribute("name", "opcion");
            radsexM.setAttribute("class", "sexos");
            radsexF.setAttribute("class", "sexos");
            radcarS.setAttribute("value", "Si");
            radcarN.setAttribute("value", "No");
            radsexM.value= "Masculino";
            radsexF.setAttribute("type", "radio");
            radsexF.value= "Femenino";
            textnom.value = nombre;
            textape.value = apellido;
            textcor.value = correo;
            textdir.value = dir;
            if (sexo == "Masculino"){
                radsexM.setAttribute("checked", "true");    
                radsexM.setAttribute("disabled", "true");
                radsexF.setAttribute("disabled", "true");
                }
                else{
                radsexF.setAttribute("checked", "true");    
                radsexM.setAttribute("disabled", "true");
                radsexF.setAttribute("disabled", "true");
            }
            textnom.setAttribute("disabled", "true");
            textape.setAttribute("disabled", "true");
            textcor.setAttribute("disabled", "true");
            textdir.setAttribute("disabled", "true");
            textcor.setAttribute("size", "25");
            textpla.setAttribute("id", "placa");
            areadescrip.setAttribute("id", "descripcioncarro");
            textpla.disabled=true;
            areadescrip.disabled=true;
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createTextNode("Nombres:  "));
            divS.appendChild(textnom);
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createTextNode("Apellidos:  "));
            divS.appendChild(textape);
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createTextNode("Correo:   "));
            divS.appendChild(textcor);
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            texttel.setAttribute("name", "texttelefono");
            textdir.setAttribute("size", dir.length);
            divS.appendChild(document.createTextNode("Dirección:   "));
            divS.appendChild(textdir);
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createTextNode("Sexo:   "));
            divS.appendChild(radsexM);
            divS.appendChild(document.createTextNode("Masculino"));
            divS.appendChild(radsexF);
            divS.appendChild(document.createTextNode("Femenino"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createTextNode("Teléfono:   "));
            texttel.setAttribute("onkeypress", "javascript:return validarNro(event)");
            texttel.setAttribute("placeholder", " 0999999999");
            texttel.maxLength = 10;
            errorMess = document.createElement("label");
            errorMess.setAttribute("id","telefono");
            
            texttel.setAttribute("onblur", "javascript:validartexto(this)");
            divS.appendChild(texttel);
            divS.appendChild(errorMess);
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createTextNode("Facebook:   "));
            textfa.setAttribute("placeholder", " https://www.facebook.com/Perfil");
            textfa.size = 28;
            errorMess = document.createElement("label");
            errorMess.setAttribute("id","facebook");
            textfa.setAttribute("onblur", "javascript:validartexto(this)");
            divS.appendChild(textfa);
            divS.appendChild(errorMess);
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            texttw.setAttribute("id", "texttwitter");
            errorMess = document.createElement("label");
            errorMess.setAttribute("id","twitter");
            texttw.setAttribute("placeholder", " https://www.twitter.com/Perfil");
            texttw.size = 28;
            texttw.setAttribute("onblur", "javascript:validartexto(this)");
            divS.appendChild(document.createTextNode("Cuenta de Twitter:   "));
            divS.appendChild(texttw);
            divS.appendChild(errorMess);
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createTextNode("Tiene carro:   "));
            radcarN.setAttribute("onclick", "javascript:habilitarCarro(this)");
            radcarS.setAttribute("onclick", "javascript:habilitarCarro(this)");
            divS.appendChild(radcarS);
            divS.appendChild(document.createTextNode("Si"));
            divS.appendChild(radcarN);
            radcarN.setAttribute("checked", "true");
            divS.appendChild(document.createTextNode("No"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            errorMess = document.createElement("label");
            errorMess.setAttribute("id","carrito");
            textpla.setAttribute("onblur", "javascript:validartexto(this)");
            divS.appendChild(document.createTextNode("Placa: "));
            textpla.setAttribute("placeholder", "AAA-0000");
            divS.appendChild(textpla);
            divS.appendChild(errorMess);
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createTextNode("Descripción del carro:   "));
            divS.appendChild(document.createElement("br"));
            areadescrip.setAttribute("placeholder", "Describa aquí su carro");
            areadescrip.setAttribute("rows","5");
            areadescrip.setAttribute("cols","30");
            areadescrip.setAttribute("style", "resize:none");
            divS.appendChild(areadescrip);
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            divS.appendChild(document.createElement("br"));
            botnre.setAttribute("class", "botoncentro");
            botnre.setAttribute("style", "text-align: center");
            botnre.setAttribute("onclick", "javascript:verificarRegistro()");
            divS.appendChild(botnre);
        }
    }
    forSe.setAttribute("style", "display:block");
    divS.appendChild(forSe)
}

function validartexto(ele){
    var expresiontel = "^09{1}[0-9]{8}$";
    if(ele.getAttribute("id")=="texttelf"){
        var err = document.getElementById("telefono");
        if (ele.value.match(expresiontel) && ele.value != '')
        {
            err.innerHTML = "Correcto";
            err.style.float = "right";
            err.style.display = "block";
            err.style.color = "green";
        }
        else{
            
            err.innerHTML = "* Incorrecto";
            err.style.display = "block";
            err.style.float = "right";
            err.style.color = "red";
        }
    }
    if(ele.getAttribute("id")=="textface"){
        var err = document.getElementById("facebook");
        if(ele.value.indexOf("https://www.facebook.com/") !=-1|| ele.value.indexOf("http://www.facebook.com/")!=-1 && ele.value != ''){
            err.innerHTML = "Correcto";
            err.style.display = "block";
            err.style.float = "right";
            err.style.color = "green";
        }
        else{
            err.innerHTML = "* Incorrecto";
            err.style.display = "block";
            err.style.float = "right";
            err.style.color = "red";
        }

    }
    if(ele.getAttribute("id")=="texttwitter"){
        var err = document.getElementById("twitter");
        if((ele.value.indexOf("https://www.twitter.com/") !=-1|| ele.value.indexOf("http://www.twitter.com/")!=-1 || ele.value.indexOf("https://twitter.com/")) != -1 && ele.value != ''){
            err.innerHTML = "Correcto";
            err.style.display = "block";
            err.style.float = "right";
            err.style.color = "green";
        }
        else{
            err.innerHTML = "* Incorrecto";
            err.style.display = "block";
            err.style.float = "right";
            err.style.color = "red";
        }
    }
    if(ele.getAttribute("id")=="placa"){
        var patron = '^[A-Z a-z]{3}-[0-9]{3,4}$';
        var patron1 = '^[A-Z a-z]{3}[0-9]{3,4}$';
        var err = document.getElementById("carrito");
        if((ele.value.match(patron)) || (ele.value.match(patron1)) && ele.value != ''){
            err.innerHTML = "Correcto";
            err.style.float = "right";
            err.style.display = "block";
            err.style.color = "green";
        }
        else{
            
            err.innerHTML = "* Incorrecto";
            err.style.display = "block";
            err.style.float = "right";
            err.style.color = "red";
        }
    }
}
function verificarRegistro(){
    var div = document.getElementById("registrocompleto");
    var expresiontel = "^09{1}[0-9]{8}$";
    var patron = '^[A-Z a-z]{3}-[0-9]{3,4}';
    var patron1 = '^[A-Z a-z]{3}[0-9]{3,4}';
    var tel, pla, tw, fb,div,div2,btn;
    tel = document.getElementById("texttelf");
    tw = document.getElementById("texttwitter");
    fb = document.getElementById("textface");
    pla = document.getElementById("placa");
    if (tel.value.match(expresiontel) && tel.value != '') {
        if (fb.value.indexOf("https://www.facebook.com/") != -1 || fb.value.indexOf("http://www.facebook.com/") != -1) {
            if ((tw.value.indexOf("https://www.twitter.com/") != -1 || tw.value.indexOf("http://www.twitter.com/") != -1 || tw.value.indexOf("https://twitter.com/")) != -1) {
                if(document.getElementsByName("opcion")[0].checked == true){
               if (pla.value.match(patron) || (pla.value.match(patron1))) {
                    div2 = document.createElement("div");
                    btn = document.createElement("input");
                    btn.setAttribute("type", "button");
                    div2.setAttribute("class", "divdentrodiv");
                    div2.setAttribute("style", "text-align: center");
                    btn.setAttribute("onclick", "javascript: salirdiv(this)");
                    btn.setAttribute("value", "Completar Registro");
                    div2.innerHTML = "Se ha completado su registro";
                    div.appendChild(div2);
                    div.style.display = "block";
                }
                else{
                    div2 = document.createElement("div");
                    btn = document.createElement("input");
                    div2.setAttribute("class", "divdentrodiv");
                    btn.setAttribute("type", "button");
                    div2.setAttribute("style", "text-align: center");
                    btn.setAttribute("onclick", "javascript: salirdiv(this)");
                    btn.setAttribute("value", "Completar Registro");
                    div2.innerHTML = "Se ha completado su registro";
                    div.appendChild(div2);
                    div.style.display = "block";
                }
            }
            }
        }
    }
    else {
        div2 = document.createElement("div");
        btn = document.createElement("input");
        div2.setAttribute("class", "divdentrodiv");
        div.setAttribute("class", "divregistro");
        btn.setAttribute("type", "button");
        btn.setAttribute("value", "Aceptar");
        btn.setAttribute("onclick", "javascript: salirdiv(this)");
        div2.setAttribute("style", "text-align: center");
        div2.innerHTML = "Complete correctamente los campos";
        div.appendChild(div2);
        div.style.display = "block";
    }
}

function salirdiv(ele){
    divdp = document.getElementById("registrocompleto");
        divdp.style.display = "none";
        divdp.style.zIndex = -1;
}
function habilitarCarro(e){
    if (e.value=="Si")
    {
        var placa=document.getElementById("placa");
        placa.disabled=false;
        document.getElementById("descripcioncarro").disabled=false;
    }
    else{
        document.getElementById("placa").disabled=true;
        document.getElementById("descripcioncarro").disabled=true;
    }
}

function registra(elemento){
    var divS = document.getElementById("divForm1");
    var forC = document.createElement("form");
    var enter= document.createElement("br");
    var enterCo = document.createElement("input");
    var boton = document.createElement("input");
    divS.style.textAlign="center";
    enterCo.setAttribute("type","text");
    forC.setAttribute("id","frmContacto");
    enterCo.setAttribute("id","nameC");
    enterCo.setAttribute("required",true);
    boton.setAttribute("type","button");
    boton.setAttribute("value","Registro");
    boton.setAttribute("onclick", "javascript:cargar()");
    forC.appendChild(document.createTextNode("Ingrese su correo de Espol:"));
    enterCo.setAttribute("placeholder", " usuario@espol.edu.ec");
    forC.appendChild(enterCo);
    enterCo.setAttribute("class", "textput");
    forC.appendChild(document.createElement("br"));
    forC.appendChild(document.createElement("br"));
    forC.appendChild(document.createElement("br"));
    forC.appendChild(boton);
    divS.appendChild(forC);
}

function validarNro(e) {
var key;
if(window.event) // IE
	{
	key = e.keyCode;
	}
else if(e.which) // Netscape/Firefox/Opera
	{
	key = e.which;
	}

if (key < 48 || key > 57)
    {
    if(key == 46 || key == 8) // Detectar . (punto) y backspace (retroceso)
        { return true; }
    else 
        { return false; }
    }
return true;
}

window.addEventListener("load", registra, false);