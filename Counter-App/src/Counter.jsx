import { useState } from "react";

export function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  const storageKey = `counter-${initialCount}-${count}`;

  return (
    <>
      <div className="counter">
        <div className="display">
          <button
            // onClick={decrement}
            aria-label="decrement"
          >
            −
          </button>
          <span className="value">{count}</span>
          <button
            // onClick={increment}
            aria-label="increment"
          >
            +
          </button>
        </div>

        <div className="controls">
          <button>Reset</button>
          <span className="meta">
            start: {initialCount} • step: {step}
          </span>
        </div>
      </div>
    </>
  );
}
