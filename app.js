

function encriptar(){
    let texto = document.getElementById("texto1").value;
    let mensajeTitulo= document.getElementById("titulo-mensaje");
    let parrafo =document.getElementById("parrafo");
    let muñeca= document.getElementById("muñeca");
    let botonCopiar= document.getElementById("oculto");
    botonCopiar.style.display="block";
    botonCopiar.classList.add("ajustar");
    mensajeTitulo.classList.add("ajustar");
    


    let textoCodigo= texto
                     .replace(/e/gi,"enter")
                     .replace(/i/gi,"imes")
                     .replace(/a/gi,"ai") 
                     .replace(/o/gi,"ober")  
                     .replace(/u/gi,"ufat") ; 
    if(texto.length != 0){
        mensajeTitulo.textContent=textoCodigo;
        parrafo.textContent="";
        muñeca="";
    }else {
        muñeca="./imagenes/Muñeco.png";
        mensajeTitulo.textContent="Ningun mensaje fue encaontrado";
        parrafo.textContent="Ingresa el texto que quiere encriptar o desencriptar"
        alert("Debes imgresar algún texto");
    }
    document.getElementById("muñeca").style.display= "none";
    document.getElementById("oculto")="block";
    

    
      

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
        let textoCodigodes= texto
                     .replace(/enter/gi,"e")
                     .replace(/imes/gi,"i")
                     .replace(/ai/gi,"a") 
                     .replace(/ober/gi,"o")  
                     .replace(/ufat/gi,"u") ; 
    if(texto.length != 0){
        document.getElementById("texto1").value = textoCodigodes
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

