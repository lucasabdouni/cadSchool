import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  justify-content: center;
`;

export const Footer = styled.View`
  border-radius: 5px;
  padding: 15px;

  flex-direction: row;

  align-items: center;

  margin-top: -15px;
`;

export const NameView = styled.View`
  width: 225px;
  padding: 5px 8px;

  border: 2px solid #d9d9d9;
`;

export const CodeView = styled.View`
  padding: 5px 8px;
  background-color: #d9d9d9;

  border: 2px solid #d9d9d9;
`;

export const TextCard = styled.Text`
  color: #808080;
`;
