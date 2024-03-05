import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "../components/main/Main";

function Home() {
  const navigate = useNavigate();
  const getUser = window.localStorage.getItem("user-token");

  useEffect(() => {
    const getUser = window.localStorage.getItem("user-token");
    if (getUser) {
      navigate("/");
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, []);
  return (
    <div>
      {getUser && (
        <>
          <Header />
          <Main />
        </>
      )}
    </div>
  );
}

export default Home;
