## Children prop

children props is a hole can be fill in html content.

```jsx
<Button textColor="#fff" backgroundColor="#7950f2" onClick={handleNext}>
  Next <span>👉</span>
</Button>;

function Button({ textColor, backgroundColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {children}
    </button>
  );
}
```

[Next: More Reusebaity](./13-more-reusability.md)
