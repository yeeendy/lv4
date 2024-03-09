import React, { useState, useEffect } from "react";
import api from "../axios/api";
import { useNavigate } from "react-router-dom";
import CommonForm from "../components/CommonForm/CommonForm";

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
      const response = await api.post("/login", {
        id: userId,
        password: userPw,
      });

      if (response.status === 201) {
        alert("로그인 성공");
        window.localStorage.setItem("user-token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    window.localStorage.clear();
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
