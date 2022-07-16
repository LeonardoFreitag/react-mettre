const initialState = {
  nroPedacos: 1,
  destino: false,
};

function ParamReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_PARAM':
      return {...state, nroPedacos: action.nroPedacos, destino: action.destino};
    default:
      return state;
  }
}

export default ParamReducer;
