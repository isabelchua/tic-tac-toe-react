import React, { useState } from "react";

// const gameStyles = {
// 	backgroundColor: "salmon",
// 	margin: 10,
// 	padding: 20
// };

const Square = props => {
	// const [value, setValue] = useState(null);

	return (
		<button className="square" onClick={props.onClickEvent}>
			{props.value}
		</button>
	);
};

const Board = () => {
	// const initialSquares = [
	// 	null,
	// 	null,
	// 	null,
	// 	null,
	// 	null,
	// 	null,
	// 	null,
	// 	null,
	// 	null
	// ];
	const initialSquares = Array(9).fill(null);
	const [squares, setSquares] = useState(initialSquares);
	const [xIsNext, setXIsNext] = useState(true);

	const handleClickEvent = i => {
		//alert(`square ${i} clicked`);
		//squares[i] = 'X';

		const newSquares = [...squares];
		newSquares[i] = xIsNext ? "X" : "O";
		setSquares(newSquares);
		setXIsNext(!xIsNext);
	};

	const renderSquare = i => {
		return (
			<Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
		);
	};

	const status = `Next player: ${xIsNext ? "X" : "O"}`;

	return (
		<div className="status">
			{/* Board */}
			<div>{status}</div>
			<div className="board-row">
				{renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
			</div>
		</div>
	);
};

const Game = () => {
	return (
		<div className="game">
			Tic-Tac-Toe
			<Board />
		</div>
	);
};

export default Game;
