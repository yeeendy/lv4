import React, { useState } from "react";
import styled from "styled-components";
import { FormButton } from "../styles/FormButton";
import axios from "axios";
// import CommonForm from "../components/CommonForm";

function SignUp() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [error, setError] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };
  const handleUserPwChange = (e) => {
    setUserPw(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://3.38.191.164/register", {
        id: userId,
        password: userPw,
      });

      //존재하는 아이디가 있는 지 확인
      // if (userId === id) {
      // }

      console.log(response);
      if (response.status === 201) {
        console.log("회원가입 성공");
        setUserId("");
        setUserPw("");
      } else if (response.status === 401) {
        setError(response.data.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
      // setUserId(response);
    } catch (error) {
      alert("서버 에러 발생!");
      setUserId("");
      setUserPw("");
    }
  };

  return (
    <>
      <Title>회원가입</Title>
      <FormContainer onClick={(e) => e.preventDefault()}>
        <label htmlFor="id">아이디</label>
        <FormInput type="text" id="id" onChange={handleUserIdChange} />
        <label htmlFor="password">비밀번호</label>
        <FormInput
          type="password"
          id="password"
          onChange={handleUserPwChange}
        />
        <FormButton onClick={handleRegister}>회원가입</FormButton>
        <FormButton>로그인하기</FormButton>
        {error && <div>{error}</div>}
      </FormContainer>
    </>
  );
}

export default SignUp;

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
