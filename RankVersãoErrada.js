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
        console.log("Calculamos aqui vemos que " + nome + " se ferrou viu...");
        break;
    case rank > 1000 && rank < 2001:
        console.log("Você tomou um solzinho viu, " + nome + " ta todo bronzeado!");
        break;
    case rank < 5001 && rank > 2000:
        console.log(nome + " esta todo prateado viu!")
        break;
    case rank > 5000 && rank < 6001:
        console.log(nome + " esta num void, você queria estar qualificado mas se encontra num paradoxo, onde você acha justo ser ouro, outros acham que você é prata, mas no se encontramos aqui. Perdidos no void.")
        break;
    case rank > 6000 && rank < 7001:
        console.log("Não achamos ouro, mas achamos o " + nome);
        break;
    case rank > 7000 && rank < 8001:
        console.log("E o " + nome + " que ta com o cabelo todo platinado ein?")
        break;
    case rank > 8000 && rank < 9001:
        console.log("Triste noticia guys, o " + nome + " ascendeu e não esta mais entre nós");
        break;
    case rank > 9000 && rank < 10001:
        console.log("A gente tenta, tenta e tenta... mas o " + nome + " não morre! Parece que " + nome + " é imoral, não pera, imortal!!");
        break;
    case rank > 10000:
        console.log("Não consigo ver nada, estava procurando " + nome + "mas a luz esta muito radiante!");
        break;

}