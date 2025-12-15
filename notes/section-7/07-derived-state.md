## Derived State

### Right Implement

```jsx
const [cart, setCart] = useState([
  {name: "Tesla", price: 1999}
  {name: "BYD", price: 1555}
])

const numItems = cart.length
const totalPrice = cart.reduce((acc, curr) => acc+ cur.price, 0)
```

**Derived State**: state that is computed from an existing piece of state or form props
Just reguler variable, no use state
cart state is the single source of truth for related data
Works because re-rendering component will automatically re calculated derived state

### Wrong Implement

```jsx
const [cart, setCart] = useState([
  {name: "Tesla", price: 1999}
  {name: "BYD", price: 1555}
])

const [numItems, setNumItems] = useState(2)
const [totalPrice, setTotalPrice] = useState(3554)
```

- Three separate pieces of state, even though numItems and totalPrice depend on cart
- Need to keep them in ync (update together)
- 3 state updates will cause 3 re-renders

## Derived state on practice

Because you only want to display the data without changing it, there's no need to use useState. Just put it in a variable.

```jsx
function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start add some item to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numberPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everthing! Reay to Go ✈️"
          : `👜 You Have ${numItems} item on your list, and you already packed ${numberPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
```

[Next: Sorting Items](./08-sorting-item.md)
