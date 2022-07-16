import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #000000;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
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
  margin-top: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #b8860b;
  height: 45px;
  width: 90%;
  border-radius: 2px;
  margin-top: 10px;
`;

export const HorizontButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #b8860b;
  height: 45px;
  width: 45%;
  border-radius: 2px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const SubmitText = styled.Text`
  color: black;
  font-size: 18px;
`;

export const List = styled.FlatList.attrs({
  paddingHorizontal: 15,
  paddingVertical: 10,
})`
  flex: 1;
  width: 98%;
`;

export const ItemRoute = styled.TouchableOpacity`
  background-color: #333333;
  margin-bottom: 12px;
  padding: 7px;
  border-radius: 2px;
  width: 48%;
  margin-right: 10px;
  height: 50px;
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
  margin-top: 10px;
  align-self: center;
`;

export const AddressText = styled.Text`
  font-size: 12px;
  color: #b8860b;
  margin-top: 5px;
`;

export const MarketTextNovo = styled.Text`
  font-size: 12px;
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
  padding-right: 10px;
`;
