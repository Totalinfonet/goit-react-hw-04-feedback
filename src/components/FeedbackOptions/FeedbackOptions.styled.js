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
  color: whitesmoke;
  font-weight: bold;
  cursor: pointer;

  ${props =>
    props.color === 'good' &&
    `
    background-color: green;
  `}

  ${props =>
    props.color === 'neutral' &&
    `
    background-color: yellow;
    color: black;
  `}

  ${props =>
    props.color === 'bad' &&
    `
    background-color: red;
  `}

&:hover {
    opacity: 0.7;
    font-style: italic;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;
