import React, {useState, useEffect, useCallback} from 'react';
import {Platform, Alert} from 'react-native';
import {
  Background,
  Container1,
  Container2,
  TextoLogo,
  TextoBasico,
  SubmitButton,
  SubmitText,
  List,
  ItemRoute,
  MarketText,
  Input,
  ContainerHorizontal,
  HorizontButton,
  HorizontText,
  HorizontButtonGreen,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';

export default function ObsGrupo({navigation}) {
  const dispatch = useDispatch();
  const itemEdit = useSelector(state => state.itemEdit);
  const obsList = useSelector(state => state.obsList);

  const [obsGrupo, setObsGrupo] = useState([]);
  const [obs, setObs] = useState('');

  useEffect(() => {
    const loadObsGrupo = async () => {
      try {
        let g = [];
        obsList.forEach(item => {
          if (item.grupo === itemEdit.grupo) {
            g.push(item);
          }
        });
        setObsGrupo(g);
      } catch (erro) {
        Alert.alert(erro);
      }
    };
    loadObsGrupo();
  }, [itemEdit.grupo, obsList]);

  const handleSelect = useCallback(
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

  const handleCancel = useCallback(() => {
    navigation.navigate('Atendimento');
  }, [navigation]);

  const handleIncluirProduto = useCallback(() => {
    dispatch({
      type: 'STORE_ITENSLIST',
      codigo: itemEdit.codigo,
      codMesa: itemEdit.codMesa,
      codFunc: itemEdit.codFunc,
      codProd: itemEdit.codProd,
      descricao: itemEdit.descricao,
      unidade: itemEdit.unidade,
      quantidade: itemEdit.quantidade,
      unitario: itemEdit.unitario,
      total: itemEdit.total,
      hora: itemEdit.hora,
      grupo: itemEdit.grupo,
      subgrupo: itemEdit.subgrupo,
      impresso: itemEdit.impresso,
      obs: obs,
      enviado: itemEdit.enviado,
    });
    navigation.navigate('Atendimento');
  }, [
    dispatch,
    itemEdit.codFunc,
    itemEdit.codMesa,
    itemEdit.codProd,
    itemEdit.codigo,
    itemEdit.descricao,
    itemEdit.enviado,
    itemEdit.grupo,
    itemEdit.hora,
    itemEdit.impresso,
    itemEdit.quantidade,
    itemEdit.subgrupo,
    itemEdit.total,
    itemEdit.unidade,
    itemEdit.unitario,
    navigation,
    obs,
  ]);

  function ItemList({data}) {
    return (
      <ItemRoute onPress={() => handleSelect(data)}>
        <MarketText> {data.obs}</MarketText>
      </ItemRoute>
    );
  }

  return (
    <Background>
      <Container1 behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <TextoLogo>OBSERVAÇÕES</TextoLogo>
        <TextoBasico>
          {itemEdit.codProd} - {itemEdit.descricao} - {itemEdit.unidade}
        </TextoBasico>
        <TextoBasico>Quantidade: {itemEdit.quantidade}</TextoBasico>

        <List
          numColumns={2}
          keyExtractor={item => item.codigo}
          data={obsGrupo}
          renderItem={({item}) => <ItemList data={item} />}
        />
      </Container1>
      <Container2>
        <Input
          placeholder="Observações..."
          autoCorrect={false}
          autoCapitalize="none"
          value={obs}
          onChangeText={o => setObs(o)}
          keyboardType="default"
        />
        <ContainerHorizontal>
          <HorizontButton onPress={() => setObs('')}>
            <HorizontText>Limpar observações</HorizontText>
          </HorizontButton>
          <HorizontButtonGreen onPress={handleIncluirProduto}>
            <HorizontText>Incluir produto</HorizontText>
          </HorizontButtonGreen>
        </ContainerHorizontal>
        <SubmitButton onPress={handleCancel}>
          <SubmitText>Cancelar</SubmitText>
        </SubmitButton>
      </Container2>
    </Background>
  );
}
