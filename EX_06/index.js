
let valor = parseInt(window.prompt("Digite um valor para ver se ele é positivo ou negativo"));

if( valor >= 0){

	document.getElementById('result').textContent = `O valor digitado é positivo`;
	console.log(`O valor digitado é positivo`);
	
}else{
	
	document.getElementById('result').textContent = `O valor digitado é negativo`;
	console.log(`O valor digitado é negativoivo`);
	
}

