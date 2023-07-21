import React from "react";
import { useTimer } from "react-timer-hook";
import TimerStyled from "./TimerStyled";

export default function UseTimerDemo({ expiryTimestamp }) {
  const { seconds, minutes, hours, days, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });

  return (
    <div>
      <TimerStyled
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        days={days}
      />
    </div>
  );
}
