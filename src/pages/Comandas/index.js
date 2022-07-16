import React, {useState, useEffect, useCallback} from 'react';
import {Platform, Alert} from 'react-native';
import {
  Background,
  Container,
  TextoLogo,
  SubmitText,
  Item,
  ItemFechado,
  TextItem,
  List,
  ComandaText,
  Logo,
  Input,
  ContainerHorizontal,
  HorizButton,
  ComandaTextNovo,
  TextItemNovo,
  InputArea,
  HorizButtonGreen,
} from './styles';
import {setUtl} from '../../services/api';
import {useSelector, useDispatch} from 'react-redux';

export default function Comandas({navigation}) {
  const dispatch = useDispatch();

  const rConfig = useSelector(state => state.config);
  const rComandaList = useSelector(state => state.comandaList);
  const atendente = useSelector(state => state.atendente);
  const [isLoading, setIsLoading] = useState(false);
  const [filterComandas, setFilteredComandas] = useState([]);
  const [typedCmd, setTypedCmd] = useState('');

  useEffect(() => {
    const loadComandas = async () => {
      try {
        let reqComandaList = setUtl(rConfig.ip);
        const respComandaList = await reqComandaList.get('mesas');
        let dComanda = [];
        dComanda = respComandaList.data;
        dispatch({type: 'CLEAR_COMANDALIST'});
        let cmds = [];
        dComanda.forEach(item => {
          dispatch({
            type: 'STORE_COMANDALIST',
            codigo: item.CODIGO,
            mesa: item.MESA,
            subtotal: item.SUBTOTAL,
            total: item.TOTAL,
            status: item.STATUS,
          });
          cmds.push({
            codigo: item.CODIGO,
            mesa: item.MESA,
            subtotal: item.SUBTOTAL,
            total: item.TOTAL,
            status: item.STATUS,
          });
        });
        setFilteredComandas(cmds);
      } catch (erro) {
        Alert.alert(erro);
      }
    };
    loadComandas();
  }, [dispatch, rConfig.ip]);

  const carregaComandas = useCallback(async () => {
    try {
      let reqComandaList = setUtl(rConfig.ip);
      const respComandaList = await reqComandaList.get('mesas');
      let dComanda = [];
      dComanda = respComandaList.data;
      dispatch({type: 'CLEAR_COMANDALIST'});
      let cmds = [];
      dComanda.forEach(item => {
        dispatch({
          type: 'STORE_COMANDALIST',
          codigo: item.CODIGO,
          mesa: item.MESA,
          subtotal: item.SUBTOTAL,
          total: item.TOTAL,
          status: item.STATUS,
        });
        cmds.push({
          codigo: item.CODIGO,
          mesa: item.MESA,
          subtotal: item.SUBTOTAL,
          total: item.TOTAL,
          status: item.STATUS,
        });
      });
      setFilteredComandas(cmds);
    } catch (erro) {
      Alert.alert(erro);
    }
  }, [dispatch, rConfig.ip]);

  const handleExit = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  const handleAbreComanda = useCallback(
    data => {
      if (data.status === 'A') {
        dispatch({
          type: 'CLEAR_COMANDA',
        });

        dispatch({
          type: 'STORE_COMANDA',
          codigo: data.codigo,
          mesa: data.mesa,
          subtotal: data.subtotal,
          total: data.total,
          status: data.status,
        });
        navigation.navigate('Atendimento');
      } else {
        Alert.alert('Comanda ' + data.mesa + ' fechada!');
      }
    },
    [dispatch, navigation],
  );

  function ItemList({data}) {
    if (data.status === 'A') {
      return (
        <Item onPress={() => handleAbreComanda(data)}>
          <Logo source={require('../../assets/restaurant.png')} />
          <ComandaText> {data.mesa}</ComandaText>
          <TextItem> Vlr. Total: R$ {data.total.toFixed(2)}</TextItem>
          <TextItem> Código: {data.codigo}</TextItem>
        </Item>
      );
    } else {
      return (
        <ItemFechado onPress={() => handleAbreComanda(data)}>
          <Logo source={require('../../assets/restaurant.png')} />
          <ComandaTextNovo> {data.mesa}</ComandaTextNovo>
          <TextItemNovo> Vlr. Total: R$ {data.total.toFixed(2)}</TextItemNovo>
          <TextItemNovo> Código: {data.codigo}</TextItemNovo>
        </ItemFechado>
      );
    }
  }

  const handleNovo = useCallback(async () => {
    if (typedCmd.trim() !== '') {
      if (filterComandas.length > 0) {
        const doOpenCmd = filterComandas.filter(opt => opt.mesa === typedCmd);
        handleAbreComanda(doOpenCmd[0]);
      } else {
        let ok = true;

        rComandaList.forEach(item => {
          if (item.mesa === typedCmd) {
            ok = false;
          }
        });

        if (ok === true) {
          let reqComandaInsert = setUtl(rConfig.ip);
          const resp = await reqComandaInsert.put('mesas', {
            mesa: typedCmd,
            codAtendente: atendente.codigo,
          });

          let nCodigo = resp.data[0].ORETORNO;

          if (nCodigo === 0) {
            Alert.alert('Comanda/Mesa está fechada!');
          } else {
            let dt = {
              codigo: nCodigo,
              mesa: typedCmd,
              subtotal: 0,
              total: 0,
              status: 'A',
            };

            dispatch({
              type: 'STORE_COMANDALIST',
              codigo: dt.codigo,
              mesa: dt.mesa,
              subtotal: dt.subtotal,
              total: dt.total,
              status: dt.status,
            });
            handleAbreComanda(dt);
          }
        } else {
          Alert.alert('abre comanda já existente');
          // faz o código pra abrir comanda existente
        }
      }
    }
  }, [
    atendente.codigo,
    dispatch,
    filterComandas,
    handleAbreComanda,
    rComandaList,
    rConfig.ip,
    typedCmd,
  ]);

  const handleFiterComanda = useCallback(
    cmd => {
      if (cmd.trim() === '') {
        setTypedCmd('');
        const allComandas = rComandaList;
        setFilteredComandas(allComandas);
      } else {
        setTypedCmd(cmd);
        const allComandas = rComandaList.filter(opt => opt.mesa === cmd);
        setFilteredComandas(allComandas);
      }
    },
    [rComandaList],
  );

  return (
    <Background>
      <InputArea>
        <TextoLogo>COMANDAS</TextoLogo>
        <Input
          autoFocus={true}
          autoCorrect={false}
          autoCapitalize="none"
          value={typedCmd}
          onChangeText={cmd => handleFiterComanda(cmd)}
          keyboardType="number-pad"
        />
      </InputArea>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <List
          numColumns={2}
          data={filterComandas}
          keyExtractor={filterComandas.CODIGO}
          renderItem={({item}) => <ItemList data={item} />}
          refreshing={isLoading}
          onRefresh={carregaComandas}
        />
        <ContainerHorizontal>
          <HorizButton onPress={handleExit}>
            <SubmitText>Sair</SubmitText>
          </HorizButton>
          <HorizButtonGreen onPress={handleNovo}>
            <SubmitText>Confirma</SubmitText>
          </HorizButtonGreen>
        </ContainerHorizontal>
      </Container>
    </Background>
  );
}
