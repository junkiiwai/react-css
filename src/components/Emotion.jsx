/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px blue;
    border-radius: 20px;
    padding: 20px;
    margin: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({
    margin: 0,
    color: "green"
  });
  const SButton = styled.button`
    background-color: lightgray;
    border: none;
    padding: 10px;
  `;
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>-Emotion-</p>
      <SButton>ファイト！</SButton>
    </div>
  );
};
