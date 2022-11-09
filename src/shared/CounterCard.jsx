export const CounterCard = ({ opration, result, title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "40%",
        margin: "auto",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "70%",
          marginRight: "2%",
          border: "1px solid #ea9595",
          borderRadius: "10px",
          flexWrap: "wrap",
          overflow: "hidden",
          paddingTop: "10px",
          boxSizing: "border-box",
        }}
      >
        <h3
          style={{
            fontSize: "150%",
            margin: 0,
            marginBottom: "10px",
          }}
        >
          {opration}
        </h3>
        <div
          style={{
            width: "100%",
            padding: "5px 20px",
            fontSize: "150%",
            background: "#ea9595",
            color: "#fff",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            boxSizing: "border-box",
          }}
        >
          <p style={{ margin: 0 }}>{result}</p>
        </div>
      </div>
      <h3 style={{ color: "#bf6363" }}>{title}</h3>
    </div>
  );
};
