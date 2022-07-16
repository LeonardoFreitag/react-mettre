import React, {useState, useEffect, useCallback} from 'react';
import {Platform, Alert, Modal, Keyboard} from 'react-native';
import {
  Background,
  VerticalArea,
  VerticalAreaNovo,
  HorizontalAreaNovo,
  Container,
  TextoLogo,
  SubmitText,
  List,
  ItemRoute,
  MarketText,
  AddressText,
  ItemRouteNovo,
  MarketTextNovo,
  AddressTextNovo,
  ContainerHorizontal,
  HorizontButton,
  HorizontButtonGreen,
  HorizontButton3,
  SubmitText3,
  TextoModal,
  Input,
  ContainerModal,
  RepeatButton,
  RepeatButtonText,
  RepeatContainer,
  ProductAreanovo,
  RepeatContainerOld,
  ProductAreaOld,
  RepeatButtonOld,
} from './styles';
import {setUtl} from '../../services/api';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Atendimento({navigation}) {
  const dispatch = useDispatch();
  const rConfig = useSelector(state => state.config);
  const rComanda = useSelector(state => state.comanda);
  const rItensList = useSelector(state => state.itensList);
  const lerItens = useSelector(state => state.lerItens);
  const atendente = useSelector(state => state.atendente);

  const [mesaDestino, setMesaDestino] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const carregarItens = useCallback(async () => {
    try {
      if (lerItens.ler === true) {
        let reqItensList = setUtl(rConfig.ip);
        const respItensList = await reqItensList.get(
          `itens/${rComanda.codigo}`,
        );
        let dItens = [];
        dItens = respItensList.data;

        dispatch({type: 'CLEAR_ITENSLIST'});
        dItens.forEach(item => {
          dispatch({
            type: 'STORE_ITENSLIST',
            codigo: item.CODIGO,
            codMesa: item.CODMESA,
            codFunc: item.CODFUNC,
            codProd: item.CODPROD,
            descricao: item.DESCRICAO,
            unidade: item.UNIDADE,
            quantidade: item.QUANTIDADE,
            unitario: item.UNITARIO,
            total: item.TOTAL,
            hora: item.HORA,
            grupo: item.GRUPO,
            subgrupo: item.SUBGRUPO,
            impresso: item.IMPRESSO,
            obs: item.OBS,
            enviado: 'S',
            combine: '',
            codCombine: '',
          });
        });
        dispatch({
          type: 'STORE_LERITENS',
          ler: false,
        });
      }
    } catch (erro) {
      Alert.alert(`Erro: ${erro}`);
    }
  }, [dispatch, lerItens.ler, rComanda.codigo, rConfig.ip]);

  useEffect(() => {
    const loadItens = async () => {
      try {
        if (lerItens.ler === true) {
          let reqItensList = setUtl(rConfig.ip);
          const respItensList = await reqItensList.get(
            `itens/${rComanda.codigo}`,
          );
          let dItens = [];
          dItens = respItensList.data;

          dispatch({type: 'CLEAR_ITENSLIST'});
          dItens.forEach(item => {
            dispatch({
              type: 'STORE_ITENSLIST',
              codigo: item.CODIGO,
              codMesa: item.CODMESA,
              codFunc: item.CODFUNC,
              codProd: item.CODPROD,
              descricao: item.DESCRICAO,
              unidade: item.UNIDADE,
              quantidade: item.QUANTIDADE,
              unitario: item.UNITARIO,
              total: item.TOTAL,
              hora: item.HORA,
              grupo: item.GRUPO,
              subgrupo: item.SUBGRUPO,
              impresso: item.IMPRESSO,
              obs: item.OBS,
              enviado: 'S',
              combine: '',
              codCombine: '',
            });
          });
          dispatch({
            type: 'STORE_LERITENS',
            ler: false,
          });
        }
      } catch (erro) {
        Alert.alert(`erro na leitura dos itens ${erro}`);
      }
    };
    loadItens();
  }, [dispatch, lerItens.ler, rComanda.codigo, rConfig.ip]);

  const handleSair = useCallback(() => {
    dispatch({type: 'STORE_LERITENS', ler: true});
    dispatch({type: 'CLEAR_ITENSLIST'});
    navigation.navigate('Comandas');
  }, [dispatch, navigation]);

  const handleNovoItem = useCallback(() => {
    navigation.navigate('LancByCodigo');
  }, [navigation]);

  const handleLocalizar = useCallback(() => {
    navigation.navigate('Grupos');
  }, [navigation]);

  const handleEnviarModal = useCallback(async () => {
    try {
      console.log(`Final: ${mesaDestino}`);
      setModalVisible(false);
      rItensList.forEach((item, index) => {
        if (item.enviado === 'N') {
          if (item.combine === 'S') {
            enviarCombine(item);
          } else {
            enviar(item);
          }
        }
      });
      dispatch({
        type: 'STORE_LERITENS',
        ler: true,
      });
      carregarItens();
      navigation.navigate('Comandas');
    } catch (erro) {
      Alert.alert('Erro na chamda da função ' + erro);
    }
  }, [
    carregarItens,
    dispatch,
    enviar,
    enviarCombine,
    mesaDestino,
    navigation,
    rItensList,
  ]);

  const handleEnviar = useCallback(async () => {
    if (rConfig.destino) {
      setModalVisible(true);
    } else {
      try {
        rItensList.forEach((item, index) => {
          if (item.enviado === 'N') {
            if (item.combine === 'S') {
              enviarCombine(item);
            } else {
              enviar(item);
            }
          }
        });
        dispatch({
          type: 'STORE_LERITENS',
          ler: true,
        });
        carregarItens();
        navigation.navigate('Comandas');
      } catch (erro) {
        Alert.alert('Erro na chamda da função ' + erro);
      }
    }
  }, [
    carregarItens,
    dispatch,
    enviar,
    enviarCombine,
    navigation,
    rConfig.destino,
    rItensList,
  ]);

  const enviarCombine = useCallback(
    async item => {
      try {
        let reqItemInsert = setUtl(rConfig.ip);
        await reqItemInsert.put('itens/combine/', {
          codMesa: rComanda.codigo,
          codProduto: item.codProd,
          qtde: item.quantidade,
          obs: item.obs,
          codAtendente: atendente.codigo,
          codCombine: item.codCombine,
          destino: String(mesaDestino),
        });
      } catch (erro) {
        Alert.alert('Erro no envio ' + erro);
      }
    },
    [atendente.codigo, mesaDestino, rComanda.codigo, rConfig.ip],
  );

  const enviar = useCallback(
    async item => {
      console.log(mesaDestino);
      try {
        let reqItemInsert = setUtl(rConfig.ip);
        await reqItemInsert.put('itens', {
          codMesa: rComanda.codigo,
          codProduto: item.codProd,
          qtde: item.quantidade,
          obs: item.obs,
          codAtendente: atendente.codigo,
          destino: String(mesaDestino),
        });
      } catch (erro) {
        Alert.alert('Erro no envio ' + erro);
      }
    },
    [atendente.codigo, mesaDestino, rComanda.codigo, rConfig.ip],
  );

  const handleEdit = useCallback(
    data => {
      if (data.combine === 'S') {
        dispatch({type: 'STORE_GRUPO', grupo: data.grupo});
        dispatch({type: 'CLEAR_COMBINELIST'});
        rItensList.forEach(item => {
          if (item.codCombine === data.codCombine) {
            dispatch({
              type: 'STORE_COMBINELIST',
              codigo: item.codigo,
              codMesa: item.codMesa,
              codFunc: item.codFunc,
              codProd: item.codProd,
              descricao: item.descricao,
              unidade: item.unidade,
              quantidade: item.quantidade,
              unitario: item.unitario,
              total: item.total,
              hora: item.hora,
              grupo: item.grupo,
              subgrupo: item.subgrupo,
              impresso: item.impresso,
              obs: item.obs,
              enviado: item.enviado,
              combine: item.combine,
              codCombine: item.codCombine,
            });
          }
        });
        navigation.navigate('CombineEdit');
      } else {
        console.log(data);
        console.log('dados em edição');
        dispatch({
          type: 'STORE_ITEMEDIT',
          codigo: data.codigo,
          codMesa: data.codMesa,
          codFunc: data.codFunc,
          codProd: data.codProd,
          descricao: data.descricao,
          unidade: data.unidade,
          quantidade: data.quantidade,
          unitario: data.unitario,
          total: data.total,
          hora: data.hora,
          grupo: data.grupo,
          subgrupo: data.subgrupo,
          impresso: data.impresso,
          obs: data.obs,
          enviado: data.enviado,
          combine: data.combine,
          codCombine: data.codCombine,
        });
        navigation.navigate('EditaProduto');
      }
    },
    [dispatch, navigation, rItensList],
  );

  const handleItemRepeat = useCallback(
    item => {
      Alert.alert('Confirmação', 'Repetir este item?', [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: async () => {
            let nCodigo = new Date().getTime();
            dispatch({
              type: 'STORE_ITENSLIST',
              codigo: nCodigo,
              codMesa: item.codMesa,
              codFunc: item.codFunc,
              codProd: item.codProd,
              descricao: item.descricao,
              unidade: item.unidade,
              quantidade: 1,
              unitario: item.unitario,
              total: 1 * item.unitario,
              hora: item.hora,
              grupo: item.grupo,
              subgrupo: item.subgrupo,
              impresso: item.impresso,
              obs: item.obs,
              enviado: 'N',
              combine: item.combine,
              codCombine: item.codCombine,
            });
          },
        },
      ]);
    },
    [dispatch],
  );

  const handleRemoveItem = useCallback(
    item => {
      // const itemIndex = rItensList.itemIndex(opt => opt.codigo === item.codigo);
      dispatch({
        type: 'DELETE_ITEMLIST',
        codigo: item.codigo,
      });
    },
    [dispatch],
  );

  function ItemList({data}) {
    if (data.enviado === 'S') {
      return (
        <ItemRoute>
          <VerticalArea>
            <ProductAreaOld>
              <MarketText>{`${data.codProd} - ${data.descricao}`}</MarketText>
              <AddressText>
                {`Qtde. ${data.quantidade} Vlr. Total ${data.total
                  .toFixed(2)
                  .replace('.', ',')
                  .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')} Obs.: ${data.obs}`}
              </AddressText>
            </ProductAreaOld>
          </VerticalArea>
          <RepeatContainerOld>
            <RepeatButtonOld onPress={() => handleItemRepeat(data)}>
              <RepeatButtonText>
                <Icon name="repeat" size={30} color="#fff" />
              </RepeatButtonText>
            </RepeatButtonOld>
          </RepeatContainerOld>
        </ItemRoute>
      );
    } else {
      return (
        <ItemRouteNovo>
          <VerticalAreaNovo>
            <ProductAreanovo>
              <MarketTextNovo>
                {`${data.codProd} - ${data.descricao}`}
              </MarketTextNovo>
              <AddressTextNovo>
                {`Qtde. ${data.quantidade} Vlr. Total ${data.total
                  .toFixed(2)
                  .replace('.', ',')
                  .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')} Obs.: ${data.obs}`}
              </AddressTextNovo>
            </ProductAreanovo>
            <HorizontalAreaNovo>
              <RepeatContainer>
                <RepeatButton onPress={() => handleEdit(data)}>
                  <RepeatButtonText>
                    <Icon name="edit" size={30} color="green" />
                  </RepeatButtonText>
                </RepeatButton>
              </RepeatContainer>
              <RepeatContainer>
                <RepeatButton onPress={() => handleRemoveItem(data)}>
                  <RepeatButtonText>
                    <Icon name="delete" size={30} color="red" />
                  </RepeatButtonText>
                </RepeatButton>
              </RepeatContainer>
              <RepeatContainer>
                <RepeatButton onPress={() => handleItemRepeat(data)}>
                  <RepeatButtonText>
                    <Icon name="repeat" size={30} color="#fff" />
                  </RepeatButtonText>
                </RepeatButton>
              </RepeatContainer>
            </HorizontalAreaNovo>
          </VerticalAreaNovo>
        </ItemRouteNovo>
      );
    }
  }

  const handleCombinado = useCallback(() => {
    navigation.navigate('CombGrupos');
  }, [navigation]);

  const handleChangeDestino = useCallback(
    data => {
      console.log(`anterior: ${mesaDestino}`);
      let intCommanda = Number(data);
      let changedCommanda = String(intCommanda);
      setMesaDestino(changedCommanda);
    },
    [mesaDestino],
  );

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <TextoLogo>COMANDA/MESA: {rComanda.mesa}</TextoLogo>
        <List
          keyExtractor={item => item.codigo}
          data={rItensList}
          renderItem={({item}) => <ItemList data={item} />}
        />

        <ContainerHorizontal>
          <HorizontButton3 onPress={handleNovoItem}>
            <SubmitText3>Adicionar produto</SubmitText3>
          </HorizontButton3>

          <HorizontButton3 onPress={handleLocalizar}>
            <SubmitText3>Localizar produto</SubmitText3>
          </HorizontButton3>

          <HorizontButton3 onPress={handleCombinado}>
            <SubmitText3>Pedido combinado</SubmitText3>
          </HorizontButton3>
        </ContainerHorizontal>

        <ContainerHorizontal>
          <HorizontButton onPress={handleSair}>
            <SubmitText>Voltar</SubmitText>
          </HorizontButton>

          <HorizontButtonGreen onPress={handleEnviar}>
            <SubmitText>Enviar pedido</SubmitText>
          </HorizontButtonGreen>
        </ContainerHorizontal>
      </Container>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <ContainerModal>
          <TextoModal>Mesa destino:</TextoModal>
          <Input
            autoFocus={true}
            autoCorrect={false}
            autoCapitalize="none"
            value={mesaDestino}
            onChangeText={cmd => handleChangeDestino(cmd)}
            keyboardType="number-pad"
          />
          <HorizontButtonGreen onPress={handleEnviarModal}>
            <SubmitText>Confirmar</SubmitText>
          </HorizontButtonGreen>
        </ContainerModal>
      </Modal>
    </Background>
  );
}
