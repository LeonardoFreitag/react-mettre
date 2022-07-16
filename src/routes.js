import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

import SignIn from './pages/SignIn';
import ConfigPage from './pages/ConfigPage';
import Comandas from './pages/Comandas';
import Preload from './pages/Preload';
import Atendimento from './pages/Atendimento';

import LancByCodigo from './pages/Grupo/Codigo';
import Grupos from './pages/Grupo/Grupos';
import ProdutosGrupo from './pages/Grupo/Produtos';
import EditaProduto from './pages/Grupo/EditaProduto';
import ObsGrupo from './pages/Grupo/Obs';
import CombGrupos from './pages/Combinado/CombGrupos';
import CombProdutos from './pages/Combinado/CombProdutos';
import CombineEdit from './pages/Combinado/CombineEdit';


const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Sign: createSwitchNavigator({
                SignIn,
                Comandas,
                ConfigPage,
                Preload,
                Atendimento
            }),
            LancaGrupo: createSwitchNavigator({
                LancByCodigo,
                Grupos,
                ProdutosGrupo,
                EditaProduto,
                ObsGrupo,
            }),
            PedidoCombinado: createSwitchNavigator({
                CombGrupos,
                CombProdutos,
                CombineEdit
            }),
        },
    ),
)

export default Routes;
