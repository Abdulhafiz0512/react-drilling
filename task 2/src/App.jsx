import React, { useState } from 'react';
import MyInput from './components/MyInput';

const App = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Text: {text}</h1>
      <MyInput value={text} onChange={handleInputChange} />
    </div>
  );
};

export default App;