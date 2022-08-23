import { useState } from 'react';
import { countWords } from './utils/countWords';
import styles from './App.module.css';
import { cleanUpStory } from './utils/cleanUpStory';
import { sortWords } from './utils/sortWords';

const App = () => {
  const [story, setStory] = useState('');
  const [wordCount, setWordCount] = useState(null);
  const [sortedWords, setSortedWords] = useState([]);
  const [totalWords, setTotalWords] = useState(0);

  const onStorySubmit = (e) => {
    e.preventDefault();

    const allWords = cleanUpStory(story);
    console.log(allWords);
    const countedWords = countWords(allWords);
    const wordList = Object.keys(countedWords);
    const sortedWords = sortWords(wordList, countedWords);
    setTotalWords(allWords.length);
    setWordCount(countedWords);
    setSortedWords(sortedWords);
  };

  return (
    <div className={styles.App}>
      <h1>Word Counter</h1>
      <form onSubmit={onStorySubmit}>
        <label htmlFor='story'>
          <textarea
            id='story'
            name='story'
            onChange={(e) => setStory(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      {sortedWords.length ? (
        <>
          <p>Total words: {totalWords}</p>
          <p>Different words: {sortedWords.length}</p>
        </>
      ) : null}
      <ul>
        {sortedWords.map((word, i) => (
          <li key={i}>
            <p>
              {i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}. {word}
            </p>

            <p>x{wordCount[word]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
