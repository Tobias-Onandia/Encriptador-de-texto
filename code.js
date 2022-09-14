const encriptar = document.getElementById("btn-encriptar")
const desencriptar = document.getElementById("btn-desencriptar");
const copiar = document.getElementById("btn-copiar");
const img = document.getElementById("content-img");


encriptar.addEventListener("click", () =>{
    let tomarValor = document.getElementById("input").value.toLowerCase();
    let sacarImg = img.setAttribute("hidden","true");
    let textoArea = document.getElementById("textArea").removeAttribute("hidden");
    var textoCifrado = tomarValor.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");
    
    document.getElementById("textArea").innerHTML = textoCifrado;

}
);


desencriptar.addEventListener("click", () =>{
    let tomarValor = document.getElementById("input").value.toLowerCase();
    let sacarImg = img.setAttribute("hidden","true");
    let textoArea = document.getElementById("textArea").removeAttribute("hidden");  
    var textoDescifrado = tomarValor.replaceAll("enter","e",);
    var textoDescifrado = textoDescifrado.replaceAll("ober","o",);
    var textoDescifrado = textoDescifrado.replaceAll("imes","i",);
    var textoDescifrado = textoDescifrado.replaceAll("ai","a",);
    var textoDescifrado = textoDescifrado.replaceAll("ufat","u",);
    
    document.getElementById("textArea").innerHTML = textoDescifrado;


});


copiar.addEventListener("click", ()=>{
    var copiarMensaje =  document.getElementById("textArea").value;
    navigator.clipboard.writeText(copiarMensaje);
})


