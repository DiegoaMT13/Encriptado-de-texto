


function encriptar(){
    let texto = document.getElementById("texto1").value;
    let mensajeTitulo= document.getElementById("titulo-mensaje");
    let parrafo =document.getElementById("parrafo");
    let muñeca1= document.getElementById("muñeca").src="./imagenes/Muñeco.png";
    let botonCopiar= document.getElementById("oculto");
    let condicion= "Ingrese el texto aquí"
    botonCopiar.style.display="block";
    botonCopiar.classList.add("ajustar");
    mensajeTitulo.classList.add("ajustar");


    
 
    
        let textoCodigo= texto
                        .replace(/e/gi,"enter")
                        .replace(/i/gi,"imes")
                        .replace(/a/gi,"ai") 
                        .replace(/o/gi,"ober")  
                        .replace(/u/gi,"ufat") ; 
                        textoCodigo;
        if(condicion != texto ){
            mensajeTitulo.textContent=textoCodigo;
            document.getElementById("parrafo").style.display= "none";
            document.getElementById("muñeca").style.display= "none";
            document.getElementById("oculto")="block";


        }else {
            muñeca1;
            document.getElementById("titulo-mensaje").style.display="none";
            document.getElementById("oculto").style.display="none";
            mensajeTitulo.textContent="Ningun mensaje fue encaontrado";
            parrafo.textContent="Ingresa el texto que quiere encriptar o desencriptar !F5 refrescar o cargar nuevamente!";
                            
            alert("Debes imgresar algún texto");   
        }   
    }

function copiar(){
    document.getElementById("titulo-mensaje").placeholder = "";
    let text_copi = document.getElementById("titulo-mensaje");
    text_copi.select();
    document.execCommand("copy");
}
function desencriptar(){
        let texto = document.getElementById("texto1").value;
        let parrafo =document.getElementById("parrafo");
        let muñeca= document.getElementById("muñeca");
        let condicion= "Ingrese el texto aquí"
        let textoCodigodes= texto
                     .replace(/enter/gi,"e")
                     .replace(/imes/gi,"i")
                     .replace(/ai/gi,"a") 
                     .replace(/ober/gi,"o")  
                     .replace(/ufat/gi,"u") ; 
    if(condicion != texto){
        // document.getElementById("texto1").value = textoCodigodes
        document.getElementById("titulo-mensaje").value= textoCodigodes
        mensajeTitulo.textContent=textoCodigodes;
        parrafo.textContent="";
        muñeca="";
    }else {
        muñeca="./imagenes/Muñeco.png";
        mensajeTitulo.textContent="Ningun mensaje fue encaontrado";
        parrafo.textContent="Ingresa el texto que quiere encriptar o desencriptar"
        alert("Debes imgresar algún texto");
    }
    document.getElementById("muñeca").style.display= "none";
    document.getElementsByClassName("btn-copiar").style.display= "block";


} 

