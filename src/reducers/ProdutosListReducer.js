const initialState = [];

function ProdutosListReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_PRODUTOSLIST':
      return [
        ...state,
        {
          codigo: action.codigo,
          nome: action.nome,
          unidade: action.unidade,
          preco: action.preco,
          grupo: action.grupo,
          subgrupo: action.subgrupo,
          fracionado: action.fracionado,
          impressao: action.impressao,
        },
      ];
    case 'CLEAR_PRODUTOSLIST':
      return (state = []);
    default:
      return state;
  }
}

export default ProdutosListReducer;
