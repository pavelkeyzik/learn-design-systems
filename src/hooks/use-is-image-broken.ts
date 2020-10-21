import { useState } from 'react';

function useIsImageBroken() {
  const [isBroken, setIsBroken] = useState(false);

  function onSrcError() {
    setIsBroken(true);
  }

  return { isBroken, onSrcError };
}

export { useIsImageBroken };
