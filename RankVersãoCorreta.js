var nome = prompt("Qual seu nome meu caro? ", "Coloque seu nome");
var rank = prompt("Qual a sua XP? ", "Coloque sua XP");

if (nome != null) {

}
while (isNaN(rank)) {
    var rank = prompt("Qual a sua XP? Sem gracinhas dessa vez ", "Coloque sua XP");
}
rank = parseInt(rank);


switch (true) {

    case rank < 1001:
       rank = "Ferro";
        break;
    case rank > 1000 && rank < 2001:
        rank = "Bronze";
        break;
    case rank < 5001 && rank > 2000:
       rank = " Prata";
        break;
    case rank > 5000 && rank < 6001:
       Rank = "Ouro";
        break;
    case rank > 6000 && rank < 7001:
       Rank = "Platina";
        break;
    case rank > 7000 && rank < 8001:
      Rank = "Ascendente";
        break;
    case rank > 8000 && rank < 9001:
      Rank = "Imortal";
        break;
    case rank > 9000 && rank < 10001:
      Rank = " Radiante";
        break;
    case rank > 10000:
     Rank = " Radiante, só que tipo, melhor... ta ligado? é... não sei também."
        break;

}
console.log("O Herói de nome " + nome + " está no nível de " + rank);