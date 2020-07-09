import React from 'react';
import AppNavigation from './navigation';
import Store from '../src/store'
import { Provider } from 'mobx-react'

const App = () => (
    <Provider store={Store}>
        <AppNavigation />
    </Provider>
);

export default App;
