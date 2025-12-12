## Building Form

### Array.form()

[MDN: Array.form()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

```js
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

```jsx
function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What Do you need for your 😍 trip?</h3>

      <select name="" id="">
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>

      <input type="text" placeholder="Item..." />

      <button type="submit">Add</button>
    </form>
  );
}
```

[Next: Controlled Elements](./03-controlled-elements.md)
