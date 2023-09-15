import React, { useState } from 'react';

const useEllipses = (text, maxLength) => {
  const [isEllipsis, setIsEllipsis] = useState(false);
  const [truncatedText, setTruncatedText] = useState(text);

  React.useEffect(() => {
    if (text.length > maxLength) {
      setIsEllipsis(true);
      setTruncatedText(text.substring(0, maxLength) + '...');
    } else {
      setIsEllipsis(false);
      setTruncatedText(text);
    }
  }, [text, maxLength]);

  return {
    isEllipsis,
    truncatedText
  };
};

export default useEllipses;
