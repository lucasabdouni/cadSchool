import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(45)}px;

  align-items: center;
  flex: 1;
`;

export const Icon = styled(AntDesign)`
  color: #b30000;
  font-size: 50px;
`;

export const Title = styled.Text`
  color: #595959;
  font-size: 30px;
  font-family: 'Inter_700Bold';
`;

export const Form = styled.View`
  margin-top: 10px;
  width: ${RFValue(270)}px;
`;

export const CardView = styled.View`
  margin-top: 15px;
`;
