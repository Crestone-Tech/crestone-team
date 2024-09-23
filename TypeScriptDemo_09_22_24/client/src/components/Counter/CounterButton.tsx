function CounterButton({ count, handleIncrementCount }: CounterButtonProps) {
  const handleClick = () => {
    handleIncrementCount();
  };

  return <button onClick={handleClick}>Count Plus Plus: {count} </button>;
}

export default CounterButton;
