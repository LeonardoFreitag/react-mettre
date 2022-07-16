const initialState = {
  grupo: '',
};

function GrupoReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_GRUPO':
      return {...state, grupo: action.grupo};
    case 'CLEAR_GRUPO':
      return (state = {
        grupo: '',
      });
    default:
      return state;
  }
}

export default GrupoReducer;
