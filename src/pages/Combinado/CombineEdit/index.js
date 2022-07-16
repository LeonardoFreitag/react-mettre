import React, {useState, useEffect, useCallback} from 'react';
import {Platform, Modal, Alert} from 'react-native';
import {
  Background,
  Container,
  TextoLogo,
  TextoBasico,
  SubmitButton,
  SubmitText,
  List,
  ItemRoute,
  MarketText,
  ContainerModal,
  Input,
  ProdModal,
  TextoComb,
  ItemComb,
  ItemGroup,
  TextoGroup,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';

export default function CombineEdit({navigation}) {
  const dispatch = useDispatch();
  const atendente = useSelector(state => state.atendente);
  const rParam = useSelector(state => state.paramReducer);
  const rComanda = useSelector(state => state.comanda);
  const grupoSel = useSelector(state => state.grupo);
  const obsList = useSelector(state => state.obsList);
  const produtosList = useSelector(state => state.produtosList);
  const combineList = useSelector(state => state.combineReducer);
  const rItensList = useSelector(state => state.itensList);
  const [prodList, setProdList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [obsGrupo, setObsGrupo] = useState([]);
  const [obs, setObs] = useState('');
  const [productSel, setProductSel] = useState();
  const [combine, setCombine] = useState([]);
  const [editCod, setEditCod] = useState('');

  useEffect(() => {
    const loadCombine = async () => {
      setCombine([]);
      let itens = [];
      combineList.forEach(item => {
        itens.push(item);
      });
      setEditCod(itens[0].codCombine);
      setCombine(itens);
    };

    const loadObsGrupo = async () => {
      try {
        setObsGrupo([]);
        let g = [];
        obsList.forEach(item => {
          if (item.grupo === grupoSel.grupo) {
            g.push(item);
          }
        });
        setObsGrupo(g);
      } catch (erro) {
        Alert.alert(erro);
      }
    };

    const loadProducts = async () => {
      try {
        setProdList([]);
        let prods = [];
        produtosList.forEach(item => {
          if (item.grupo === grupoSel.grupo) {
            prods.push(item);
          }
        });
        setProdList(prods);
      } catch (erro) {
        Alert.alert(erro);
      }
    };
    loadCombine();
    loadObsGrupo();
    loadProducts();
  }, [combineList, grupoSel.grupo, obsList, produtosList]);

  const handleSelect = useCallback(data => {
    setObs('');
    setProductSel(data);
    setModalVisible(true);
  }, []);

  const handleBack = useCallback(() => {
    navigation.navigate('CombGrupos');
  }, [navigation]);

  const handleConfirmProducts = useCallback(() => {
    let newItensComanda = [];
    rItensList.forEach(item => {
      if (item.codCombine !== editCod) {
        newItensComanda.push(item);
      }
    });

    combine.forEach(item => {
      newItensComanda.push(item);
    });
    let amount = 1;
    let fraction = (1 / combine.length).toFixed(2);
    let countDown = combine.length;
    dispatch({type: 'CLEAR_ITENSLIST'});

    newItensComanda.forEach(item => {
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
        enviado: item.enviado,
        combine: item.combine,
        codCombine: item.codCombine,
      });
      amount = amount - fraction;
      countDown = countDown - 1;
    });
    navigation.navigate('Atendimento');
  }, [combine, dispatch, editCod, navigation, rItensList]);

  const handleConfirmObs = useCallback(() => {
    if (combine.length < rParam.nroPedacos) {
      setModalVisible(false);
      insereItem(productSel);
    } else {
      Alert.alert(
        'passou do limite ' + combine.length + ' / ' + rParam.nroPedacos,
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
        codCombine: editCod,
      };
      combine.push(item);
    },
    [atendente.codigo, combine, editCod, obs, rComanda.codigo],
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
        if (item.codigo !== data.codigo) {
          newList.push(item);
        }
      });
      setCombine(newList);
    },
    [combine],
  );

  function ItemList({data}) {
    return (
      <ItemRoute onPress={() => handleSelect(data)}>
        <MarketText>{data.nome}</MarketText>
        <TextoBasico>
          {`Preço: R$ ${data.preco
            .toFixed(2)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}`}
        </TextoBasico>
      </ItemRoute>
    );
  }

  function CombineItem({data}) {
    return (
      <ItemComb onPress={() => handleDelete(data)}>
        <TextoComb>{`${data.descricao} ${data.obs}`}</TextoComb>
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
        <TextoLogo>PEDIDO COMBINADO (EDIÇÃO)</TextoLogo>
        <TextoLogo>GRUPO: {grupoSel.grupo}</TextoLogo>

        <List
          keyExtractor={item => item.codigo}
          data={prodList}
          renderItem={({item}) => <ItemList data={item} />}
        />
      </Container>
      <Container>
        <TextoLogo>Área do pedido</TextoLogo>
        <List
          keyExtractor={item => item.codigo}
          data={combine}
          renderItem={({item}) => <CombineItem data={item} />}
        />
        <SubmitButton onPress={handleConfirmProducts}>
          <SubmitText>Confirmar pedido</SubmitText>
        </SubmitButton>
      </Container>
      <SubmitButton onPress={handleBack}>
        <SubmitText>Voltar</SubmitText>
      </SubmitButton>

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

          <SubmitButton onPress={handleConfirmObs}>
            <SubmitText>Confirmar</SubmitText>
          </SubmitButton>
          <SubmitButton onPress={handleCancelObs}>
            <SubmitText>Cancelar</SubmitText>
          </SubmitButton>
        </ContainerModal>
      </Modal>
    </Background>
  );
}
