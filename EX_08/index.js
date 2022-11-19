
let v1 = parseInt(window.prompt("Digite o valor 1"));
let v2 = parseInt(window.prompt("Digite o valor 2 (não pode ser o mesmo do valor 1)"));


if( v1 > v2){

	document.getElementById('result').textContent = `O maior valor  é:  ${v1}`;
	console.log(`O maior valor  é:  ${v1}`);
}else{
		
	document.getElementById('result').textContent = `O maior valor  é:  ${v2}`;
	console.log(`O maior valor  é:  ${v2}`);
}

