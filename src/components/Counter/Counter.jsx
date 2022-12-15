import { useState, useReducer } from 'react';
import './Counter.css';

function countReducer(state, actions) {
  switch (actions.type) {
    case 'increment':
      return state + actions.payload;

    case 'decrement':
      return state - actions.payload;

    default:
      return state;
  }
}

export function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="Counter">
      <p>{count}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Зменшити на 1
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Збільшити на 1
      </button>
    </div>
  );
}
