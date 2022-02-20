import React, { useState } from 'react';

const Button = () => {
  const [clicks, setClicks] = useState(0);
  return (
    <>
      <p>{clicks}</p>
      <button onClick={() => { setClicks(clicks + 1); }} type="button">Click!</button>
    </>
  );
};

export default Button;
