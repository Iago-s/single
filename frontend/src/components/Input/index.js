import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  width: 50%;
  margin-top: 30px;
  height: 30px;
  padding-left: 10px; 
  justify-content: space-between;

  font-size: 16px;
  text-align: left;

  border: none;
  
  &:hover {
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    border-bottom-left-radius: 8px;
        
    cursor: pointer;
  }
`;

export default Input;