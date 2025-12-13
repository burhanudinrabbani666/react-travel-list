## Lifting State

we just need to make the data move up to the top where the other components need the data. then distribute data or functions using props.

```jsx
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}
```

[Next: Review Lifting State](./04-review-lifting-state.md)
