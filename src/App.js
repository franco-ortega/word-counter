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
    const countedWords = countWords(allWords);
    const wordList = Object.keys(countedWords);
    const sortedWords = sortWords(wordList, countedWords);
    setTotalWords(allWords.length);
    setWordCount(countedWords);
    setSortedWords(sortedWords);
  };

  const onResetClick = () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm('Do you want to erase the text?');
    if (result) setStory('');
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
            value={story}
          />
        </label>
        <div>
          <button>Submit</button>
          <button onClick={onResetClick}>Erase</button>
        </div>
      </form>
      {sortedWords.length ? (
        <>
          <p>Total words: {totalWords}</p>
          <p>Different words: {sortedWords.length}</p>
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
        </>
      ) : null}
    </div>
  );
};

export default App;
