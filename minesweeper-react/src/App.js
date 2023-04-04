import Board from './Board'
import './App.css';
import { useEffect, useState, createContext } from 'react';

export const BoardSize = createContext(); 

function App() {

  const [board, setBoard] = useState([])

  const boardSize = 10;
  let numberofMines = 10;

 
 
  function cell(row, col, mined){
  return {
          row: row, 
          col: col, 
          mined: mined
        }
 }

  

  useEffect(() => {
    const newBoard = []
    let counter = 1;
    for (let row = 0; row < 10; row++){
       let row =[]
        for (let col = 0; col < 10; col++){
            row.push(counter)
            counter++
        }
         newBoard.push(row)
    }
    setBoard(newBoard)
  }, [])


 function randomMines( board, numberOfMines){
  let mineCoords=[]
  
  for (let i =0; i < numberOfMines; i++){
    let randomRowCoord = getRandomInt(0, boardSize);
    let randomColCoord = getRandomInt(0, boardSize)
    console.log(randomRowCoord)
    while (mineCoords.includes(cell)){
      randomRowCoord = getRandomInt(0, board)
      randomColCoord = getRandomInt(0, board)
      cell = randomRowCoord + "" + randomColCoord;
    }
    mineCoords.push(cell);
    board[cell].mined = true;
  }
  return board
 }
 const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
 }


  return (
    <BoardSize.Provider value ={{board, setBoard}}>
      <div className="App">
        <Board />
      </div>
    </BoardSize.Provider>
  );
}

export default App;
