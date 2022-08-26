import React, { useEffect } from 'react'
import { useState } from 'react'
import './table.css'

export const Table = () => {

   const [matriz, setMatriz] = useState([['','',''],['','',''],['','','']])
   const [jugador, setJugador] = useState('x')
   
   useEffect(() => {
     
     if(matriz[0][0] === matriz[1][1] && matriz[2][2] === matriz[0][0]){
          alert('ahy un ganador')
     }else if(matriz[0][2] === matriz[1][1] && matriz[2][0] === matriz[0][2]){
          alert('ahy otro ganador')
     }else if(matriz[0][0] === matriz[0][1] && matriz[0][2] === matriz[0][0]){
          alert('un nuevo ganador')
     }else if(matriz[1][0] === matriz[1][1] && matriz[1][2] === matriz[1][0]){
          alert('eh ya gano')
     }else if(matriz[2][0] === matriz[2][1] && matriz[2][2] === matriz[2][0]){
          alert('otra vez gano')
     }
   }, [matriz])
   
  
 const click = (i,j) => {
   if(matriz[i][j] === ''){
     matriz[i][j] = jugador 
   setMatriz([...matriz])
   if(jugador === 'x') {
     setJugador('o')
   }else{
     setJugador('x')
   }
   }
 }

  return (
    <div className='table fondo'>
      {
        matriz.map((fila, i) => (
          fila.map((ele, j) => (
               <div className='cell' onClick={() => click(i,j)}>{ele}</div>
          ))
        ))  
      }        
    </div>
    
  )
}
