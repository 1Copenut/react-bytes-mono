import React, { useState } from "react";

const PronounceVite = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>I've said Vite wrong {count} times today. At least.</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add one
      </button>
    </div>
  );
};

export default PronounceVite;
