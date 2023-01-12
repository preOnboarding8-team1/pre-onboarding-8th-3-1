import React, { useMemo, useReducer, useContext } from 'react';
import DataContext from './data-context';

export interface SelectContextValue {
  selectedNumber: number;
  onKeyDownHandler(e: React.KeyboardEvent): void;
}

const SelectContext = React.createContext<SelectContextValue>(null!);

const arrowKeyReducer = (state:number, action:{ type: 'UP' | 'DOWN' | 'RESET' }) => {
  switch (action.type) {
    case 'UP':
      if (state === -1) {
        return state;
      }
      return state - 1;
    case 'DOWN': {
      return state + 1;
    }
    case 'RESET': {
      return -1;
    }
    default:
      return state;
  }
};

export const SelectContextProvider = ({ children }) => {
  const [selectedNumber, keyDispatch] = useReducer(arrowKeyReducer, -1);
  const dataCtx = useContext(DataContext);

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      keyDispatch({ type: 'UP' });
    } else if (e.key === 'ArrowDown') {
      if (selectedNumber === dataCtx.recommendItemList.length) {
        return;
      }
      keyDispatch({ type: 'DOWN' });
    } else {
      keyDispatch({ type: 'RESET' });
    }
  };

  const memoContextValue = useMemo(() => ({ onKeyDownHandler, selectedNumber }), [selectedNumber]);

  return <SelectContext.Provider value={memoContextValue}>{children}</SelectContext.Provider>;
};

export default SelectContext;
