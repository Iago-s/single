import styled, { css } from 'styled-components';

const Section = styled.section`
  padding: 60px 0;

  ${props => props.className && css`
    background: black;
  `}
`;

export default Section;