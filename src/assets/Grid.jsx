import Card from "./components/Cards/Card.jsx";
import { useState } from "react";
import './Grid.css'
import isWinner from "./Winner.jsx";
function Grid({numberOfPlayers}){
    
    const[turn,setTurn]=useState(true);
    const [board,setBoard]=useState(Array(numberOfPlayers).fill(""));
    const [winner,setWinner]=useState(null);

    const play=(index)=>{
        if(turn){
            board[index]="O";
        }
        else{
            board[index]="X"
        }
        const win=isWinner(board,turn?'O':'X');
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    const Reset=()=>{
        setTurn(true);
        setBoard(Array(numberOfPlayers).fill(""));
        setWinner("");
    }
    return (
        <div className="Grid_wrapper">
            <h1 className="center">Tic Tac Toe</h1>
            <h3 className="highlight">current Turn: {turn ?'O':'X'}</h3>
        <div className="Grid">
            {board.map((elem,idx)=><Card key={idx} gameEnd={winner?true:false} onPlay={play} player={elem} index={idx}/>)}
        </div>
            {
                winner &&
                <div>  <h2 className="highlight">winner is : {winner}</h2> </div>
            }
        <button onClick={Reset} className="btn">Reset</button>
 </div>
    )
}
export default Grid