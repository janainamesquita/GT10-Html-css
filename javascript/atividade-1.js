const nome = "Janaína" //texto - string
const idade = 17 //número - number
const altura = 1.74 //número - number
const menorDeIdade = true //booleano - boolean

console.log("Olá seu nome é " + nome) //concatenação
//olá seu nome é Janaína, você tem 17 anos e sua altura é  1.74
console.log ("olá seu nome é " + nome + ", você tem " + idade + " anos, e sua altura é " + altura)
 
//Olá você é menor de idade? true
console.log (" Olá você é menor de idade? " + menorDeIdade)

//template string ou string dinamica
const  frase = `Olá seu nome é ${nome} você tem ${idade} anos`

console.log(frase)

console.log(1+ "10")