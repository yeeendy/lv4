import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, HeaderContainer, Img } from "./HeaderStyle";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("user-token");
    navigate("/login");
  };
  return (
    <HeaderContainer>
      <Img src="img/home.svg" alt="homeIcon" />
      <Button style={{ padding: "20px" }} onClick={handleLogout}>
        로그아웃
      </Button>
    </HeaderContainer>
  );
}

export default Header;
