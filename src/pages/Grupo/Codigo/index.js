import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {Platform, Alert} from 'react-native';
import {
  Background,
  Container,
  TextoLogo,
  SubmitButton,
  SubmitText,
  ContainerForm,
  TextNovo,
  Input,
  ProdModal,
  SubmitButtonGreen,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';

export default function LancByCodigo({navigation}) {
  const dispatch = useDispatch();
  const atendente = useSelector(state => state.atendente);
  const rComanda = useSelector(state => state.comanda);
  const produtosList = useSelector(state => state.produtosList);
  const [codigo, setCodigo] = useState('');
  const [qtde, setQtde] = useState('1');
  const [prodSel, setProdSel] = useState('');

  useEffect(() => {
    const loadProduto = async () => {
      try {
        produtosList.forEach(item => {
          if (item.codigo === codigo) {
            setProdSel(item);
          }
        });
      } catch (erro) {
        Alert.alert(erro);
      }
    };
    loadProduto();
  }, [codigo, produtosList]);

  const handleSetCodigo = useCallback(dataCod => {
    if (dataCod) {
      setCodigo(dataCod);
    } else {
      setCodigo('');
    }
  }, []);

  const descProdSel = useMemo(() => {
    return prodSel && codigo !== '' ? prodSel.nome : '';
  }, [codigo, prodSel]);

  const handleConfirm = useCallback(() => {
    if (codigo !== '' && qtde !== '') {
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
        navigation.navigate('ObsGrupo');
      } catch (erro) {
        Alert.alert(erro);
      }
    }
  }, [
    atendente.codigo,
    codigo,
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
    navigation.navigate('Atendimento');
  }, [navigation]);

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <TextoLogo>Inserir produto</TextoLogo>

        <ContainerForm>
          <TextNovo>Código:</TextNovo>
          <Input
            autoFocus={true}
            autoCorrect={false}
            autoCapitalize="none"
            value={codigo}
            onChangeText={c => handleSetCodigo(c)}
            keyboardType="number-pad"
          />
          <ProdModal>{`Produto: ${descProdSel}`}</ProdModal>

          <TextNovo>Quantidade:</TextNovo>
          <Input
            placeholder="0"
            autoCorrect={false}
            autoCapitalize="none"
            value={qtde}
            onChangeText={q => setQtde(q)}
            keyboardType="number-pad"
          />
        </ContainerForm>

        <SubmitButtonGreen onPress={handleConfirm}>
          <SubmitText>Confirmar</SubmitText>
        </SubmitButtonGreen>
        <SubmitButton onPress={handleCancel}>
          <SubmitText>Cancelar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
