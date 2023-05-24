import React, { useState } from 'react';
import FuzzyMatching from 'fuzzy-matching';
import './App.css';

function App() {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [similarity, setSimilarity] = useState(null);

  const handleMatch = () => {
    const fm = new FuzzyMatching([word1]);
    const result = fm.get(word2);
    setSimilarity(result.distance);
  }

  return (
    <div className="container">
      <h1>Fuzzy Word Matcher</h1>
      <input
        type="text"
        placeholder="Enter first word"
        onChange={e => setWord1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter second word"
        onChange={e => setWord2(e.target.value)}
      />
      <button onClick={handleMatch}>Match</button>
      {similarity !== null && <p>Similarity: {Math.round(similarity * 100)}%</p>}
    </div>
  );
}

export default App;
