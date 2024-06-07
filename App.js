import React from 'react';

import {Provider} from 'react-redux';
import Demo from './redux_toolkit/Demo';
import {store} from './redux_toolkit/store';

function App() {
  return (
    <Provider store={store}>
    <Demo />
  </Provider>
  );
}

export default App;
