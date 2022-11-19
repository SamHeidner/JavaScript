
let apple = parseInt(window.prompt("Digite quantas maçãs você quer(temos descontos para compras acima de 11 unidades)"));

let valor;

if( apple < 11){

	valor = (apple * 130)/100;

	document.getElementById('result').textContent = `O valor a pagar é:  ${valor}`;
	console.log(`O valor a pagar é:  ${valor}`);
	
}else{
	
	
	valor = apple * 1;
	
	document.getElementById('result').textContent = `O valor a pagar é:  ${valor}`;
	console.log(`O valor a pagar é:  ${valor}`);
}

