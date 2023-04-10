import React, { useState } from 'react';
// import './index.css';

export default function App() {
  //   3": [
  //     "create an array with multiple greetings",
  //     "create a button and handle click on button ",
  //     "show the next greeting message on h1"
  //   ]

  const [count, SetCount] = useState(0);

  let array = ['Hello ', 'Happy Birthday ', 'Welcome', 'Jai Shree Ram', 'Its a pleasure meeting to you', 'Nice to meet you'];

  function handleCount() {
    if (count < array.length - 1) {
      SetCount(count + 1);
    } else {
      SetCount(0);
    }
  }

  return (
    <div>
      <p>{array[count]}</p>
      <button onClick={handleCount}>Next Greeting</button>
    </div>
  );
}
