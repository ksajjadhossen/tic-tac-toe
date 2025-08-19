import { useState } from "react";

export default function Box() {
  function Square() {
    const [value, setValue] = useState(null);
    function handleClick() {
      setValue("X");
    }
    return (
      <button
        className="bg-white border border-gray-400 h-12 w-12 m-1 leading-0 text-lg"
        onClick={handleClick}
      >
        {value}
      </button>
    );
  }
  return (
    <>
      <div className="flex">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="flex">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="flex">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  );
}
