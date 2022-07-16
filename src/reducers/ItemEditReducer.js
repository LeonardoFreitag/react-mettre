const initialState = {
  codigo: '',
  codMesa: '',
  codFunc: '',
  codProd: '',
  descricao: '',
  unidade: '',
  quantidade: 1,
  unitario: 0,
  total: 0,
  hora: 0,
  grupo: '',
  subgrupo: '',
  impresso: 'N',
  obs: '',
  enviado: 'N',
};

function ItensEditReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_ITEMEDIT':
      return {
        ...state,
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
      };
    case 'CLEAR_ITEMEDIT':
      return (state = {
        codigo: '',
        codMesa: '',
        codFunc: '',
        codProd: '',
        descricao: '',
        unidade: '',
        quantidade: 1,
        unitario: 0,
        total: 0,
        hora: 0,
        grupo: '',
        subgrupo: '',
        impresso: 'N',
        obs: '',
        enviado: '',
      });
    default:
      return state;
  }
}

export default ItensEditReducer;
