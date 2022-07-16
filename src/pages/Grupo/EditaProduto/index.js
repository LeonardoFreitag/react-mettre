import React, {useState, useEffect, useCallback} from 'react';
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
  InputObs,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';

export default function EditaProduto({navigation}) {
  const dispatch = useDispatch();
  const itensList = useSelector(state => state.itensList);
  const itemEdit = useSelector(state => state.itemEdit);
  const [qtde, setQtde] = useState('1');
  const [obs, setObs] = useState('');

  useEffect(() => {
    const loadItem = async () => {
      setQtde(String(itemEdit.quantidade));
      setObs(itemEdit.obs);
    };
    loadItem();
  }, [itemEdit.obs, itemEdit.quantidade]);

  const handleConfirm = useCallback(() => {
    if (qtde !== '') {
      try {
        handleExcluir();
        dispatch({
          type: 'STORE_ITENSLIST',
          codigo: itemEdit.codigo,
          codMesa: itemEdit.codMesa,
          codFunc: itemEdit.codFunc,
          codProd: itemEdit.codProd,
          descricao: itemEdit.descricao,
          unidade: itemEdit.unidade,
          quantidade: qtde,
          unitario: itemEdit.unitario,
          total: itemEdit.unitario * qtde,
          hora: itemEdit.hora,
          grupo: itemEdit.grupo,
          subgrupo: itemEdit.subgrupo,
          impresso: itemEdit.impresso,
          obs: obs,
          enviado: itemEdit.enviado,
        });
        navigation.navigate('Atendimento');
      } catch (erro) {
        Alert.alert(erro);
      }
    }
  }, [
    dispatch,
    handleExcluir,
    itemEdit.codFunc,
    itemEdit.codMesa,
    itemEdit.codProd,
    itemEdit.codigo,
    itemEdit.descricao,
    itemEdit.enviado,
    itemEdit.grupo,
    itemEdit.hora,
    itemEdit.impresso,
    itemEdit.subgrupo,
    itemEdit.unidade,
    itemEdit.unitario,
    navigation,
    obs,
    qtde,
  ]);

  const handleVoltar = useCallback(() => {
    navigation.navigate('Atendimento');
  }, [navigation]);

  const handleExcluir = useCallback(() => {
    let nLista = [];
    itensList.forEach(i => {
      if (i.codigo !== itemEdit.codigo) {
        nLista.push(i);
      }
    });
    dispatch({
      type: 'CLEAR_ITENSLIST',
    });
    nLista.forEach(n => {
      dispatch({
        type: 'STORE_ITENSLIST',
        codigo: n.codigo,
        codMesa: n.codMesa,
        codFunc: n.codFunc,
        codProd: n.codProd,
        descricao: n.descricao,
        unidade: n.unidade,
        quantidade: n.quantidade,
        unitario: n.unitario,
        total: n.total,
        hora: n.hora,
        grupo: n.grupo,
        subgrupo: n.subgrupo,
        impresso: n.impresso,
        obs: n.obs,
        enviado: n.enviado,
      });
    });
    navigation.navigate('Atendimento');
  }, [dispatch, itemEdit.codigo, itensList, navigation]);

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <TextoLogo>Alterar ítem</TextoLogo>

        <ContainerForm>
          <ProdModal>{`Produto: ${itemEdit.descricao}`}</ProdModal>

          <TextNovo>Quantidade:</TextNovo>
          <Input
            placeholder="0"
            autoCorrect={false}
            autoCapitalize="none"
            value={qtde}
            onChangeText={q => setQtde(q)}
            keyboardType="number-pad"
          />

          <TextNovo>Observações:</TextNovo>
          <InputObs
            placeholder="Observações..."
            autoCorrect={false}
            autoCapitalize="none"
            value={obs}
            onChangeText={o => setObs(o)}
            keyboardType="default"
          />
        </ContainerForm>

        <SubmitButtonGreen onPress={handleConfirm}>
          <SubmitText>Confirmar</SubmitText>
        </SubmitButtonGreen>
        <SubmitButton onPress={handleVoltar}>
          <SubmitText>Voltar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
