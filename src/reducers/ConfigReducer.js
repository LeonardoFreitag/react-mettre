const initialState = {
  id: '',
  ip: '',
  destino: false,
};

function ConfigReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_CONFIG':
      return {...state, id: action.id, ip: action.ip, destino: action.destino};
    default:
      return state;
  }
}

export default ConfigReducer;
