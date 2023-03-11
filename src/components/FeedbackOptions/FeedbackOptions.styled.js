import styled from '@emotion/styled';

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const OptionButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  &:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;
