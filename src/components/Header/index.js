import React from 'react';
import styled from 'styled-components';

import { Logo } from '../Logo';
import { Navigation } from '../../containers/Navigation';
import { red, Sizes } from '../../constants';

export const height = '5.5em';

const Container = styled.header`
  align-items: center;
  border-bottom: 2px solid ${red};
  display: flex;
  height: ${height};
  justify-content: space-between;
`;

export const Header = () => (
  <Container>
    <Logo size={ Sizes.S } />
    <Navigation />
  </Container>
);
