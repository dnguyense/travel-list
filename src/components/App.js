import { useState } from "react";
import Logo from "./Logo";
import { Form } from "./Form";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const confimed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confimed) setItems([]);
  }
  return (
    <div className="App">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
