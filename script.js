// Usaremos um conjunto para garantir que as combinações sejam únicas
let conjuntoDeCombinacoes = new Set();

function gerarCombinacoes(palavra, indice, atual) {
    // Se atingirmos o final da palavra, adiciona a combinação ao conjunto
    if (indice === palavra.length) {
        conjuntoDeCombinacoes.add(atual);
        exibirCombinacoes();
        return;
    }

    // Gera as combinações para a letra em minúscula e maiúscula
    let c = palavra.charAt(indice);
    gerarCombinacoes(palavra, indice + 1, atual + c.toLowerCase());
    gerarCombinacoes(palavra, indice + 1, atual + c.toUpperCase());
}

// Função para exibir as combinações na tela
function exibirCombinacoes() {
    const saida = document.getElementById('output');
    saida.innerHTML = ''; // Limpa a área de saída antes de mostrar as combinações

    // Exibe todas as combinações geradas
    conjuntoDeCombinacoes.forEach(combinacao => {
        const resultado = document.createElement('pre');
        resultado.textContent = combinacao;
        saida.appendChild(resultado);
    });
}

// Função chamada ao clicar no botão
function gerarCombinacoesUnicas() {
    conjuntoDeCombinacoes.clear(); // Limpa o conjunto para gerar novas combinações
    gerarCombinacoes('select', 0, '');
}