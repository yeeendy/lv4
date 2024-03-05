import React from "react";
import { LinkButton, LinkButtonContainer, MainTitle } from "./MainStyle";

function Main() {
  return (
    <div>
      <MainTitle>무엇을 할까요?</MainTitle>
      <LinkButtonContainer>
        <LinkButton>
          <span>할 일 기록하기</span>
        </LinkButton>
        <LinkButton>
          <span>TODO LIST</span>
        </LinkButton>
      </LinkButtonContainer>
    </div>
  );
}

export default Main;
