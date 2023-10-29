export default function Stats({ items }) {
  //if no items
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  //for if items have
  const numItems = items.length; //derived state depend on items
  const numPacked = items.filter((item) => item.packed).length; //derived state depend on items
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! ready to go ✈️"
          : `💼 You have ${numItems} items on your list , and you already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
