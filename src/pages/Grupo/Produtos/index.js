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
  ContainerForm,
  TextNovo,
  Input,
  ProdModal,
  VerticalArea,
  AreaButton,
  ButtonSelect,
  ButtonSelectText,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProdutosGrupo({navigation}) {
  const dispatch = useDispatch();
  const atendente = useSelector(state => state.atendente);
  const rComanda = useSelector(state => state.comanda);
  const grupoSel = useSelector(state => state.grupo);
  const produtosList = useSelector(state => state.produtosList);

  const [prodList, setProdList] = useState([]);
  const [prodListFilter, setProdListFilter] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [qtde, setQtde] = useState('1');
  const [prodSel, setProdSel] = useState('');
  const [typingProduct, setTypingProduct] = useState('');

  useEffect(() => {
    const loadGrupos = () => {
      try {
        let prods = produtosList.filter(opt => opt.subgrupo === grupoSel.grupo);
        // produtosList.forEach(item => {
        //   if (item.subgrupo === grupoSel.grupo) {
        //     prods.push(item);
        //   }
        // });
        setProdList(prods);
        setProdListFilter(prods);
      } catch (erro) {}
    };
    loadGrupos();
  }, [grupoSel.grupo, produtosList]);

  const handleSelect = useCallback(data => {
    setQtde('1');
    setModalVisible(true);
    let p = {
      codigo: data.codigo,
      nome: data.nome,
      unidade: data.unidade,
      preco: data.preco,
      grupo: data.grupo,
      subgrupo: data.subgrupo,
      impressao: data.impressao,
    };
    setProdSel(p);
  }, []);

  const handleVoltar = useCallback(() => {
    navigation.navigate('Grupos');
  }, [navigation]);

  const handleConfirm = useCallback(() => {
    try {
      let nCodigo = new Date().getTime();
      dispatch({
        type: 'STORE_ITEMEDIT',
        codigo: nCodigo,
        codMesa: rComanda.codigo,
        codFunc: atendente.codigo,
        codProd: prodSel.codigo,
        descricao: prodSel.nome,
        unidade: prodSel.unidade,
        quantidade: qtde,
        unitario: prodSel.preco,
        total: prodSel.preco * qtde,
        hora: nCodigo,
        grupo: prodSel.grupo,
        subgrupo: prodSel.subgrupo,
        impresso: 'N',
        obs: '',
        enviado: 'N',
      });
      setModalVisible(false);
      navigation.navigate('ObsGrupo');
    } catch (erro) {
      Alert.alert(erro);
    }
  }, [
    atendente.codigo,
    dispatch,
    navigation,
    prodSel.codigo,
    prodSel.grupo,
    prodSel.nome,
    prodSel.preco,
    prodSel.subgrupo,
    prodSel.unidade,
    qtde,
    rComanda.codigo,
  ]);

  const handleCancel = useCallback(() => {
    setModalVisible(false);
  }, []);

  function ItemList({data}) {
    return (
      <ItemRoute>
        <VerticalArea>
          <MarketText>{data.nome}</MarketText>
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

  const handleSetTypingProduct = useCallback(
    data => {
      const newData = String(data).toUpperCase();
      setTypingProduct(newData);
      let filterList = [];
      // console.log(newData.length);
      if (newData.length > 0) {
        filterList = prodList.filter(opt => opt.nome.includes(newData));
      } else {
        filterList = prodList;
      }
      setProdListFilter(filterList);
    },
    [prodList],
  );

  return (
    <Background>
      <Input
        placeholder="Produto..."
        autoCorrect={false}
        autoCapitalize="none"
        value={typingProduct}
        keyboardType={'default'}
        onChangeText={c => handleSetTypingProduct(c)}
      />

      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <TextoLogo>GRUPO: {grupoSel.grupo}</TextoLogo>

        <Modal animationType="slide" visible={modalVisible} transparent={true}>
          <ContainerModal>
            <ProdModal>Código: {prodSel.codigo}</ProdModal>
            <ProdModal>Produto: {prodSel.nome}</ProdModal>

            <ContainerForm>
              <TextNovo>Quantidade:</TextNovo>
              <Input
                autoFocus={true}
                placeholder="0"
                autoCorrect={false}
                autoCapitalize="none"
                value={qtde}
                onChangeText={q => setQtde(q)}
                keyboardType="number-pad"
              />
            </ContainerForm>

            <SubmitButton onPress={handleConfirm}>
              <SubmitText>Confirmar</SubmitText>
            </SubmitButton>
            <SubmitButton onPress={handleCancel}>
              <SubmitText>Cancelar</SubmitText>
            </SubmitButton>
          </ContainerModal>
        </Modal>

        <List
          keyExtractor={item => item.codigo}
          data={prodListFilter}
          renderItem={({item}) => <ItemList data={item} />}
        />
        <SubmitButton onPress={handleVoltar}>
          <SubmitText>Voltar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
