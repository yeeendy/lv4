import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CommonForm from "../components/commonForm/CommonForm";

function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleLogin = async () => {
    if (!userId || !userPw) {
      alert("ID와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("http://3.38.191.164/login", {
        id: userId,
        password: userPw,
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
    <CommonForm
      title={"로그인"}
      firstBtnName={"로그인"}
      secondBtnName={"회원가입"}
      userId={userId}
      setUserId={setUserId}
      userPw={userPw}
      setUserPw={setUserPw}
      handleSubmit={handleLogin}
      navigateTo={() => navigate("/register")}
    />
  );
}

export default Login;
