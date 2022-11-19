
let salario = parseInt(window.prompt("Digite seu salario"));

let reajuste = parseInt(window.prompt("Digite o reajuste a ser feito"));

let novo_salario = (salario *( reajuste / 100 )) + salario;



//window.prompt(novo_valor);
document.getElementById('result').textContent = `Resultado : ${novo_salario}`;
console.log(novo_salario)