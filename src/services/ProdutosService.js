import getRealm from './realm';

async function setProdutosRealm(produtos) {
  const realm = await getRealm();

  const allProdutos = realm.objects('Produtos');

  realm.write(() => {
    realm.delete(allProdutos);
  });
  try {
    produtos.forEach(p => {
      let item = {
        codigo: p.codigo,
        nome: p.nome,
        unidade: p.unidade,
        preco: p.preco,
        grupo: p.grupo,
        subgrupo: p.subgrupo,
        fracionado: p.fracionado,
        impressao: p.impressao,
      };
      realm.write(() => {
        realm.create('Produtos', item, 'modified');
      });
    });
    // alert(produtos.length);
    // let teste = realm.objects('Produtos');
  } catch (erro) {
    alert(erro);
  }
}

export {setProdutosRealm};
