- [x] Why would you use class component over function components (removing hooks from the question)?

Function components work with state and changing data, which is great, but class components can be great for simplifying the code, focusing on display, and testability. They are also nicer for testing because they're more pure.

- [x] Name three lifecycle methods and their purposes.

componentDidMount = runs the code inside only once (when the component mounts)
componentDidUpdate = runs the code inside when things change, and rerenders the component
componentWillUnmount = removes component and cleans up

- [x] What is the purpose of a custom hook?

It pulls out stateful logic and gives us a way to reuse that, in a similar way to writing functions that can work in multiple ways by using different parameters. So basically reusability, and creating clean and readable code.

- [x] Why is it important to test our apps?

Reveals bugs, helps us to trust/rely on our code, makes our code more readable to others, makes us think in more detail about what we are writing and what could go wrong, etc etc.