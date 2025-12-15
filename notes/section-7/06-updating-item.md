## Updating Item

Here, I created a new function to change the packed state from always false to true. The function remains at the top of the application.

using onChange

```jsx
function handleToogleItem(id) {
  setItems((items) =>
    items.map((item) =>
      item.id === id
        ? { ...item, packed: !item.packed } // still not mutating initial item
        : item
    )
  );
}

<PackingList
  items={items}
  onDeleteItem={handleDeleteItem}
  onToggleItem={handleToogleItem}
/>;

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed} // set packed initial
        onChange={() => onToggleItem(item.id)}
      />
      <span
        style={
          item.packed
            ? { textDecoration: "line-through" } //
            : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❎</button>
    </li>
  );
}
```

[Next: Derived State](./07-derived-state.md)
