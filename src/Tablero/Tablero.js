import React from 'react';
import Carta from '../Carta/Carta';
import './Tablero.css';

export default function Tablero({animating, handleMemoClick, memoBlocks, size}){

    

    return (
        <><main className={size > 500 ? "board text-center" : "board-mobile text-center"}>
            {memoBlocks.map((memoBlock, i) => {
                return <Carta size={size} key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />;
            })}
        </main>
        </>
    );
}

