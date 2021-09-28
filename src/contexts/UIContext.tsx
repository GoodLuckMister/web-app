import { useLocalStore } from 'mobx-react';
import * as React from 'react';

import { UIStore } from '../store/uiStore';

const UIContext = React.createContext(null);

export const UIProvider = ({ children }) => {
    const uiStore = useLocalStore(() => new UIStore());

    return <UIContext.Provider value={uiStore}>{children}</UIContext.Provider>;
};

export const useUIStore = () => React.useContext<UIStore>(UIContext);
