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
  margin-bottom: 20px;
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

export const SubmitText = styled.Text`
  color: black;
  font-size: 18px;
`;
