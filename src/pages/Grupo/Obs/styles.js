import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #000000;
  padding: 4px;
`;

export const Container1 = styled.KeyboardAvoidingView`
  flex: 5;
  align-items: center;
  justify-content: center;
`;

export const Container2 = styled.KeyboardAvoidingView`
  flex: 2;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const TextoLogo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #b8860b;
  margin-bottom: 5px;
`;

export const TextoBasico = styled.Text`
  font-size: 12px;
  color: #b8860b;
  margin-top: 5px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #b8860b;
  height: 45px;
  width: 100%;
  border-radius: 2px;
  margin-top: 10px;
`;

export const HorizontButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #b8860b;
  height: 45px;
  width: 49%;
  border-radius: 2px;
  margin-top: 10px;
`;

export const HorizontButtonGreen = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: green;
  height: 45px;
  width: 49%;
  border-radius: 2px;
  margin-top: 10px;
`;

export const HorizontText = styled.Text`
  color: black;
  font-size: 14px;
`;

export const SubmitText = styled.Text`
  color: black;
  font-size: 18px;
`;

export const List = styled.FlatList.attrs({
  paddingHorizontal: 5,
  paddingVertical: 5,
})`
  flex: 1;
`;

export const ItemRoute = styled.TouchableOpacity`
  background-color: #333333;
  margin-bottom: 8px;
  margin-right: 5px;
  padding: 10px;
  border-radius: 2px;
  width: 50%;
  height: 80px;
`;

export const ItemRouteNovo = styled.TouchableOpacity`
  background-color: red;
  margin-bottom: 12px;
  padding: 7px;
  border-radius: 2px;
`;

export const MarketText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #b8860b;
  margin-top: 5px;
`;

export const AddressText = styled.Text`
  font-size: 12px;
  color: #b8860b;
  margin-top: 5px;
`;

export const MarketTextNovo = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin-top: 5px;
`;

export const AddressTextNovo = styled.Text`
  font-size: 12px;
  color: black;
  margin-top: 5px;
`;

export const ContainerHorizontal = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  background: white;
  color: #222;
  font-size: 12px;
  font-weight: bold;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 2px;
  margin-top: 5px;
  padding: 10px;
  padding-right: 40px;
  height: 50px;
  text-align: justify;
`;
