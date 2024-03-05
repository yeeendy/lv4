import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  border-bottom: 2px lightgray solid;
`;

export const Img = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
export const Button = styled.button`
  all: unset;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: wheat;
    border-radius: 20px;
  }
`;
