function Hello(props) {
  return <p>Hello {props.children}</p>;
}

render(
  <div>
    <Hello>Julien</Hello>
    <Hello>{41 + 1}</Hello>
    <Hello />
  </div>
);
