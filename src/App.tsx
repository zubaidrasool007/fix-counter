import { Counter, Multiplier, Divider, Subtraction } from "./componets";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        marginTop: "3%",
      }}
    >
      <Multiplier />
      <Subtraction />
      <Divider />
      <Counter />
    </div>
  );
}

export default App;
