import React, {useState, useEffect, useCallback} from 'react';
import {Platform, Switch, Alert} from 'react-native';
import getRealm from '../../services/realm';
import {
  Background,
  Container,
  TextoLogo,
  TextoBasico,
  SubmitButton,
  SubmitText,
  AreaInput,
  Input,
  HorizontalArea,
  TextoSwitch,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';

export default function ConfigPage({navigation}) {
  const rConfig = useSelector(state => state.config);
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [ip, setIp] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const loadConfig = async () => {
      const realm = await getRealm();
      let config = realm.objects('Config');
      if (config.length > 0) {
        setId(config[0].id);
        setIp(config[0].ip);
        setIsEnabled(config[0].destino);
      }
    };
    loadConfig();
  }, [rConfig, rConfig.destino, rConfig.id, rConfig.ip]);

  const handleSair = useCallback(async () => {
    try {
      const realm = await getRealm();

      let nId = '';
      if (id === '') {
        nId = new Date().getTime();
      } else {
        nId = id;
      }

      let config = {
        id: nId.toString(),
        ip,
        destino: isEnabled,
      };
      console.log(config);

      realm.write(() => {
        realm.create('Config', config, 'modified');
      });
      dispatch({
        type: 'STORE_CONFIG',
        id: id,
        ip: ip,
        destino: isEnabled,
      });

      navigation.navigate('SignIn');
    } catch (erro) {
      Alert.alert(erro);
    }
  }, [dispatch, id, ip, isEnabled, navigation]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <TextoLogo>CONFIGURAÇÕES</TextoLogo>
        <TextoBasico>IP do Servidor:</TextoBasico>
        <AreaInput>
          <Input
            placeholder="Exemplo: 192.168.0.100"
            autoCorrect={false}
            autoCapitalize="none"
            value={ip}
            keyboardType={'numeric'}
            onChangeText={data => setIp(data)}
          />
          <HorizontalArea>
            <Switch
              trackColor={{false: '#767577', true: '#b8860b'}}
              thumbColor={isEnabled ? '#b8860b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <TextoSwitch>Pedir mesa destino ao enviar pedido</TextoSwitch>
          </HorizontalArea>
        </AreaInput>

        <SubmitButton onPress={handleSair}>
          <SubmitText>Gravar e sair</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
