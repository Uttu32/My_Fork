import React,{useState} from 'react'
import "./Que1.css"

const Que1 = () => {
    const [count, setCount] = useState(2);
    let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    const hanelupdate = () => {
      const value = Math.trunc(Math.random() * 100 + 1 );
      setCount(value);
    };
  
    return (
      <div>
        <h4>Print Random table</h4>
        <ul>
          {Array.map((ele) => {
            return <li className="List">{count * ele}</li>;
          })}
        </ul>
  
        <button onClick={hanelupdate}>Update</button>
      </div>
    );
}

export default Que1
