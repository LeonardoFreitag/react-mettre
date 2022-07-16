const initialState = [];

function ItensListReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_ITENSLIST':
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
    case 'CLEAR_ITENSLIST':
      return (state = []);
    case 'DELETE_ITEMLIST':
      const newList = [...state];
      const filterList = newList.filter(item => item.codigo !== action.codigo);
      return (state = filterList);
    default:
      return state;
  }
}

export default ItensListReducer;
