const contar = n =>
{
	for(let i = 0; i < n; i++)
	{
		console.log(i);
	}
}

console.time('contarDuracion');

contar(5);

console.timeEnd('contarDuracion');
