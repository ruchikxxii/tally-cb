import React from "react";
import styled from "styled-components";
import Digit from "./Digit";

const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

// const SepartorContainer = styled.span`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   align-self: flex-end;
//   margin: 0 0 10px 0px;
// `;

// const Separtor = styled.span`
//   display: inline-block;
//   width: 6px;
//   height: 6px;
//   background-color: #404549;
//   border-radius: 6px;
//   margin: 5px 0px;
// `;

export default function TimerStyled({ seconds, minutes, hours, days }) {
  return (
    <TimerContainer className="text-white flex flex-row gap-2">
      <Digit value={minutes} title="Minutes" />

      <Digit value={seconds} title="Seconds" />
    </TimerContainer>
  );
}
