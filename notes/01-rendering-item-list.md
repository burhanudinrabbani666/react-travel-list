# Rendering Item List

For rendering a list using array method .map()

```jsx
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item item={item} />; // Returning Another Component
        })}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span
        style={
          // Conditional Style
          item.packed
            ? { textDecoration: "line-through" } //
            : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button>❎</button>
    </li>
  );
}
```

[Next: Building a From](./02-building-a-form.md)
