function Hello(props) {
  return <p>Hello {props.name}</p>;
}

render(
  <div>
    <Hello name="Julien" />
    <Hello name={41 + 1} />
    <Hello />
  </div>
);
