import './App.css';
import { useState } from 'react';
import Card from './components/card.jsx';
import {hastas} from './components/hastaData.js'


const App = () => {

  const [flipped, setIsFlipped]= useState(false);
  const [category, setCategory]= useState('all');

  function getDeck(category) {
  if (category === 'all') return [...hastas.asamyutha, ...hastas.samyutha];
  return hastas[category];
}

function getRandomCard(deck) {
  const i = Math.floor(Math.random() * deck.length);
  return deck[i];
}

  const deck= getDeck(category);

  const [currentCard, setCurrentCard] = useState(
    getRandomCard(getDeck('all'))
  );

  const handleNext = (activeDeck) => {
     setCurrentCard(getRandomCard(deck));
     setIsFlipped(false); 
  }
  const handlePrev = (activeDeck) => {}
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentCard(getRandomCard(getDeck(newCategory)));
    setIsFlipped(false); 
  }
  const handleFlip = () => {
    setIsFlipped(prev=>!prev)
  }


  return (
    <div className="app">
      <h1 className = 'app_title'>The Natya Lab</h1>
      <h3 className = 'app_subtitle'>An interactive flashcard app designed for bharatanatyam students to review their hastas</h3>
      <h3 className = 'app_subtitle'><strong>Number of cards in deck: <span>{deck.length}</span> </strong></h3>
      <br></br>
      <div className="category-buttons">
         <button
          className={category === 'all' ? 'category-btn category-btn--active' : 'category-btn'}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        <button
          className={category === 'asamyutha' ? 'category-btn category-btn--active' : 'category-btn'}
          onClick={() => handleCategoryChange('asamyutha')}
        >
          Asamyutha
        </button>
        <button
          className={category === 'samyutha' ? 'category-btn category-btn--active' : 'category-btn'}
          onClick={() => handleCategoryChange('samyutha')}
        >
          Samyutha
        </button>
       
      </div>
      <br></br>

      <Card onClick={handleFlip} 
      card= {currentCard}
      isflipped = {flipped}
      onClick={handleFlip}
       ></Card> {/* pass in the current card (by index?, pass in flipped*/}

      <div className="nav-buttons">
         <button className= 'nav-btn' onClick={()=> handlePrev()}>prev</button>
        <button className= 'nav-btn' onClick={()=> handleNext()}>next</button>
       
      </div>


    </div>
  )
}

export default App