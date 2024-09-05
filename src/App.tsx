import React from 'react';
import Navigation from './Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      {/* <StatusBar backgroundColor={'#F58D4C'} /> */}
      <GestureHandlerRootView>
        <Navigation />
      </GestureHandlerRootView>
    </>
  );
};

export default App;
