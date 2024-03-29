import React, { useEffect, useState } from "react";
import api from "../axios/api";
import { useNavigate } from "react-router-dom";
import CommonForm from "../components/CommonForm/CommonForm";

function SignUp() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const signUp = async () => {
    if (!userId || !userPw) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    try {
      const response = await api.post("/register", {
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

  useEffect(() => {
    window.localStorage.clear();
  }, []);

  return (
    <CommonForm
      title={"회원가입"}
      firstBtnName={"회원가입"}
      secondBtnName={"로그인하기"}
      userId={userId}
      setUserId={setUserId}
      userPw={userPw}
      setUserPw={setUserPw}
      onSubmit={signUp}
      navigateTo={() => navigate("/login")}
    />
  );
}

export default SignUp;
