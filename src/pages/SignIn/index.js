import React, {useState, useEffect, useCallback} from 'react';
import {Platform, Alert} from 'react-native';
import getRealm from '../../services/realm';
import {
  Background,
  Container,
  TextoLogo,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  SignUpLink,
  SignUpText,
} from './styles';
import {useDispatch} from 'react-redux';
import {setUtl} from '../../services/api';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();

  const [codFunc, setCodFunc] = useState('');
  const [senha, setSenha] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const realm = await getRealm();
        let config = realm.objects('Config');
        if (config.length > 0) {
          dispatch({
            type: 'STORE_CONFIG',
            id: config[0].id,
            ip: config[0].ip,
            destino: config[0].destino,
          });
          try {
            let req = setUtl(config[0].ip);
            req.get('func').then(resp => {
              // console.log(resp.data);
              let adUser = [];
              resp.data.forEach(item => {
                adUser.push({
                  codigo: item.CODIGO,
                  senha: item.SENHA,
                });
              });
              setUsers(adUser);
            });
          } catch (erro) {
            Alert.alert('Sem comunicação com o servidor!');
          }
        }
      } catch (erro) {
        Alert.alert(erro);
      }
    };
    loadConfig();
  }, [dispatch]);

  const handleLogin = useCallback(async () => {
    try {
      if (users.length > 0) {
        if (codFunc !== '' && senha !== '') {
          const userLogin = users.find(
            opt => String(opt.codigo) === String(codFunc),
          );
          if (
            String(codFunc) === String(userLogin.codigo) &&
            String(senha) === String(userLogin.senha)
          ) {
            dispatch({
              type: 'STORE_ATENDENTE',
              codigo: codFunc,
            });
            navigation.navigate('Preload');
          } else {
            Alert.alert('Usuário/senha inválidos!');
          }
        } else {
          Alert.alert('Informe código/senha do usuário!');
        }
      } else {
        Alert.alert(
          'Usuários não localizados. Verifique a comunicação com a API no servidor',
        );
      }
    } catch (erro) {
      Alert.alert(erro);
    }
  }, [codFunc, dispatch, navigation, senha, users]);

  const handleConfigPage = useCallback(() => {
    navigation.navigate('ConfigPage');
  }, [navigation]);

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../../assets/waiter.png')} />
        <TextoLogo>React Mettre</TextoLogo>
        <AreaInput>
          <Input
            placeholder="Código do atendente..."
            autoCorrect={false}
            autoCapitalize="none"
            value={codFunc}
            keyboardType={'numeric'}
            onChangeText={c => setCodFunc(c)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType={'numeric'}
            value={senha}
            onChangeText={s => setSenha(s)}
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <SignUpLink onPress={handleConfigPage}>
          <SignUpText>Configurações</SignUpText>
        </SignUpLink>
      </Container>
    </Background>
  );
}
