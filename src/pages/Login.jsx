import React, { useState } from "react";
import styled from "styled-components";
import { FormButton } from "../styles/FormButton";
// import CommonForm from "../components/CommonForm";

function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };
  const handleUserPwChange = (e) => {
    setUserPw(e.target.value);
  };

  return (
    <>
      <Title>로그인 하기</Title>
      <FormContainer>
        <label for="id">아이디</label>
        <FormInput type="text" id="id" onChange={handleUserIdChange} />
        <label for="password">비밀번호</label>
        <FormInput
          type="password"
          id="password"
          onChange={handleUserPwChange}
        />
        <FormButton>로그인</FormButton>
        <FormButton>회원가입</FormButton>
      </FormContainer>
    </>
  );
}

export default Login;

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
