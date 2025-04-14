//crie uma função que pegue a idade, genero e cidade de um usuario
//Se o usuario for do sexo masculino e tiver mais de 18 anos
//Exibir Precisa se alistar
//Se o usuario for do sexo masculino e tiver menos de 18 anos
//Exibir Não pode se alistar

const user = {
    nome: "Janaína",
    idade: 17,
    genero: "feminino",
    cidade: "Fortaleza"
}

function verificarAlistamento(user) {
    if(user.sexo = "masculino" && user.idade > 18) {
    console.log("Precisa se alistar")
    } else {
    console.log("não Precisa se alistar")

    }
}