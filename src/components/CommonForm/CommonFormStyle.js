import styled from "styled-components";

export const Title = styled.span`
  font-size: 40px;
  font-weight: 500;
  width: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 14px;
`;

export const FormInput = styled.input`
  all: unset;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 10px;
`;

export const FormButton = styled.button`
  all: unset;
  background-color: rgb(254, 83, 30);
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    background-color: rgb(194, 30, 30);
  }
`;