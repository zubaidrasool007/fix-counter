import { useCountContext } from "../context/CountProvider";

export const Counter = () => {
  const { counter, setCounter } = useCountContext();

  const Increment = () => {
    setCounter?.(counter + 1);
  };

  const Decrement = () => {
    setCounter?.(counter - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "40%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "70%",
          height: "15vh",
          marginRight: "2%",
          border: "1px solid #ea9595",
          borderRadius: "10px",
        }}
      >
        <button
          data-testid="Decrement"
          style={{
            fontSize: "80%",
            marginLeft: "5px",
            backgroundColor: "#647181",
            border: "none",
            color: "white",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
          onClick={Decrement}
        >
          Decrement
        </button>

        <div
          style={{
            fontSize: "150%",
          }}
        >
          <p data-testid="counter"> {counter} </p>
        </div>
        <button
          data-testid="increment"
          style={{
            fontSize: "80%",
            marginRight: "5px",
            backgroundColor: "#dee1de",
            borderRadius: "10px",
            border: "none",
            color: "black",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          onClick={Increment}
        >
          Increment
        </button>
      </div>
      <h3 style={{ color: "#bf6363" }}>Counter</h3>
    </div>
  );
};
