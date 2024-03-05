import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const getUser = window.localStorage.getItem("user-token");
  const handleLogout = () => {
    window.localStorage.removeItem("user-token");
    navigate("/login");
  };
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
        <div>
          <button style={{ padding: "20px" }} onClick={handleLogout}>
            로그아웃
          </button>
          <h1>무엇을 할까요?</h1>
          <button
            style={{ padding: "20px" }}
            onClick={() => console.log(getUser)}
          >
            할 일 기록하기
          </button>
          <div style={{ padding: "20px" }}>TODO LIST</div>
        </div>
      )}
    </div>
  );
}

export default Home;
