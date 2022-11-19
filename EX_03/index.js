
let n1 = parseInt(window.prompt("Digite a sua primeira nota"));

let n2 = parseInt(window.prompt("Digite a sua sugunda nota"));

let n3 = parseInt(window.prompt("Digite a sua terceira nota"));

let  media_f = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;


//window.prompt(novo_valor);
document.getElementById('result').textContent = `A sua media final é: ${media_f}`;
console.log(`A sua media final é: ${media_f}`);