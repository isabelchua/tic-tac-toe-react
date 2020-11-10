import React from "react";

// const gameStyles = {
// 	backgroundColor: "salmon",
// 	margin: 10,
// 	padding: 20
// };

const Square = () => {
	return <div className="square">X</div>;
};

const Board = () => {
	const renderSquare = () => {
		return <Square />;
	};

	return (
		<div style={{ backgroundColor: "skyblue", margin: 10, padding: 20 }}>
			Board
			<div className="board-row">
				{renderSquare()} {renderSquare()} {renderSquare()}
			</div>
			<div className="board-row">
				{renderSquare()} {renderSquare()} {renderSquare()}
			</div>
			<div className="board-row">
				{renderSquare()} {renderSquare()} {renderSquare()}
			</div>
		</div>
	);
};

const Game = () => {
	return (
		<div className="game">
			Game
			<Board />
		</div>
	);
};

export default Game;
