import React, { useState } from 'react';
import Container from './components/Container';
import MyInput from './components/MyInput';

const App = () => {
  const [color, setColor] = useState('');

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <MyInput value={color} onChange={handleInputChange} />
      <Container color={color} />
    </div>
  );
};

export default App;