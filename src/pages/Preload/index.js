import React, {useState, useEffect, useCallback} from 'react';
import {Platform, ActivityIndicator, Alert} from 'react-native';
import {
  Background,
  Container,
  TextoBasico,
  SubmitButton,
  SubmitText,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import getRealm from '../../services/realm';
import {setUtl} from '../../services/api';
import {setProdutosRealm} from '../../services/ProdutosService';
import {setObsRealm} from '../../services/setObsService';

export default function Preload({navigation}) {
  const dispatch = useDispatch();

  const rConfig = useSelector(state => state.config);

  const [atividade, setAtividade] = useState(true);
  const [atende, setAtende] = useState(false);

  useEffect(() => {
    const loadTabelas = async () => {
      const realm = await getRealm();

      try {
        let o = realm.objects('Obs');
        if (o.length > 0) {
          setAtende(true);
        }
        dispatch({type: 'CLEAR_OBSLIST'});
        o.forEach(item => {
          dispatch({
            type: 'STORE_OBSLIST',
            codigo: item.codigo,
            obs: item.obs,
            grupo: item.grupo,
          });
        });
      } catch (erro) {
        Alert.alert(`erro obs ${erro}`);
      }

      try {
        let p = realm.objects('Produtos');
        if (p.length > 0) {
          setAtende(true);
        }
        dispatch({type: 'CLEAR_PRODUTOSLIST'});
        p.forEach(item => {
          dispatch({
            type: 'STORE_PRODUTOSLIST',
            codigo: item.codigo,
            nome: item.nome,
            unidade: item.unidade,
            preco: item.preco,
            grupo: item.grupo,
            subgrupo: item.subgrupo,
            fracionado: item.fracionado ? item.fracionado : 'N',
            impressao: item.impressao,
          });
        });
      } catch (erro) {
        Alert.alert('erro produtos ' + erro);
      }

      try {
        let reqParams = setUtl(rConfig.ip);
        const respParams = await reqParams.get('config');
        let nParts = respParams.data;
        dispatch({
          type: 'STORE_PARAM',
          nroPedacos: nParts[0].V_LIMITE_PEDACOS,
        });
      } catch (erro) {
        Alert.alert(erro);
      }
      setAtende(true);
      setAtividade(false);
    };
    loadTabelas();
  }, [dispatch, rConfig.ip]);

  const handleSair = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  const handleCarregar = useCallback(async () => {
    setAtividade(true);
    try {
      let reqProdutosList = setUtl(rConfig.ip);
      const respProdutosList = await reqProdutosList.get('products');
      let dProdutos = [];
      let rProdutos = [];
      dProdutos = respProdutosList.data;
      console.log('passa por aqui');
      dispatch({type: 'CLEAR_PRODUTOSLIST'});
      dProdutos.forEach(item => {
        rProdutos.push({
          codigo: item.CODIGO.toString(),
          nome: item.NOME,
          unidade: item.UNIDADE,
          preco: item.PRECO,
          grupo: item.GRUPO,
          subgrupo: item.SUBGRUPO,
          fracionado: item.FRACIONADO ? item.FRACIONADO : 'N',
          impressao: item.IMPRESSAO,
        });
        dispatch({
          type: 'STORE_PRODUTOSLIST',
          codigo: item.CODIGO.toString(),
          nome: item.NOME,
          unidade: item.UNIDADE,
          preco: item.PRECO,
          grupo: item.GRUPO,
          subgrupo: item.SUBGRUPO,
          fracionado: item.FRACIONADO ? item.FRACIONADO : 'N',
          impressao: item.IMPRESSAO,
        });
      });
      setProdutosRealm(rProdutos);
    } catch (erro) {
      setAtividade(false);
      Alert.alert(erro);
    }

    try {
      let reqObsList = setUtl(rConfig.ip);
      const respObsList = await reqObsList.get('obs');
      let dObs = [];
      let rObs = [];
      dObs = respObsList.data;
      dispatch({type: 'CLEAR_OBSLIST'});
      dObs.forEach(item => {
        rObs.push({
          codigo: item.CODIGO.toString(),
          obs: item.OBS,
          grupo: item.GRUPO,
        });
        dispatch({
          type: 'STORE_OBSLIST',
          codigo: item.CODIGO.toString(),
          obs: item.OBS,
          grupo: item.GRUPO,
        });
      });
      setObsRealm(rObs);
    } catch (erro) {
      setAtividade(false);
      Alert.alert(erro);
    }

    setAtividade(false);
  }, [dispatch, rConfig.ip]);

  const handleAtendimento = useCallback(() => {
    if (atende === true) {
      navigation.navigate('Comandas');
    } else {
      Alert.alert('Necessário carregar tabelas antes de iniciar!');
    }
  }, [atende, navigation]);

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        {atividade && <ActivityIndicator size="large" color="#b8860b" />}
        {atividade && (
          <TextoBasico>Aguarde o carregamento das tabelas...</TextoBasico>
        )}
        <SubmitButton onPress={handleCarregar}>
          <SubmitText>Carregar tabelas</SubmitText>
        </SubmitButton>

        <SubmitButton onPress={handleAtendimento}>
          <SubmitText>Iniciar atendimento</SubmitText>
        </SubmitButton>

        <SubmitButton onPress={handleSair}>
          <SubmitText>Sair</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
