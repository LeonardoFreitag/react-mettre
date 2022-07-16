const initialState = {
  ler: true,
};

function LerItensReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_LERITENS':
      return {...state, ler: action.ler};
    case 'CLEAR_GRUPO':
      return (state = {
        ler: false,
      });
    default:
      return state;
  }
}

export default LerItensReducer;
