export default function Tip({ bill, onTip, onTipFriend, children }) {
  const validateWho = children === "You" ? onTip : onTipFriend;

  if (bill === 0) {
    return (
      <div>
        <span style={{ marginRight: "20px" }}>
          how Dou {children} like the serivce?
        </span>
        <select onChange={validateWho}>
          <option>Add Bill</option>
        </select>
      </div>
    );
  }

  return (
    <div>
      <span style={{ marginRight: "20px" }}>
        how Dou {children} like the serivce?
      </span>
      <select onChange={validateWho}>
        <option value="1">Dissatisfied (0%)</option>
        <option value="2">it was Okay (5%)</option>
        <option value="3">it was good (10%)</option>
        <option value="4">Absolutly Amazing (20%)</option>
      </select>
    </div>
  );
}
