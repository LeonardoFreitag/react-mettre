import {combineReducers} from 'redux';
import ConfigReducer from './reducers/ConfigReducer';
import ComandaReducer from './reducers/ComandaReducer';
import ComandaListReducer from './reducers/ComandaListReducer';
import ItensListReducer from './reducers/ItensListReducer';
import ProdutosListReducer from './reducers/ProdutosListReducer';
import ObsListReducer from './reducers/ObsListReducer';
import GrupoReducer from './reducers/GrupoReducer';
import ItensEditReducer from './reducers/ItemEditReducer';
import AtendenteReducer from './reducers/AtendenteReducer';
import LerItensReducer from './reducers/LerItensReducer';
import ParamReducer from './reducers/ParamReducer';
import CombineListReducer from './reducers/CombineListReducer';

const combReducers = combineReducers({
  config: ConfigReducer,
  comanda: ComandaReducer,
  comandaList: ComandaListReducer,
  itensList: ItensListReducer,
  produtosList: ProdutosListReducer,
  obsList: ObsListReducer,
  grupo: GrupoReducer,
  itemEdit: ItensEditReducer,
  atendente: AtendenteReducer,
  lerItens: LerItensReducer,
  paramReducer: ParamReducer,
  combineReducer: CombineListReducer,
});

export default combReducers;
