import { render, fireEvent, screen } from "@testing-library/react";
import { Counter } from "./componets";
import App from "./App";
import { CountContext } from "./context/CountProvider";

test("testing the counter exists", () => {
  // render the component we are testing
  render(<App />);

  const Counter = screen.getByTestId("counter");

  expect(Counter).toBeInTheDocument();
});

test("increment", () => {
  const setCounter = jest.fn();

  render(
    <CountContext.Provider value={{ counter: 0, setCounter }}>
      <Counter />
    </CountContext.Provider>
  );
  const incrementBtn = screen.getByTestId("increment");

  // Clicking on the increment button
  fireEvent.click(incrementBtn);

  expect(setCounter).toBeCalledTimes(1);
  expect(incrementBtn).toBeInTheDocument();
});

test("increment", () => {
  const setCounter = jest.fn();
  // render the component we are testing
  render(
    <CountContext.Provider value={{ counter: 0, setCounter }}>
      <Counter />
    </CountContext.Provider>
  );
  // Testing the Decrement Button
  const DecrementBtn = screen.getByTestId("Decrement");

  // Clicking on the Decrement button
  fireEvent.click(DecrementBtn);

  expect(setCounter).toBeCalledTimes(1);
  expect(DecrementBtn).toBeInTheDocument();
});
