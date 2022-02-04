import './Carta.css';

const Carta = ({animating, handleMemoClick, memoBlock,size}) => (
    <div className="memo-block" onClick={() => (!memoBlock.flipped && !animating) && handleMemoClick(memoBlock)}>
        <div className={size > 500 ? `memo-block-inner ${memoBlock.flipped && 'memo-block-flipped'}`: 
        `memo-block-inner-mobile ${memoBlock.flipped && 'memo-block-flipped-mobile'}` }>
            <div className="memo-block-front">
            </div>
            <div className="memo-block-back">
                {memoBlock.emoji}
            </div>
        </div>
    </div>
)

export default Carta;