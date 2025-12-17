## Fundamentals of State Management

### What is state Management

State Management: Deciding when to create pieces of state, what types are necessary, where to place each piece of state, and how data flows through the app => 🏠 Giving each piece of state HOME

### Local State 🏡

- State needed only by one component or few components
- State that is defined in a components and **only that components and child components** have access to it (by passing via props)
- We should always start with local state

### Global State 🌐

- State that many components might need
- Shared state that is accessible every component in the entire application

### State When and Where

![State](../../public/state-decision.drawio.svg)

[Thinking About State and Lifting State](./03-thinking-about-state-and-lifting-state.md)
