import { useCountContext } from "../context/CountProvider";
import { CounterCard } from "../shared";

export const Multiplier = () => {
  const { counter } = useCountContext();

  const opration = `-5 * ${counter}`;
  const result = -5 * counter;
  const title = "Multiplier";

  return <CounterCard opration={opration} result={result} title={title} />;
};
