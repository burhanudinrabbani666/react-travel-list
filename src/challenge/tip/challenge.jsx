import { useState } from "react";
import Total from "./total";
import Tip from "./tip";
import Bill from "./bill";

export default function Challenge2() {
  const [bill, setBill] = useState(0);
  const [tipMe, setTipMe] = useState(0);
  const [tipFriend, setTipFriend] = useState(0);

  function handleBill(event) {
    setBill(Number(event.target.value));
  }

  function handleTipMe(event) {
    const value = Number(event.target.value);
    let tip = 0;
    setTipMe(0);

    if (value === 1) tip = (bill / 2) * 0;
    if (value === 2) tip = ((bill / 2) * 5) / 100;
    if (value === 3) tip = ((bill / 2) * 10) / 100;
    if (value === 4) tip = ((bill / 2) * 20) / 100;

    setTipMe(Math.floor(tip));
  }

  function handleTipFriend(event) {
    const value = Number(event.target.value);
    let tip = 0;
    setTipFriend(0);

    if (value === 1) tip = (bill / 2) * 0;
    if (value === 2) tip = ((bill / 2) * 5) / 100;
    if (value === 3) tip = ((bill / 2) * 10) / 100;
    if (value === 4) tip = ((bill / 2) * 20) / 100;

    setTipFriend(Math.floor(tip));
  }

  function handleReset() {
    setBill(0);
    setTipFriend(0);
    setTipMe(0);
  }

  const totalTip = tipMe + tipFriend;
  return (
    <div
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Bill bill={bill} onHandleBill={handleBill} />
      <Tip bill={bill} onTip={handleTipMe} onTipFriend={handleTipFriend}>
        You
      </Tip>
      <Tip bill={bill} onTip={handleTipMe} onTipFriend={handleTipFriend}>
        Your Friend
      </Tip>
      <Total bill={bill} totalTip={totalTip} onHandleReset={handleReset} />
    </div>
  );
}
