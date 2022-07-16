import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #000000;
  height: 100%;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 3;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  width: 100%;
`;

export const ContainerSabores = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  width: 100%;
`;

export const TextoLogo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #b8860b;
  margin-bottom: 5px;
`;

export const Subtitulo = styled.Text`
  font-size: 18px;
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
  font-size: 14px;
  color: #b8860b;
`;

export const TextoGroup = styled.Text`
  font-size: 14px;
  color: #b8860b;
  align-self: center;
`;

export const ProdModal = styled.Text`
  font-size: 15px;
  color: #b8860b;
  margin-top: 5px;
  margin-bottom: 5px;
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
  width: 100%;
  border-radius: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const SubmitButtonGreen = styled.TouchableOpacity`
  align-items: center;
  align-self: center;
  justify-content: center;
  background-color: green;
  height: 45px;
  width: 100%;
  border-radius: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
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

export const SubmitText = styled.Text`
  color: black;
  font-size: 18px;
`;

export const List = styled.FlatList.attrs({
  paddingHorizontal: 4,
  paddingVertical: 4,
})`
  flex: 1;
  width: 100%;
  background-color: #000;
  border-radius: 2px;
`;

export const ListModal = styled.FlatList.attrs({
  paddingHorizontal: 4,
  paddingVertical: 4,
})`
  flex: 1;
  width: 90%;
  background-color: #29292e;
  border-radius: 2px;
`;

export const ItemRoute = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #333333;
  margin-bottom: 4px;
  padding-left: 8px;
  border-radius: 2px;
  width: 100%;
  height: 68px;
  margin-left: 5px;
`;

export const ItemComb = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #333333;
  margin-bottom: 8px;
  border-radius: 2px;
  width: 100%;
  height: 35px;
  padding-left: 8px;
`;

export const ItemGroup = styled.TouchableOpacity`
  background-color: #333333;
  margin-bottom: 4px;
  padding: 2px;
  border-radius: 2px;
  width: 48%;
  height: 48px;
  margin-left: 4px;
  align-items: center;
  justify-content: center;
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
  padding-bottom: 5px;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerModal = styled.KeyboardAvoidingView`
  height: 70%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #494949;
  align-self: center;
  margin-top: 150px;
  border-radius: 2px;
  padding: 16px;
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
  width: 100%;
  margin-bottom: 2px;
  margin-top: 5px;
  padding: 5px;
  padding-left: 20px;
  height: 50px;
  text-align: justify;
  align-self: center;
`;

export const ReduceButton = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  background-color: red;
  height: 45px;
  width: 30%;
  border-radius: 2px;
  margin-top: 10px;
  margin-right: 5px;
`;

export const IncreaseButton = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  background-color: green;
  height: 45px;
  width: 30%;
  border-radius: 2px;
  margin-top: 10px;
  margin-left: 5px;
`;

export const TituloSabore = styled.Text`
  font-size: 15px;
  color: #b8860b;
  margin-bottom: 5px;
`;

export const VerticalArea = styled.View`
  flex: 8;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

export const AreaButton = styled.View`
  display: flex;
  flex: 2;
  background-color: #222222;
  align-items: center;
  justify-content: center;
`;

export const ButtonSelect = styled.TouchableOpacity`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  background-color: #222222;
`;

export const ButtonSelectText = styled.Text`
  color: white;
`;
