import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #000000;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerJustify = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextoLogo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #b8860b;
`;

export const TextoBasico = styled.Text`
  font-size: 12px;
  color: #b8860b;
  margin-top: 20px;
`;

export const TextNovo = styled.Text`
  font-size: 20px;
  color: #b8860b;
`;

export const ComandaText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #b8860b;
  margin-top: 1px;
  text-align: center;
`;

export const ComandaTextNovo = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-top: 1px;
  text-align: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #b8860b;
  height: 45px;
  width: 90%;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubmitText = styled.Text`
  color: black;
  font-size: 18px;
`;

export const Item = styled.TouchableOpacity`
  background-color: #444444;
  margin-bottom: 5px;
  margin-left: 2px;
  margin-right: 2px;
  padding: 7px;
  border-radius: 2px;
  width: 48%;
`;

export const ItemFechado = styled.TouchableOpacity`
  background-color: #d2691e;
  margin-bottom: 5px;
  margin-left: 2px;
  margin-right: 2px;
  padding: 7px;
  border-radius: 2px;
  width: 48%;
`;

export const TextItem = styled.Text`
  font-size: 12px;
  color: #b8860b;
  text-align: center;
`;

export const TextItemNovo = styled.Text`
  font-size: 12px;
  color: black;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  paddingHorizontal: 4,
  paddingVertical: 4,
})`
  flex: 1;
  width: 100%;
  min-width: 50%;
`;

export const Logo = styled.Image`
  margin-bottom: 1px;
  align-self: center;
`;

export const ContainerModal = styled.KeyboardAvoidingView`
  height: 350px;
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: #010101;
  align-self: center;
  margin-top: 100px;
  border-radius: 20px;
`;

export const Input = styled.TextInput`
  background: white;
  color: #222;
  font-size: 24px;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 4px;
  margin-top: 4px;
  padding: 8px;
  height: 50px;
`;

export const ContainerForm = styled.View`
  width: 92%;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px;
`;

export const ContainerHorizontal = styled.View`
  flex-direction: row;
`;

export const HorizButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #b8860b;
  height: 45px;
  width: 45%;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const HorizButtonGreen = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: green;
  height: 45px;
  width: 45%;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const InputArea = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
`;
