const ColorBtn = ({ color, onClick }) => {
  return (
    <button
      onClick={() => onClick(color)}
      style={{
        backgroundColor: color,
        color: "black",
        margin: "5px",
        padding: "10px",
        border: "2px solid whitesmoke",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {color}
    </button>
  );
};

export default ColorBtn;
