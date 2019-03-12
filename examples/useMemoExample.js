function HeavyComputation(props) {
  const [counter, setCounter] = useState(0);

  const memoizedValue = useMemo(
    function() {
      console.log("HeavyComputation");
      return (props.value * 42) / 23;
    },
    [props.value]
  );

  return (
    <div>
      <p>{memoizedValue}</p>
      <p>{counter}</p>
      <button onClick={e => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

render(<HeavyComputation value={7594} />);
