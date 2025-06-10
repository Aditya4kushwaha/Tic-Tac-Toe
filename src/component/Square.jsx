const Square = ({ value, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      <h1>{value}</h1>
    </div>
  );
};

export default Square;
