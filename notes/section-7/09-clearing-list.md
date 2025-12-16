## Clearing list

It's actually easy. Just set the Item to an empty array and then pass the function from the top to the button.

```jsx
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
      onClearList={handleClearList} //  this
    />
    <Stats items={items} />
  </div>
);
```

[Next: Moving Component to separate files](./10-moving-components.md)
