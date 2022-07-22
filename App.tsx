import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationFlow from './src/navigation/NavigationFlow';
import { FirstTimeContext } from './src/context/FirstTimeAppProvider';

const App = () => {
  const [isFirstTimeOpen, setIsFirstTimeOpen] = useState(false);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <FirstTimeContext.Provider
        value={{ isFirstTimeOpen, setIsFirstTimeOpen }}>
        <NavigationFlow />
      </FirstTimeContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
