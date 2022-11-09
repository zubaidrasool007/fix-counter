import { useCountContext } from "../context/CountProvider";
import { CounterCard } from "../shared";

export const Subtraction = () => {
  const { counter } = useCountContext();

  const opration = `4 - ${counter}`;
  const result = 4 - counter;
  const title = "Subtraction";

  return <CounterCard opration={opration} result={result} title={title} />;
};
