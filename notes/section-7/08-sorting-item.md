## Sorting Items

Here, I've added options for sorting by input, alphabet, and packed. Using onChange to track the user's clicked value, I've included it in an if-else statement to change the data display.

```jsx
const [sortBy, setSortBy] = useState("input");

return;
<div className="actions">
  <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
    <option value="input">Sort by Input Order</option>
    <option value="description">Sort by Description</option>
    <option value="packed">Sort by Packed Status</option>
  </select>
</div>;
```

The three sorting types are:

- value === input

```jsx
if (sortBy === "input") sortedItems = items;
```

- value ==== description

```jsx
if (sortBy === "description")
  sortedItems = items
    .slice()
    .sort((a, b) => a.description.localeCompare(b.description));
```

- value ==== packed

```jsx
if (sortBy === "packed")
  sortedItems = items
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));
```

## Array.prototype.sort()

[MDN: Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

To sort the elements in an array without mutating the original array, use toSorted().

[Next: Clearing List](./09-clearing-list.md)
