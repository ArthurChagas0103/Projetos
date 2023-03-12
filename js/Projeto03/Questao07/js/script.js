const produtos = [
    { nome: 'Camiseta', preco: 50 },
    { nome: 'Calça', preco: 80 },
    { nome: 'Tênis', preco: 120 }
  ];
  
  const produtosComDesconto = produtos.map((produto) => {
    const precoComDesconto = produto.preco * 0.9;
    return Object.fromEntries(Object.entries(produto).map(([chave, valor]) => [chave, chave === 'preco' ? precoComDesconto : valor]));
  });
  
  console.log(produtosComDesconto);