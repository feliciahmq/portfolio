import React, { createContext, useContext, useMemo } from 'react';

// Create a context to provide the color pair
const ColorPairContext = createContext();

const RandomColorPair = ({ children }) => {
  const colors = [
    ['#F5E1FF', '#CAF0F8'],
    ['#EAF4F4', '#FFEDD8'],
    ['#F9E5D8', '#EDE9F6'],
    ['#EEEBFF', '#FFFAD4'],
  ];

  const random = Math.round(Math.random() * (colors.length - 1));

  const colorPair = useMemo(() => colors[random], [random]);

  return (
    <ColorPairContext.Provider value={colorPair}>
      {children}
    </ColorPairContext.Provider>
  );
};

// Custom hook to use the color pair context
const useColorPair = () => useContext(ColorPairContext);

export { RandomColorPair, useColorPair };
