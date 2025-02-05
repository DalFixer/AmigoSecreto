// 
let listaParticipantes = [];



function adicionarAmigo (NomeCompleto){
// Verifica se o nome a inserir é valido, sem caracteres especiais e numeros, adicionando a lista de participantes
        if (apenasLetras (NomeCompleto)) then 
            let NomeCompleto = document.querySelector('amigo').value;
            listaParticipantes.push(NomeCompleto);
        else 
            alert (`Nome inválido!`);
}


function apenasLetras(texto) {
// Retorna TRUE se o nome é valido (texto somente) ou FALSE se tem caracteres alem de texto e espaco
    if (texto.trim() === "") return false;
    return /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(texto);
}

