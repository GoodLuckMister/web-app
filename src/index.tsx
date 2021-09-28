import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './containers/App';
import FirebaseContext from './contexts/FirebaseContext';
import { UIProvider } from './contexts/UIContext';
import firebase from './services/firebase';

const rootEl = document.getElementById('root');

render(
    <UIProvider>
        <FirebaseContext.Provider value={firebase}>
            <Router>
                <App />
            </Router>
        </FirebaseContext.Provider>
    </UIProvider>,
    rootEl
);
