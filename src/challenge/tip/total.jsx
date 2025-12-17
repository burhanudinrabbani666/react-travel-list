export default function Total({ bill, totalTip, onHandleReset }) {
  if (bill > 0)
    return (
      <>
        <span>
          You pay ${bill + totalTip} (${bill} + ${totalTip} )
        </span>

        <button type="submit" onClick={onHandleReset}>
          reset
        </button>
      </>
    );
}
