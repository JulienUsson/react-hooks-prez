function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter !== 0) {
      // Update the document title using the browser API
      document.title = `You clicked ${counter} times`;
    }

    return () => {
      document.title = `React Hooks`;
    };
  }, [counter]);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={e => setCounter(counter + 1)}>Click</button>
    </div>
  );
}
