import React, {useState, useEffect, useCallback} from 'react';
import {Platform, Modal, Alert} from 'react-native';
import {
  Background,
  Container,
  TextoLogo,
  SubmitButton,
  SubmitText,
  List,
  ItemRoute,
  MarketText,
  ContainerModal,
  Input,
  ProdModal,
  ContainerHorizontal,
  TextoComb,
  ItemComb,
  ItemGroup,
  TextoGroup,
  ContainerSabores,
  TituloSabore,
  Subtitulo,
  VerticalArea,
  AreaButton,
  ButtonSelect,
  ButtonSelectText,
  HorizontButton,
  HorizontButtonGreen,
  SubmitButtonGreen,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CombProdutos({navigation}) {
  const dispatch = useDispatch();
  const atendente = useSelector(state => state.atendente);
  const rParam = useSelector(state => state.paramReducer);
  const rComanda = useSelector(state => state.comanda);
  const grupoSel = useSelector(state => state.grupo);
  const obsList = useSelector(state => state.obsList);
  const produtosList = useSelector(state => state.produtosList);
  const [prodList, setProdList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [combine, setCombine] = useState([]);
  const [obsGrupo, setObsGrupo] = useState([]);
  const [obs, setObs] = useState('');
  const [productSel, setProductSel] = useState();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setProdList([]);
        let prods = [];
        produtosList.forEach(item => {
          if (item.subgrupo === grupoSel.grupo) {
            prods.push(item);
          }
        });
        setProdList(prods);
      } catch (erro) {
        Alert.alert(erro);
      }
    };
    loadProducts();
  }, [grupoSel.grupo, produtosList]);

  const handleSelect = useCallback(
    data => {
      setObs('');
      setProductSel(data);

      try {
        setObsGrupo([]);
        let g = [];
        obsList.forEach(item => {
          if (item.grupo === data.grupo) {
            g.push(item);
          }
        });
        setObsGrupo(g);
      } catch (erro) {
        Alert.alert(erro);
      }

      setModalVisible(true);
    },
    [obsList],
  );

  const handleBack = useCallback(() => {
    navigation.navigate('CombGrupos');
  }, [navigation]);

  const handleConfirmProducts = useCallback(() => {
    let amount = 1;
    let fraction = (1 / combine.length).toFixed(2);

    let comb = getRandomIntInclusive(1, 100000);

    let countDown = combine.length;

    combine.forEach(item => {
      let qLanc = 1;
      if (countDown === 1) {
        qLanc = parseFloat(amount).toFixed(2);
      } else {
        qLanc = parseFloat(fraction).toFixed(2);
      }
      dispatch({
        type: 'STORE_ITENSLIST',
        codigo: item.codigo,
        codMesa: item.codMesa,
        codFunc: item.codFunc,
        codProd: item.codProd,
        descricao: item.descricao,
        unidade: item.unidade,
        quantidade: qLanc,
        unitario: item.unitario,
        total: item.unitario * qLanc,
        hora: item.hora,
        grupo: item.grupo,
        subgrupo: item.subgrupo,
        impresso: item.impresso,
        obs: item.obs,
        enviado: 'N',
        combine: 'S',
        codCombine: comb.toString(),
      });
      amount = amount - fraction;
      countDown = countDown - 1;
    });
    navigation.navigate('Atendimento');
  }, [combine, dispatch, getRandomIntInclusive, navigation]);

  const getRandomIntInclusive = useCallback((min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  const handleConfirmObs = useCallback(() => {
    if (combine.length < rParam.nroPedacos) {
      setModalVisible(false);
      insereItem(productSel);
    } else {
      Alert.alert(
        `Ultrapassou o limite ${combine.length} / ${rParam.nroPedacos}`,
      );
    }
  }, [combine.length, insereItem, productSel, rParam.nroPedacos]);

  const insereItem = useCallback(
    p => {
      let nCodigo = new Date().getTime();
      let item = {
        codigo: nCodigo,
        codMesa: rComanda.codigo,
        codFunc: atendente.codigo,
        codProd: p.codigo,
        descricao: p.nome,
        unidade: p.unidade,
        quantidade: 1,
        unitario: p.preco,
        total: p.preco * 1,
        hora: nCodigo,
        grupo: p.grupo,
        subgrupo: p.subgrupo,
        impresso: 'N',
        obs: obs,
        enviado: 'N',
        combine: 'S',
        cod: '',
      };
      combine.push(item);
    },
    [atendente.codigo, combine, obs, rComanda.codigo],
  );

  const handleCancelObs = useCallback(() => {
    setProductSel();
    setModalVisible(false);
  }, []);

  const handleDelete = useCallback(
    data => {
      setCombine([]);
      let newList = [];
      combine.forEach(item => {
        if (item.codigo != data.codigo) {
          newList.push(item);
        }
      });
      setCombine(newList);
    },
    [combine],
  );

  function ItemList({data}) {
    return (
      <ItemRoute>
        <VerticalArea>
          <MarketText>{`${data.nome}`}</MarketText>
          <MarketText>
            {`Preço: R$ ${data.preco
              .toFixed(2)
              .replace('.', ',')
              .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}`}
          </MarketText>
        </VerticalArea>
        <AreaButton>
          <ButtonSelect onPress={() => handleSelect(data)}>
            <ButtonSelectText>
              <Icon name="check" size={30} color="green" />
            </ButtonSelectText>
          </ButtonSelect>
        </AreaButton>
      </ItemRoute>
    );
  }

  function CombineItem({data}) {
    return (
      <ItemComb>
        <VerticalArea>
          <TextoComb>{`${data.descricao} ${data.obs}`}</TextoComb>
        </VerticalArea>
        <AreaButton>
          <ButtonSelect onPress={() => handleDelete(data)}>
            <ButtonSelectText>
              <Icon name="delete" size={30} color="red" />
            </ButtonSelectText>
          </ButtonSelect>
        </AreaButton>
      </ItemComb>
    );
  }

  function ItemListGrupo({data}) {
    return (
      <ItemGroup onPress={() => handleSelObs(data)}>
        <TextoGroup> {data.obs} </TextoGroup>
      </ItemGroup>
    );
  }

  const handleSelObs = useCallback(
    data => {
      let o = '';
      if (obs !== '') {
        o = obs + '; ' + data.obs;
      } else {
        o = data.obs;
      }
      setObs(o);
    },
    [obs],
  );

  const handleClearObs = useCallback(() => {
    setObs('');
  }, []);

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <TextoLogo>PEDIDO COMBINADO</TextoLogo>
        <Subtitulo>SUBGRUPO: {grupoSel.grupo}</Subtitulo>

        <List
          keyExtractor={item => item.codigo}
          data={prodList}
          renderItem={({item}) => <ItemList data={item} />}
        />
      </Container>

      <ContainerSabores>
        <TituloSabore>Sabores selecionados</TituloSabore>
        <List
          keyExtractor={item => item.codigo}
          data={combine}
          renderItem={({item}) => <CombineItem data={item} />}
        />
      </ContainerSabores>

      <ContainerHorizontal>
        <HorizontButton onPress={handleBack}>
          <SubmitText>Voltar</SubmitText>
        </HorizontButton>
        <HorizontButtonGreen onPress={handleConfirmProducts}>
          <SubmitText>Confirmar pedido</SubmitText>
        </HorizontButtonGreen>
      </ContainerHorizontal>

      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <ContainerModal>
          <ProdModal>OBSERVAÇÕES</ProdModal>

          <List
            numColumns={2}
            keyExtractor={item => item.codigo}
            data={obsGrupo}
            renderItem={({item}) => <ItemListGrupo data={item} />}
          />

          <Input
            placeholder="Observações..."
            autoCorrect={false}
            autoCapitalize="none"
            value={obs}
            onChangeText={o => setObs(o)}
            keyboardType="default"
          />
          <SubmitButton onPress={handleClearObs}>
            <SubmitText>Limpar Observações</SubmitText>
          </SubmitButton>

          <SubmitButtonGreen onPress={handleConfirmObs}>
            <SubmitText>Confirmar</SubmitText>
          </SubmitButtonGreen>
          <SubmitButton onPress={handleCancelObs}>
            <SubmitText>Cancelar</SubmitText>
          </SubmitButton>
        </ContainerModal>
      </Modal>
    </Background>
  );
}
