import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #000000;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 1px;
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

export const HorizontButton3 = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #b8860b;
  height: 45px;
  width: 32%;
  border-radius: 2px;
  margin-top: 5px;
  margin-left: 3px;
  margin-right: 2px;
`;

export const HorizontButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #b8860b;
  height: 45px;
  width: 49%;
  border-radius: 2px;
  margin-top: 5px;
  margin-left: 3px;
  margin-right: 2px;
`;

export const HorizontButtonGreen = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: green;
  height: 45px;
  width: 49%;
  border-radius: 2px;
  margin-top: 5px;
  margin-left: 3px;
  margin-right: 2px;
`;

export const SubmitText = styled.Text`
  color: black;
  font-size: 18px;
`;

export const SubmitText3 = styled.Text`
  color: black;
  font-size: 16px;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  paddingHorizontal: 15,
  paddingVertical: 10,
})`
  flex: 1;
  width: 98%;
`;

export const ItemRoute = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #333333;
  margin-bottom: 8px;
  height: 50px;
`;

export const ItemRouteNovo = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #444444;
  margin-bottom: 8px;
  border-radius: 2px;
  height: 100px;
`;

export const MarketText = styled.Text`
  font-size: 12px;
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
  align-content: center;
  align-items: center;
  padding-bottom: 5px;
  padding-right: 5px;
  padding-left: 5px;
`;

export const ContainerModal = styled.KeyboardAvoidingView`
  height: 350px;
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: black;
  align-self: center;
  margin-top: 100px;
  border: 1px;
  border-radius: 2px;
  border-color: #b8860b;
  padding: 16px;
`;

export const TextoModal = styled.Text`
  font-size: 24px;
  color: #b8860b;
  width: 100%;
`;

export const Input = styled.TextInput`
  background: white;
  color: #222;
  font-size: 24px;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 4px;
  margin-top: 4px;
  padding: 10px;
  height: 50px;
  text-align: center;
`;

export const VerticalArea = styled.View`
  flex: 9;
  display: flex;
  flex-direction: column;
`;

export const RepeatContainer = styled.View`
  background-color: #444444;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const RepeatContainerOld = styled.View`
  background-color: #444444;
  flex: 2;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const RepeatButtonOld = styled.TouchableOpacity`
  background-color: #444444;
  flex: 2;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const RepeatButtonTextOld = styled.Text`
  font-size: 24px;
  color: white;
`;

export const RepeatButton = styled.TouchableOpacity`
  background-color: #444444;
  flex: 2;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const RepeatButtonText = styled.Text`
  font-size: 24px;
  color: white;
`;

export const VerticalAreaNovo = styled.View`
  flex: 8;
  display: flex;
  flex-direction: column;
  background-color: red;
`;

export const HorizontalAreaNovo = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ProductAreanovo = styled.View`
  padding-left: 8px;
  background-color: red;
  height: 50px;
`;

export const ProductAreaOld = styled.View`
  padding-left: 8px;
  background-color: #333333;
  height: 50px;
`;
