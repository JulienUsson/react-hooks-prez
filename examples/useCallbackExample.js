function RandomNumber(props) {
  return <p onClick={props.onClick}>{Math.random()}</p>;
}

const RandomNumberMemo = React.memo(RandomNumber);

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClickCallback = useCallback(function() {
    console.log("clicked !");
  }, []);

  const handleClick = function() {
    console.log("clicked !");
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <RandomNumber />
      <RandomNumberMemo />
      <RandomNumberMemo onClick={handleClick} />
      <RandomNumberMemo onClick={handleClickCallback} />
      <button onClick={e => setCounter(counter + 1)}>change state</button>
    </div>
  );
}

render(<Counter />);
