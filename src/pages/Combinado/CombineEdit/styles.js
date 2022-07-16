import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #000000;
  height: 100%;
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
  font-size: 13px;
  color: #b8860b;
  margin-top: 5px;
  margin-right: 5px;
  align-self: flex-end;
`;

export const TextoComb = styled.Text`
  font-size: 15px;
  color: #b8860b;
  margin-top: 10px;
  margin-right: 5px;
  align-self: center;
`;

export const TextoGroup = styled.Text`
  font-size: 13px;
  color: #b8860b;
  margin-top: 20px;
  margin-right: 5px;
  align-self: center;
`;

export const ProdModal = styled.Text`
  font-size: 15px;
  color: #b8860b;
  margin-top: 5px;
  margin-bottom: 20px;
  align-self: center;
`;

export const TextoModal = styled.Text`
  font-size: 15px;
  color: #b8860b;
  margin-top: 5px;
  margin-right: 5px;
  align-self: flex-end;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  align-self: center;
  justify-content: center;
  background-color: #b8860b;
  height: 45px;
  width: 90%;
  border-radius: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
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
  paddingHorizontal: 5,
  paddingVertical: 5,
})`
  flex: 1;
  width: 98%;
`;

export const ItemRoute = styled.TouchableOpacity`
  background-color: #333333;
  margin-bottom: 5px;
  padding: 2px;
  border-radius: 2px;
  width: 98%;
  height: 58px;
  margin-left: 5px;
`;

export const ItemComb = styled.TouchableOpacity`
  background-color: #333333;
  margin-bottom: 5px;
  padding: 2px;
  border-radius: 2px;
  width: 98%;
  height: 48px;
  margin-left: 5px;
`;

export const ItemGroup = styled.TouchableOpacity`
  background-color: #333333;
  margin-bottom: 5px;
  padding: 2px;
  border-radius: 2px;
  width: 48%;
  height: 68px;
  margin-left: 5px;
`;

export const ItemRouteNovo = styled.TouchableOpacity`
  background-color: red;
  margin-bottom: 15px;
  padding: 7px;
  border-radius: 2px;
`;

export const MarketText = styled.Text`
  font-size: 15px;
  color: #b8860b;
  margin-top: 5px;
  align-self: flex-start;
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
  padding-right: 10px;
`;

export const ContainerModal = styled.KeyboardAvoidingView`
  height: 93%;
  width: 95%;
  align-items: center;
  justify-content: center;
  background-color: #484848;
  align-self: center;
  margin-top: 5px;
  border-radius: 20px;
  padding-bottom: 10px;
`;

export const ContainerForm = styled.View`
  width: 92%;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px;
`;

export const TextNovo = styled.Text`
  font-size: 20px;
  color: #b8860b;
`;

export const Input = styled.TextInput`
  background: white;
  color: #222;
  font-size: 15px;
  font-weight: bold;
  border-radius: 2px;
  width: 90%;
  margin-bottom: 2px;
  margin-top: 5px;
  padding: 10px;
  height: 50px;
  text-align: center;
`;
