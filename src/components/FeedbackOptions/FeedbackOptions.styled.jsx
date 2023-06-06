import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 30px 50px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #ccc;
  cursor: pointer;
  color: #fff;
  background-color: #2196f3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease;
  &:hover {
    color: black;
    border-color: black;
    background-color: ${({ option }) =>
      option === 'good'
        ? 'rgba(0, 200, 0, 0.5)'
        : option === 'bad'
        ? 'rgba(200, 0, 0, 0.5)'
        : option === 'neutral'
        ? 'rgba(200, 200, 0, 0.5)'
        : 'rgba(0, 0, 0, 0.5)'};
  }
`;
