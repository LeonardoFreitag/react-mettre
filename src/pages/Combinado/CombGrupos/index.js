import React, {useState, useEffect, useCallback} from 'react';
import {Platform, Alert} from 'react-native';
import {
  Background,
  Container,
  TextoLogo,
  SubmitButton,
  SubmitText,
  ItemRoute,
  MarketText,
  List,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';

export default function CombGrupos({navigation}) {
  const dispatch = useDispatch();
  const rProdutosList = useSelector(state => state.produtosList);
  const [gruposList, setGruposList] = useState([]);

  useEffect(() => {
    const loadGrupos = async () => {
      try {
        let grupos = [];
        rProdutosList.forEach((item, index) => {
          if (item.fracionado === 'S') {
            let insere = true;
            grupos.forEach(g => {
              if (g.grupo === item.subgrupo) {
                insere = false;
              }
            });
            if (insere === true) {
              grupos.push({
                id: index,
                grupo: item.subgrupo,
              });
            }
          }
        });
        setGruposList(grupos);
      } catch (erro) {
        Alert.alert('erro na abertura' + erro);
      }
    };
    loadGrupos();
  }, [rProdutosList]);

  function ItemList({data}) {
    return (
      <ItemRoute onPress={() => handleSelect(data)}>
        <MarketText> {data.grupo}</MarketText>
      </ItemRoute>
    );
  }

  const handleSelect = useCallback(
    data => {
      dispatch({
        type: 'STORE_GRUPO',
        grupo: data.grupo,
      });
      navigation.navigate('CombProdutos');
    },
    [dispatch, navigation],
  );

  const handleVoltar = useCallback(() => {
    navigation.navigate('Atendimento');
  }, [navigation]);

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <TextoLogo>PEDIDO COMBINADO</TextoLogo>
        <TextoLogo>GRUPOS</TextoLogo>
        <List
          numColumns={2}
          keyExtractor={item => item.id}
          data={gruposList}
          renderItem={({item}) => <ItemList data={item} />}
        />
        <SubmitButton onPress={handleVoltar}>
          <SubmitText>Voltar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
