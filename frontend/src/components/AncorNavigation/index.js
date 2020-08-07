import styled from 'styled-components';

const AncorNavigation = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-size: 14px;
  padding: 20px;

  &:hover {
    border-bottom: 1px solid gray;
  }
`;

export default AncorNavigation;