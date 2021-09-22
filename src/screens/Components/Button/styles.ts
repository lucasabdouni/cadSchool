import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: #b30000;

  padding: 5px;
  border-radius: 3px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: ${RFValue(17)}px;
  color: #ffffff;
`;
