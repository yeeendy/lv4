import React from "react";
import styled from "styled-components";
import { FormButton } from "../styles/FormButton";

function CommonForm({ title, firstBtnName, secondBtnName }) {
  return (
    <>
      <Title>{title}</Title>
      <FormContainer>
        <label for="id">아이디</label>
        <FormInput type="text" id="id" />
        <label for="password">비밀번호</label>
        <FormInput type="password" id="password" />
        <FormButton>{firstBtnName}</FormButton>
        <FormButton>{secondBtnName}</FormButton>
      </FormContainer>
    </>
  );
}

export default CommonForm;

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
