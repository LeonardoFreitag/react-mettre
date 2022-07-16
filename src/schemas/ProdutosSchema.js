export default class ProdutosSchema {
  static schema = {
    name: 'Produtos',
    primaryKey: 'codigo',
    properties: {
      codigo: {type: 'string', indexed: true},
      nome: 'string',
      unidade: 'string',
      preco: 'double',
      grupo: 'string',
      subgrupo: 'string',
      fracionado: 'string',
      impressao: 'string',
    },
  };
}
