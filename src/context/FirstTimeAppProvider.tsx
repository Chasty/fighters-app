import { useContext } from 'react';
import { createContext } from 'react';
export type GlobalContent = {
  isFirstTimeOpen: boolean;
  setIsFirstTimeOpen: (c: boolean) => void;
};
export const FirstTimeContext = createContext<GlobalContent>({
  isFirstTimeOpen: false,
  setIsFirstTimeOpen: () => {},
});

export const useGlobalContext = () => useContext(FirstTimeContext);
