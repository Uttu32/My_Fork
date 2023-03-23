import React,{useState} from "react"
import Square from "./Square.jsx"
import "./Board.css"
 
export default function Board(){
  const[state,setState]=useState(Array(9).fill(null));
  const[isXturn,setIsXturn ]=useState(true);

  function handleClick(index){
    const copyState=[...state];
    if(copyState[index]==null){
    copyState[index]= isXturn? "X" : "O";
    setState(copyState);
    setIsXturn(!isXturn)
    }
  }

  function checkWinner(){
    const WinnerLogic=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0;i<WinnerLogic.length;i++){
      const [a,b,c]=WinnerLogic[i];
      if(state[a] === state[b]  && state[b] === state[c]  && state[a] !== null){
        return state[a];
      }
      
    }
    return false;
  }
  
  const isWinner=checkWinner();

  function handleReset(){
    setState(Array(9).fill(null))
    setIsXturn(true)
  }

  return (
    <div className="board-container">
      
      {isWinner ? <>{isWinner} Won</> :
      <>
      <h4>Player {isXturn ? "X" : "O"} Please Move</h4>
      <div className="board-row">
        <Square onClick={()=> {handleClick(0)}} value={state[0]}/>
        <Square onClick={()=> {handleClick(1)}} value={state[1]}/>
        <Square onClick={()=> {handleClick(2)}} value={state[2]}/>
      </div>

      <div className="board-row">
        <Square onClick={()=> {handleClick(3)}} value={state[3]}/>
        <Square onClick={()=> {handleClick(4)}} value={state[4]}/>
        <Square onClick={()=> {handleClick(5)}} value={state[5]}/>
      </div>

      <div className="board-row">
        <Square onClick={()=> {handleClick(6)}} value={state[6]}/>
        <Square onClick={()=> {handleClick(7)}} value={state[7]}/>
        <Square onClick={()=> {handleClick(8)}} value={state[8]}/>
      </div>
      </>
      }
      <br/>
      <button onClick={handleReset}>Play Again</button>
      
      
    </div>
  )
}