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

export const TextoLogo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #b8860b;
  margin-bottom: 20px;
`;

export const TextoBasico = styled.Text`
  font-size: 12px;
  color: #b8860b;
  margin-top: 20px;
  text-align: justify;
  width: 90%;
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

export const SubmitText = styled.Text`
  color: black;
  font-size: 18px;
`;

export const AreaInput = styled.View`
  display: flex;
  width: 100%;
  padding: 16px;
  align-items: flex-start;
`;

export const Input = styled.TextInput`
  background: #fff;
  color: #222;
  font-size: 17px;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
`;

export const TextoSwitch = styled.Text`
  font-size: 14px;
  color: #b8860b;
  text-align: justify;
  margin-left: 16px;
`;

export const HorizontalArea = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;
  margin-bottom: 16px;
`;
