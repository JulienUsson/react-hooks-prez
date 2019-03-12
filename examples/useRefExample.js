function FocusInput() {
  const input1 = useRef(null);
  const input2 = useRef(null);

  const focus = inputRef => () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div>
        <input ref={input1} type="text" />
        <button onClick={focus(input1)}>Focus input1</button>
      </div>
      <div>
        <input ref={input2} type="text" />
        <button onClick={focus(input2)}>Focus input2</button>
      </div>
    </div>
  );
}
