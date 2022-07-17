import React, { useState } from 'react';
import './tictactoe.css';

const TicTacToe = () => {
	const [turn, setTurn] = useState('X');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();
    const [counter, setCounter] = useState(1);

	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
	};

	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('Already clicked!');
			return;
		}

		let squares = [...cells];

		if (turn === 'X') {
			squares[num] = 'X';
			setTurn('O');
            setCounter(count => count+1);
		} else {
			squares[num] = 'O';
			setTurn('X');
            setCounter(count => count+1);
		}

		checkForWinner(squares);
		setCells(squares);
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
        setCounter(1);
        setTurn('X');
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	return (
		<div className='container'>
			<div className='Stat'>
                Turn: {counter}
            </div>
            <div className='Stat'>
                Player: {turn}
            </div>
            <table>
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<div>
					<p>{winner} is the winner!</p>
                    {
                        setTimeout( handleRestart, 2000)
                    }
				</div>
			)}
            <div>
				<button className="Reset" onClick={() => handleRestart()}>Reset</button>
            </div>
		</div>
	);
};

export default TicTacToe;