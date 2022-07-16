const initialState = {
  codigo: '',
  mesa: '',
  destino: '',
  subtotal: 0,
  total: 0,
  status: '',
};

function ComandaReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_COMANDA':
      return {
        ...state,
        codigo: action.codigo,
        mesa: action.mesa,
        destino: action.destino,
        subtotal: action.subtotal,
        total: action.total,
        status: action.status,
      };
    case 'CLEAR_COMANDA':
      return (state = {
        codigo: '',
        mesa: '',
        destino: '',
        subtotal: 0,
        total: 0,
        status: '',
      });
    default:
      return state;
  }
}

export default ComandaReducer;
