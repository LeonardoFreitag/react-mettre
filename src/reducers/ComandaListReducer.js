const initialState = [];

function ComandaListReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_COMANDALIST':
      return [
        ...state,
        {
          codigo: action.codigo,
          mesa: action.mesa,
          destino: action.destino,
          subtotal: action.subtotal,
          total: action.total,
          status: action.status,
        },
      ];
    case 'CLEAR_COMANDALIST':
      return (state = []);
    default:
      return state;
  }
}

export default ComandaListReducer;
