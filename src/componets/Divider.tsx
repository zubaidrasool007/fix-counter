import { useCountContext } from "../context/CountProvider";
import { CounterCard } from "../shared";

export const Divider = () => {
  const { counter } = useCountContext();

  const opration = `6 / ${counter}`;
  const result = 6 / counter;
  const title = "Divider";

  return <CounterCard opration={opration} result={result} title={title} />;
};
