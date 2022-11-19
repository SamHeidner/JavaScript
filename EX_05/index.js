
let valor = parseInt(window.prompt("Digite um valor para ser comparado a 100"));

if( valor > 100){

	document.getElementById('result').textContent = `É MAIOR QUE 100!`;
	console.log('É MAIOR QUE 100!')
}else{
	
	document.getElementById('result').textContent = `NAO É MAIOR QUE 100!`;
	console.log('NAO É MAIOR QUE 100!')
}

