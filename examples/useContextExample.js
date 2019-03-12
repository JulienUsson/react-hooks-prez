const ThemeContext = React.createContext();

function DisplayTheme() {
  const context = useContext(ThemeContext);

  return <p>theme: {context}</p>;
}

render(
  <ThemeContext.Provider value="dark">
    <DisplayTheme />
  </ThemeContext.Provider>
);
