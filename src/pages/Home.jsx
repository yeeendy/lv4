import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/main/Main";
import api from "../axios/api";

function Home() {
  const navigate = useNavigate();

  const userToken = window.localStorage.getItem("user-token");
  useEffect(() => {
    const checkUserToken = async () => {
      if (!userToken) {
        alert("로그인이 필요합니다.");
        navigate("/login");
        return;
      }
      try {
        const response = await api.get("/user", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        // console.log(response);
        navigate("/");
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("서버 오류가 발생했습니다.");
        }
        navigate("/login");
      }
    };
    checkUserToken();
  }, []);
  return (
    <div>
      {userToken && (
        <>
          <Header />
          <Main />
        </>
      )}
    </div>
  );
}

export default Home;
