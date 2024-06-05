const btnAula1 = document.querySelector("btnTeste");
const escreve = document.querySelector("#textoHeader");
btnAula1.onclick = () =>{
alert("Jesus é meu amigo!")
}
const nome ="Jesus amigo da loh".split("");

const escreveNome = (pos)=>{
   if(pos < nome.length){
    let saida = "";
    for(let i=0; i <= pos; i++){
        saida += nome[i];
        setTimeout(() => {
            escreve.innerHTML = saida
            pos++;
            escreveNome(pos);
        },1000);
    }
  }
}

(()=>{
    
})();