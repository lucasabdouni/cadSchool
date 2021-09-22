import React from 'react';

import { Container, TextCard, Footer, NameView, CodeView } from './styles';

import { TouchableOpacityProps } from 'react-native';

interface UserProps {
  name: string;
  code: string;
}

interface Props extends TouchableOpacityProps {
  data: UserProps;
}

export function Card({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Footer>
        <CodeView>
          <TextCard>{data.code}</TextCard>
        </CodeView>
        <NameView>
          <TextCard>{data.name}</TextCard>
        </NameView>
      </Footer>
    </Container>
  );
}
