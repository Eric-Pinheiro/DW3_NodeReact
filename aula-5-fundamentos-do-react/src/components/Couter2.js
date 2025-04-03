import { useState } from "react";
const Counter2 = () => {
const [count, setCount] = useState(0)
    return (
    <>
      <div>
        <p>Contador:{count}</p>
        <button onClick={()=> setCount(count+1)}>Aumentar</button>
        <button onClick={()=> setCount(count-1)}>Aumentar</button>
        <button onClick={()=> setCount( 0)}>Zerar</button>
      </div>
    </>
  );
};
export default Counter2