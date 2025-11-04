import React, { useState, useEffect } from "react";

export function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  const storageKey = `counter-${initialCount}-${count}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) {
      setCount(Number(saved));
    }
  }, [setCount, storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, String(count));
  }, [count, storageKey]);

  const increment = () => setCount((prev) => prev + step);

  const decrement = () => {
    if (count == 0) {
      alert("the count is already 0");
    } else setCount((prev) => prev - step);
  };

  const reset = () => setCount(initialCount);

  return (
    <>
      <div className="counter">
        <div className="display">
          <button
            onClick={decrement}
            aria-label="decrement"
          >
            −
          </button>
          <span className="value">{count}</span>
          <button
            onClick={increment}
            aria-label="increment"
          >
            +
          </button>
        </div>

        <div className="controls">
          <button onClick={reset}>Reset</button>
          <span className="meta">
            start: {initialCount} • step: {step}
          </span>
        </div>
      </div>
    </>
  );
}
