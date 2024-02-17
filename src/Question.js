import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='p-2 shadow-shadowlight mx-auto my-2 rounded border-2 max-w-lg'>
      <header className='flex justify-between  my-4 mx-auto'>
        <h4>{title}</h4>
        <button className='btn hover:bg-gold hover:text-white' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </header>
      {showInfo && <p className='max-w-lg mx-auto border-b-2 pb-2 text-sm'>{info}</p>}
    </article>
  );
};

export default Question;
