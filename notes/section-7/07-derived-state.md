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

[Next: Sorting Items](./08-sorting-item.md)
