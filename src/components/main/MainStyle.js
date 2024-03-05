import styled from "styled-components";
import { Title } from "../commonForm/CommonFormStyle";

export const MainTitle = styled(Title)`
  font-size: 32px;
  font-weight: 600;
`;
export const LinkButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px;
`;
export const LinkButton = styled.button`
  all: unset;
  padding: 40px;
  text-align: center;
  font-size: x-large;
  font-weight: 500;
  border: 2px lightgray solid;
  border-radius: 20px;
  cursor: pointer;
`;
