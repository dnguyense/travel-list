export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        You have {numItems} items in your packing list, and you already packed{" "}
        {numPacked}.
      </em>
    </footer>
  );
}
