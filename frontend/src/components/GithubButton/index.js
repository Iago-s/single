import styled from 'styled-components';

const GithubButton = styled.a`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: white;

  height: 150px;
  align-items: center;
  padding: 24px 24px;

  &:hover{
    border-bottom: 1px solid gray;
    opacity: 0.5;
  }
`;

export default GithubButton;