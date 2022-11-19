
let time1 = window.prompt("Digite o nome do primeiro time");
let gols1 = parseInt(window.prompt("Digite quantos gols o primeiro time fez"));


let  time2 = window.prompt("Digite o nome do segundo  time");
let  gols2 = parseInt(window.prompt("Digite quantos gols o segundo time fez"));

if (gols1 > gols2) {
	
	document.getElementById('result').textContent = `O time ${time1} venceu!!`;
	console.log(`O time ${time1} venceu!!`);
	
} else if (gols1 < gols2) {
	
	document.getElementById('result').textContent = `O time ${time2} venceu!!`;
	console.log(`O time ${time2} venceu!!`);
	
} else {
	
	
	document.getElementById('result').textContent = `Infelizmente ouve um empate`;
	console.log(`Infelizmente ouve um empate`);
}