import { useRef } from "react";

function MyComponent() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me with the button" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

export default MyComponent
