const contar = n =>
{
	for(let i = 0; i < n; i++)
	{
		console.log(i);
	}
}

let inicio = performance.now();

contar(5);

let final = performance.now();

let duracion = final - inicio;

console.log(`El algoritmo contar ha durado ${duracion}ms.`);
