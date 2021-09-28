import { useObserver } from 'mobx-react';
import React from 'react';

import { useUIStore } from '../contexts/UIContext';
import { AvailableSidebars } from '../types/global';
import ApplyForm from './ApplyForm';
import TermOfUse from './TermOfUse';

const DialogsContainer: React.FC = () => {
    const uiStore = useUIStore();
    const showForm = uiStore?.sidebar === AvailableSidebars.ApplyForm;
    return useObserver(() => (
        <>
            {showForm && <ApplyForm isOpen={showForm} />}
            {uiStore?.sidebar === AvailableSidebars.TermOfUse && <TermOfUse />}
        </>
    ));
};
export default DialogsContainer;
