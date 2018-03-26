import styled from 'styled-components';

import media from '../../constants/media';

export const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  ${media.mediumScreen`width: 90%;`}
  ${media.smallScreen`width: 95%;`}
`;