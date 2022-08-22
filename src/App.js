import { useState } from 'react';
import { countWords } from './utils/countWords';
import styles from './App.module.css';

const App = () => {
  const [story, setStory] = useState('');
  const [wordCount, setWordCount] = useState(null);
  const [sortedWords, setSortedWords] = useState([]);

  const onStorySubmit = (e) => {
    e.preventDefault();

    const cleanString = story
      .replace(/\n/g, ' ')
      .replace(/([^A-Za-z0-9 ])/g, '');
    console.log(cleanString);

    const splitStory = cleanString.split(' ');

    const wordCount = countWords(splitStory);

    setWordCount(wordCount);

    const words = Object.keys(wordCount);

    const sortedWords = words.sort((a, b) => {
      return wordCount[b] - wordCount[a];
    });
    setSortedWords(sortedWords);

    console.log(sortedWords);
  };

  return (
    <div className={styles.App}>
      <h1>Word Counter</h1>
      <form onSubmit={onStorySubmit}>
        <label htmlFor='story'>
          <textarea id='story' onChange={(e) => setStory(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {sortedWords.map((word, i) => (
          <li key={i}>
            <p>
              {i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}. {word}:
            </p>

            <p>{wordCount[word]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
