const initialState = [];

function ObsListReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_OBSLIST':
      return [
        ...state,
        {
          codigo: action.codigo,
          obs: action.obs,
          grupo: action.grupo,
        },
      ];
    case 'CLEAR_OBSLIST':
      return (state = []);
    default:
      return state;
  }
}

export default ObsListReducer;
