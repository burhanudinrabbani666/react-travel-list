## Deleting Item

In this case, the function to delete an item is placed in the top section along with the initial data. This allows the function to be passed down to components that require it.

```jsx
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}
```

[Next: Updatating Item](./06-updating-item.md)
