## Refactoring

Refactoring is the systematic process of improving the internal structure of program code without changing its external functionality, with the goal of making the code easier to read, understand, and maintain, while reducing complexity and "technical debt." This process involves small changes such as renaming variables, eliminating duplication, and breaking up large functions, making it a crucial part of software development for maintaining code quality over time.

```jsx
// logo.jsx

export default function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}
```

```jsx
import { useState } from "react";
import Logo from "./components/logo";
import Form from "./components/form";
import PackingList from "./components/packing-list";
import Stats from "./components/stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, packed: !item.packed } // still not mutating initial item
          : item
      )
    );
  }

  function handleClearList() {
    const confirmed = confirm(`Are Yoou sure Delete All Item`);

    confirmed && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToogleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
```

[Next: Exercise #1](./11-exercise1.md)
