import React, { useState, useMemo } from 'react';

export interface FocusContextValue {
  isFocused: boolean;
  onFocus(): void;
  onBlur(): void;
}

const FocusContext = React.createContext<FocusContextValue>(null!);

export const FocusContextProvider = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  const memoContextValue = useMemo(() => ({ onFocus: onFocusHandler, onBlur: onBlurHandler, isFocused }), [isFocused]);

  return <FocusContext.Provider value={memoContextValue}>{children}</FocusContext.Provider>;
};

export default FocusContext;
