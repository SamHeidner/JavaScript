
let custo_inicial = parseInt(window.prompt("Digite custo de fabrica do carro"));

let imposto = custo_inicial * 0.45;

let dist = custo_inicial * 0.28;

custo_final= custo_inicial + dist + imposto


document.getElementById('result').textContent = `A sua media final é: ${custo_final}`;
console.log(`A sua media final é: ${custo_final}`);