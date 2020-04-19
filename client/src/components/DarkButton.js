import React from 'react';
import { useDark } from '../hooks/useDark';

const DarkButton = () => {
  const [dark, setDark] = useDark(false);
  const toggleDark = (e) => {
    e.preventDefault();
    setDark(!dark);
  };
  return (
    <div data-testid='darkBtn' className='divBtn' onClick={toggleDark}>
      <h3>{dark === true ? 'Toggle Light Mode!' : 'Toggle Dark Mode!'}</h3>
    </div>
  );
};

export default DarkButton;
