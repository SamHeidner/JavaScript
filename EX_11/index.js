let litros = parseInt(window.prompt("QUantos litros você deseja comprar?"));
let combustivel = window.prompt("Digite tipo 'A'(Acool) ou 'G'(gasolina)")

let preco;

if (combustivel == "G" || combustivel == "g")
{
	preco = litros * 3.3
	if (litros <= 20){
		preco -= (3.3 * litros) * 4 / 100;
	}else{
		preco -= (3.3 * litros) * 6 / 100;
	}
	document.getElementById('result').textContent = `O valor de gasolina a ser pago é: ${preco}`;
	console.log(`O valor de gasolina a ser pago é: ${preco}`);
}

else if (combustivel == "A" || combustivel == "a")
{
	preco = litros * 2.9
	if (litros <= 20){
		preco -= (2.9 * litros) * 43 / 100;
	}else{
		preco -= (2.9 * litros) * 5 / 100;
	}
	document.getElementById('result').textContent = `O valor de alcool a ser pago é: ${preco}`;
	console.log(`O valor de alcool a ser pago é: ${preco}`);
}
else{
	document.getElementById('result').textContent = `Produto nao encontrado`;
	console.log(`Produto nao encontrado`);
}

