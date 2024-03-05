import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { FormButton } from "../styles/FormButton";
import { useNavigate } from "react-router-dom";

// import CommonForm from "../components/CommonForm";
function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!id || !password) {
      alert("ID와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("http://3.38.191.164/login", {
        id,
        password,
      });

      if (response.status === 201) {
        alert("로그인 성공");
        console.log(response);
        navigate("/");
        // local storage 연결
        // key 이름 상관없음
        // local storage에 토큰을 저장
        window.localStorage.setItem("user-token", response.data.token);
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    const getUser = window.localStorage.getItem("user-token");
    if (getUser) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Title>로그인 하기</Title>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="id">아이디</label>
        <FormInput
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="password">비밀번호</label>
        <FormInput
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton onClick={handleLogin}>로그인</FormButton>
        <FormButton onClick={() => navigate("/register")}>회원가입</FormButton>
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
