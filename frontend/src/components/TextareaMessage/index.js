import styled from 'styled-components';

const TextareaMessage = styled.textarea`
  width: 100%;
  border: none;
  
  margin: 30px 0;
  padding-left: 10px;
  text-align: center;
  font-size: 16px;

  height: 100px;

  &:hover {
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    border-bottom-left-radius: 8px;

    cursor: pointer;
  }
`;

export default TextareaMessage;