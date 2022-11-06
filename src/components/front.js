import React from 'react'
import "./front.css"
import Board from '../TicTacToe/Board'

const front = () => {
    return (
        <div>
            <div className="heading">
                <h1 className="">Tic Tac Toe Game</h1>
            </div>
            
            <div className="container ">

                <Board />
            </div>

        </div>
    )
}

export default front