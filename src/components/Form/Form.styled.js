import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  height: 240px;
  padding: 40px;
  border-radius: 8px;
  background: #F9B8C7; 
  box-shadow: 1px 1px 3px 4px rgba(119,  5,  47, 0.7);
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  margin-bottom: 10px;
  width: 300px;
  padding: 12px;
  border-radius: 20px;
  background: #faebd7;
  color: #590042; 
`;

export const LabelForm = styled.label`
  font-size: 20px;
  display: block;
  margin-bottom: 8px; 
  color: #590042; 
`;

export const Button = styled.button`
  width: 160px;
  border-radius: 20px;
  border: none;
  background: #cd8b9a;
  color: #590042;
  box-shadow: 1px 1px 3px 4px rgba(119,  5,  47, 0.7);
  margin: 0 auto;
  padding: 10px 16px;
  cursor: pointer;
`
