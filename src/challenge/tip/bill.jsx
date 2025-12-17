export default function Bill({ bill, onHandleBill }) {
  return (
    <div>
      <span style={{ marginRight: "20px" }}>How much was the bill?</span>
      <input
        type="text"
        onChange={onHandleBill}
        placeholder="Bill Value "
        value={bill > 0 ? bill : ""}
      />
    </div>
  );
}
