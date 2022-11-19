
let nome = window.prompt("Digite o nome do empregado");
let nascimento = parseInt(window.prompt("Digite o ano de nascimento dele"));
let temp = parseInt(window.prompt("Digite o ano que ele ingresso na empresa"));

let idade_atual = 2022 - nascimento;
let temp_job = 2022 - temp;


if ((idade_atual >= 65) || (temp_job >= 30) ||(idade_atual >= 60 && temp_job >= 25)){
	
	document.getElementById('result').textContent = `Requerer aposentadoria`;
	console.log(`Requerer aposentadoria`);
	
} else {
	
	document.getElementById('result').textContent = `Não requerer`;
	console.log(`Não requerer`);
}