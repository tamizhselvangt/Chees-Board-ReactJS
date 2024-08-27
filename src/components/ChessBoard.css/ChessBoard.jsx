import { useState } from 'react';

import './ChessBoard.css'
export default function ChessBoard() {

  const [currentPiece, setSavedContent] = useState(''); 

  const handleSaveContent = (event) => {
   if(currentPiece !=='')
      return;
     const piece = event.target.innerHTML;
     event.target.innerHTML = ''
    setSavedContent(piece); 
  };

  const handleLoadContent = (event) => {
    if(currentPiece==='')
        return;
    event.target.innerHTML = currentPiece; 
    setSavedContent(''); 
  };

  return (
    <>
    <div className="chess-board">
       <table class="center">
      <tr class="border">
        <td class="box-inner"></td>
        <td class="box-inner"><b>A</b></td>
        <td class="box-inner"><b>B</b></td>
        <td class="box-inner"><b>C</b></td>
        <td class="box-inner"><b>D</b></td>
        <td class="box-inner"><b>E</b></td>
        <td class="box-inner"><b>F</b></td>
        <td class="box-inner"><b>G</b></td>
        <td class="box-inner"><b>H</b></td>
        <td class="box-inner"></td>
      </tr>
    <tr>
      <td class="box-inner"><b>1</b></td>
      <td class="odd"  onClick={handleSaveContent}><i class="fa-solid rook fa-chess-rook"></i></td>
      <td class="even"  onClick={handleSaveContent}><i class="fa-solid knight fa-chess-knight"></i></td>
      <td class="odd"  onClick={handleSaveContent}><i class="fa-solid bishop fa-chess-bishop"></i></td>
      <td class="even"  onClick={handleSaveContent}><i class="fa-solid king fa-chess-king"></i></td>
      <td class="odd"  onClick={handleSaveContent}><i class="fa-solid queen fa-chess-queen"></i></td>
      <td class="even"  onClick={handleSaveContent}><i class="fa-solid bishop fa-chess-bishop"></i></td>
      <td class="odd"  onClick={handleSaveContent}><i class="fa-solid knight fa-chess-knight"></i></td>
      <td class="even"  onClick={handleSaveContent}><i class="fa-solid rook fa-chess-rook"></i></td>
      <td class="box-inner"  onClick={handleSaveContent}><b>1</b></td>
    </tr>
         <tr>
      <td class="box-inner"><b>2</b></td>
      <td class="even" onClick={handleSaveContent}><i class="fa-solid pawn fa-chess-pawn"></i></td>
      <td class="odd"  onClick={handleSaveContent}><i class="fa-solid pawn fa-chess-pawn"></i></td>
      <td class="even"  onClick={handleSaveContent}><i class="fa-solid pawn fa-chess-pawn"></i></td>
      <td class="odd"  onClick={handleSaveContent}><i class="fa-solid pawn fa-chess-pawn"></i></td>
      <td class="even"  onClick={handleSaveContent}><i class="fa-solid pawn fa-chess-pawn"></i></td>
      <td class="odd"  onClick={handleSaveContent}><i class="fa-solid pawn fa-chess-pawn"></i></td>
      <td class="even"  onClick={handleSaveContent}><i class="fa-solid pawn fa-chess-pawn"></i></td>
      <td class="odd"  onClick={handleSaveContent}><i class="fa-solid pawn fa-chess-pawn"></i></td>
      <td class="box-inner" ><b>2</b></td>
    </tr>
    

    <tr>
      <td class="box-inner"><b>3</b></td>
      <td class="odd"   onClick={handleLoadContent}></td>
      <td class="even"  onClick={handleLoadContent}></td>
      <td class="odd"   onClick={handleLoadContent}></td>
      <td class="even"  onClick={handleLoadContent}></td>
      <td class="odd"   onClick={handleLoadContent}></td>
      <td class="even"  onClick={handleLoadContent}></td>
      <td class="odd"   onClick={handleLoadContent}></td>
      <td class="even"  onClick={handleLoadContent}></td>
      <td class="box-inner"><b>3</b></td>
      
    </tr>
    <tr>
      <td class="box-inner"><b>4</b></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="box-inner"><b>4</b></td>
      
    </tr>
    <tr>
      <td class="box-inner"><b>5</b></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="box-inner"><b>5</b></td>
      
    </tr>
    <tr>
      <td class="box-inner"><b>6</b></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="even" onClick={handleLoadContent}></td>
      <td class="odd" onClick={handleLoadContent}></td>
      <td class="box-inner"><b>6</b></td>
      
    </tr>
    <tr>
      <td class="box-inner"><b>7</b></td>
      <td class="odd" onClick={handleSaveContent}><i class="fa-regular pawn fa-chess-pawn"></i></td>
      <td class="even" onClick={handleSaveContent}><i class="fa-regular pawn fa-chess-pawn"></i></td>
      <td class="odd" onClick={handleSaveContent}><i class="fa-regular pawn fa-chess-pawn"></i></td>
      <td class="even" onClick={handleSaveContent}><i class="fa-regular pawn fa-chess-pawn"></i></td>
      <td class="odd" onClick={handleSaveContent}><i class="fa-regular pawn fa-chess-pawn"></i></td>
      <td class="even" onClick={handleSaveContent}><i class="fa-regular pawn fa-chess-pawn"></i></td>
      <td class="odd" onClick={handleSaveContent}><i class="fa-regular pawn fa-chess-pawn"></i></td>
      <td class="even" onClick={handleSaveContent}><i class="fa-regular pawn fa-chess-pawn"></i></td>
      <td class="box-inner"><b>7</b></td>
      
    </tr>
    <tr>
      <td class="box-inner"><b>8</b></td>
      <td class="even" onClick={handleSaveContent}><i class="fa-regular rook fa-chess-rook"></i></td>
      <td class="odd" onClick={handleSaveContent}><i class="fa-regular knight fa-chess-knight"></i></td>
      <td class="even" onClick={handleSaveContent}><i class="fa-regular bishop fa-chess-bishop"></i></td>
      <td class="odd" onClick={handleSaveContent}><i class="fa-regular king fa-chess-king"></i></td>
      <td class="even" onClick={handleSaveContent}><i class="fa-regular queen fa-chess-queen"></i></td>
      <td class="odd" onClick={handleSaveContent}><i class="fa-regular bishop fa-chess-bishop"></i></td>
      <td class="even" onClick={handleSaveContent}><i class="fa-regular knight fa-chess-knight"></i></td>
      <td class="odd" onClick={handleSaveContent}><i class="fa-regular rook fa-chess-rook"></i></td>
      <td class="box-inner"><b>8</b></td>
      
    </tr>
    <tr class="border">
      <td class="box-inner"></td>
      <td class="box-inner"><b>A</b></td>
      <td class="box-inner"><b>B</b></td>
      <td class="box-inner"><b>C</b></td>
      <td class="box-inner"><b>D</b></td>
      <td class="box-inner"><b>E</b></td>
      <td class="box-inner"><b>F</b></td>
      <td class="box-inner"><b>G</b></td>
      <td class="box-inner"><b>H</b></td>
      <td class="box-inner"></td>
    </tr>
  <tr>
    </tr>
  </table>
 </div>
 <div className='note'>
 <span>Note:</span><br />
   Plese Click the Cell. Don't Click the Pieces
 </div>
    </>
  );
}
