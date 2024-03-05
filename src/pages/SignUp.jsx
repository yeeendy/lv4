import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FormButton } from "../styles/FormButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import CommonForm from "../components/CommonForm";

function SignUp() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  useEffect(() => {
    const getUser = window.localStorage.getItem("user-token");
    if (getUser) {
      navigate("/");
    }
  }, []);

  const handleSignUp = async () => {
    if (!userId || !userPw) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post("http://3.38.191.164/register", {
        id: userId,
        password: userPw,
      });
      if (response.status === 201) {
        alert("회원가입 성공입니다!");
        navigate("/login");
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert(error.response.data.message);
      }
    }
  };
  return (
    <>
      <Title>회원가입</Title>
      <FormContainer onClick={(e) => e.preventDefault()}>
        <label htmlFor="id">아이디</label>
        <FormInput
          type="text"
          id="id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label htmlFor="password">비밀번호</label>
        <FormInput
          type="password"
          id="password"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
        />
        <FormButton onClick={handleSignUp}>회원가입</FormButton>
        <FormButton onClick={() => navigate("/login")}>로그인하기</FormButton>
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
