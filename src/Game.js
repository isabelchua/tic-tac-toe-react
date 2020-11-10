import React from "react";

// const gameStyles = {
// 	backgroundColor: "salmon",
// 	margin: 10,
// 	padding: 20
// };

const Board = () => {
	return (
		<div style={{ backgroundColor: "skyblue", margin: 10, padding: 20 }}>
			Board
		</div>
	);
};

const Game = () => {
	return (
		<div
			style={{
				backgroundColor: "salmon",
				margin: 10,
				padding: 20
			}}
		>
			Game
			<Board />
		</div>
	);
};

export default Game;
