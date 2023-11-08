import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  alifn-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px;

  min-width: 100px;
  min-height: 40px;
  border: 1px solid black;
  border-radius: 8px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: blue;
  }
`;
