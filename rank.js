/** Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
    depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
*/ 

function calcularNivelSwitch(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let rank = "";

    switch (true) {
        case vitorias <= 9:
            rank = "Perdedor";
            break;
        case vitorias <= 10:
            rank = "Ferro";
            break;
        case vitorias >= 11 && vitorias <= 20:
            rank = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            rank = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            rank = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            rank = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            rank = "Lendário";
            break;
        default:
            rank = "Imortal";
    }
    return `O Player tem saldo de ${saldoVitorias} está no Rank ${rank}`;
}


const vitorias = 80;
const derrotas = 20;
const resultadoSwitch = calcularNivelSwitch(vitorias, derrotas);
console.log(resultadoSwitch);
