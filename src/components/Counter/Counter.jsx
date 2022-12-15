import { useState, useReducer } from 'react';
import './Counter.css';

function countReducer(state, actions) {
  switch (actions.type) {
    case 'increment':
      return { ...state, count: state.count + actions.payload };

    case 'decrement':
      return { ...state, count: state.count - actions.payload };

    default:
      return state;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className="Counter">
      <p>{state.count}</p>
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
