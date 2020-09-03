import React, { useState } from 'react';

const CounterHook =()=> {
  const [count, setCount] = useState(0);

  return (
    <button onClick={()=> setCount(count + 1)}>{ count }</button>
  )
}
export default CounterHook;