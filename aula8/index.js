const nome = 'Leandro';
const sobrenome = 'Alves de Souza Braga';
const idade = 20;
const peso = 84;
const alturaEmM = 1.80;
let imc = peso / (alturaEmM*alturaEmM);
let anoNascimento = 2022 - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e eu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);