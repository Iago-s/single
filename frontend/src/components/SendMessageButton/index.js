import styled from 'styled-components';

const SendMessageButton = styled.button`
  width: 100%;
  
  background-color: green;

  font-size: 20px;
  font-weight: bold;
  color: white;

  margin-bottom: 30px;
  padding: 10px;

  border: none;
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export default SendMessageButton;