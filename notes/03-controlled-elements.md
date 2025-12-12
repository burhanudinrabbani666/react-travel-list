## Controlled Elements

To Controlled Elementin React we need:

1. Set useState.
2. Use piece of state on the element that we want control.
3. Update that state variable. with on change.

### Controlled Components in ReactJS

[Geeks: Contorlled Components](https://www.geeksforgeeks.org/reactjs/what-are-controlled-components-in-reactjs/)

Controlled components are form elements managed by React state, allowing React to control and update their values for better input handling and validation. This makes it easier to debug and keeps data consistent throughout the app.

Usage of Controlled Components:

- Consistency: Ensures reliable data through React-managed inputs.
- Flexibility: Allows custom logic like validation.
- Debugging: Simplifies debugging with explicit state management.
- Forms: Perfect for handling forms and user input.

Flow of Controlled Component

![flow](https://media.geeksforgeeks.org/wp-content/uploads/20250812125154726876/flow_of_a_controlled_component.webp)

- Input Element: The user changes the input value.
- Change Handler: The onChange event captures the new value and updates the state.
- Component State: The state holds the updated input value.
- Validate & Update: The value is validated and the state is updated.
- Re-render: The input element is re-rendered with the updated value.

```jsx
function From() {
  // 1. Set Use State
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What Do you need for your 😍 trip?</h3>

      <select
        // 2. Use Piece Of State
        // 3. Update setState
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}
```

[Next: State vs Props](./04-state-vs-props.md)
