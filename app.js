let listaParticipantes = [];
let NomeCompleto= "";


function adicionarAmigo (){
// Verifica se o nome a inserir é valido, sem caracteres especiais, numeros ou vazio, adicionando a lista de participantes.
// Exibe na tela o nome inserido e limpa o campo para o proximo nome a inserir.

    NomeCompleto = document.getElementById("amigo").value;

    if (NomeCompleto.trim() === "")
        alert (`Por favor, insira um nome.`);
    else {   
        if (apenasLetras (NomeCompleto)) {
            
            if (nomeRepetido(NomeCompleto)) 
                alert (`Nome já inserido. Por favor insira um novo nome.`);
            else {            
                listaParticipantes.push(NomeCompleto);
                atualizarLista();
            }
        }
        else 
            alert (`Por favor insira um nome válido.`);
    }

    document.getElementById("amigo").value = ""; 
}

function nomeRepetido (nome){
    return listaParticipantes.includes(nome);
}

function apenasLetras(texto) {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(texto);
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    listaParticipantes.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    
    document.getElementById("amigo").value = ""; 

    if (listaParticipantes.length == 0 )
        alert (`Adicione os amigos a serem sorteados antes.`);
    else {
        let sorteado = parseInt(Math.random () * listaParticipantes.length + +1);
        document.getElementById("amigo").value = "Seu amigo secreto é " + listaParticipantes[sorteado -1]; 
        listaAmigos.innerHTML = "";
    }
    
}
