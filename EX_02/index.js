
let base = parseInt(window.prompt("Digite a base do retangulo"));

let altura = parseInt(window.prompt("Digite a altura do retangulo"));

let area = (base * altura);


//window.prompt(novo_valor);
document.getElementById('result').textContent = `A area do retangulo é: ${area}`;
console.log(`A area do retangulo é: ${area}`);