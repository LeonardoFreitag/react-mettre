const initialState = {
  codigo: '',
};

function AtendenteReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_ATENDENTE':
      return {...state, codigo: action.codigo};
    case 'CLEAR_ATENDENTE':
      return (state = {
        codigo: '',
      });
    default:
      return state;
  }
}

export default AtendenteReducer;
