const initialState = [];

function CombineListReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_COMBINELIST':
      return [
        ...state,
        {
          codigo: action.codigo,
          codMesa: action.codMesa,
          codFunc: action.codFunc,
          codProd: action.codProd,
          descricao: action.descricao,
          unidade: action.unidade,
          quantidade: action.quantidade,
          unitario: action.unitario,
          total: action.total,
          hora: action.hora,
          grupo: action.grupo,
          subgrupo: action.subgrupo,
          impresso: action.impresso,
          obs: action.obs,
          enviado: action.enviado,
          combine: action.combine,
          codCombine: action.codCombine,
        },
      ];
    case 'CLEAR_COMBINELIST':
      return (state = []);
    default:
      return state;
  }
}

export default CombineListReducer;
