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

export default function Grupos({navigation}) {
  const dispatch = useDispatch();
  const rProdutosList = useSelector(state => state.produtosList);
  const [gruposList, setGruposList] = useState([]);

  useEffect(() => {
    const loadGrupos = async () => {
      try {
        let grupos = [];
        rProdutosList.forEach((item, index) => {
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
        });
        console.log(grupos);

        const groupsOrdered = [];
        grupos.forEach(item => {
          groupsOrdered.push(item.grupo);
        });

        groupsOrdered.sort();

        console.log(groupsOrdered);

        grupos = [];

        groupsOrdered.forEach((item, index) => {
          grupos.push({
            id: index,
            grupo: item,
          });
        });

        console.log(grupos);

        setGruposList(grupos);
      } catch (erro) {
        Alert.alert('erro na abertura' + erro);
      }
    };
    loadGrupos();
  }, [rProdutosList]);

  const handleSelect = useCallback(
    data => {
      dispatch({
        type: 'STORE_GRUPO',
        grupo: data.grupo,
      });
      navigation.navigate('ProdutosGrupo');
    },
    [dispatch, navigation],
  );

  const handleVoltar = useCallback(() => {
    navigation.navigate('Atendimento');
  }, [navigation]);

  function ItemList({data}) {
    return (
      <ItemRoute onPress={() => handleSelect(data)}>
        <MarketText> {data.grupo}</MarketText>
      </ItemRoute>
    );
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
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
