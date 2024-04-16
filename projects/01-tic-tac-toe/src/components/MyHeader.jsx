export const MyHeader = ({resetGame}) => {
    return (
        <section>
            <h1>tic tac toe</h1>
            <button onClick={resetGame}>Reset Game</button>
        </section>
    );
}