import React from "react";
import {
  FormContainer,
  Title,
  FormInput,
  FormButton,
} from "./CommonFormStyle.js";

function CommonForm({
  title,
  firstBtnName,
  secondBtnName,
  userId,
  setUserId,
  userPw,
  setUserPw,
  onSubmit,
  navigateTo,
}) {
  return (
    <>
      <Title>{title}</Title>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
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
        <FormButton onClick={onSubmit}>{firstBtnName}</FormButton>
        <FormButton onClick={() => navigateTo()}>{secondBtnName}</FormButton>
      </FormContainer>
    </>
  );
}

export default CommonForm;
