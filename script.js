function verificarPalavra() {
    const textoEntrada = document.getElementById('entrada').value;
    const divResultado = document.getElementById('resultado');

    const palavraChave = "SELECT";
    let palavraEncontrada = "";
    
    for (let i = 0; i < textoEntrada.length - palavraChave.length + 1; i++) {
        let substring = textoEntrada.substring(i, i + palavraChave.length);
        
        if (substring.toLowerCase() === palavraChave.toLowerCase()) {
            palavraEncontrada = substring;
            break;
        }
    }
    
    if (palavraEncontrada) {
        divResultado.textContent = `Você digitou: "${textoEntrada}". A palavra-chave "${palavraEncontrada}" foi encontrada.`;
    } else {
        divResultado.textContent = `Você digitou: "${textoEntrada}". A palavra-chave "SELECT" não foi encontrada.`;
    }
}
