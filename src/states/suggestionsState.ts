import { atom } from 'recoil';

import { IDisease } from '../types';

export const suggestionsState = atom<IDisease[]>({
  key: 'suggestions',
  default: [],
});
