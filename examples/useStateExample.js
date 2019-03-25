function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={e => setCounter(counter + 1)}>Increment</button>
      <button onClick={e => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}
