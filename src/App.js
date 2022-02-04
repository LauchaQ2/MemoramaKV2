import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Tablero from './Tablero/Tablero';
import Header from './Header/Header';
const emojiList = [...'💣🧤🎩🌮🎱🌶🍕🦖'];

const App = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [tries, setTries] = useState(0);

  const [size, setSize] = useState(window.innerWidth);

    useEffect(()=>{
      const handleSize = () =>{
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", handleSize)
    },[])


  useEffect( () => {
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(shuffledEmojiList.map( (emoji, i) => ({ index: i, emoji, flipped: false}) ));
  }, []);

  const restart = () =>{
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(shuffledEmojiList.map( (emoji, i) => ({ index: i, emoji, flipped: false}) ));
  }

  const shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleMemoClick = memoBlock => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
    if(selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if(selectedMemoBlock.emoji === memoBlock.emoji) {
      setselectedMemoBlock(null);
      setTries(tries + 1)
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
        setTries(tries + 1)
      }, 1000);
    }
  }

  return (
    <><Header size={size} restart={restart} tries={tries}/>
    <Tablero size={size}  memoBlocks={shuffledMemoBlocks} animating={animating} handleMemoClick={handleMemoClick} />
    </>
  );
}

export default App;