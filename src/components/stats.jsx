export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start add some item to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numberPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everthing! Reay to Go ✈️"
          : `👜 You Have ${numItems} item on your list, and you already packed ${numberPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
