import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 5px 15px;

  font-size: ${RFValue(14)}px;
  font-family: 'Inter_700Bold';

  background-color: #d9d9d9;
  color: #595959;
  border-radius: 3px;

  margin-bottom: 8px;
`;
