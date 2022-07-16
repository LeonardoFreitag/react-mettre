import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: black;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 5px;
`;

export const TextoLogo = styled.Text`
  font-size: 50px;
  color: #b8860b;
  margin-bottom: 20px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background: #fff;
  color: #222;
  font-size: 17px;
  border-radius: 2px;
  width: 90%;
  margin-bottom: 15px;
  padding: 10px;
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

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignUpText = styled.Text`
  color: #b8860b;
`;
