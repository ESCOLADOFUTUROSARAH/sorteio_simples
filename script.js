// Adiciona um ouvinte de evento ao botão com o ID 'sorteioButton'.
// Quando o botão é clicado, a função anônima é executada
document.getElementById('sorteioButton').addEventListener('click', function () {

    // Inicializa um array vazio que armazenará os números sorteados
    let numeros = [];

    // Loop que continua até que 15 números únicos sejam sorteados
    while (numeros.length < 15) {

        // Gera um número aleatório entre 1 e 25
        let numeroAleatorio = Math.floor(Math.random() * 25) + 1;

        // Verifica se o número aleatório ainda não foi sorteado.
        // Se o número ainda não está no array 'numeros', ele é adicionado
        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }

    // Ordena o array 'numeros' em ordem crescente.
    numeros.sort(function (a, b) {
        return a - b;
    });

    // Exibe os numeros sorteados em uma div com o ID 'resultado'.
    // Os números são exibidos como uma string, separados por vírgulas.
    document.getElementById('resultado').innerText = numeros.join(', ');
});