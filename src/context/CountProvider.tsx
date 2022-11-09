import { useContext, createContext, useState } from "react";

export const CountContext = createContext<{
  counter: number;
  setCounter: Function;
}>({ counter: 0, setCounter: () => null });
export const CountProvider = ({ children }: any) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <CountContext.Provider value={{ counter, setCounter }}>
        {children}
      </CountContext.Provider>
    </div>
  );
};

export const useCountContext = () => {
  return useContext(CountContext);
};
