const ColorBtn = ({ color, onClick }) => {
  return (
    <button
      onClick={() => onClick(color)}
      style={{
        backgroundColor: color,
        color: "whitesmoke",
        margin: "5px",
        padding: "10px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {color}
    </button>
  );
};

export default ColorBtn;
