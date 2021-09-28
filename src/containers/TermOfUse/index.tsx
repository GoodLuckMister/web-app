import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CheckboxWithLabel, FlexRow, PrimaryButton, Sidebar } from '../../components';
import { TermsLocalStorageKey } from '../../consts';
import { useUIStore } from '../../contexts/UIContext';
import { Routes } from '../../routes';
import { AvailableSidebars } from '../../types/global';
import Content from './Content';

const TermOfUse: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const uiStore = useUIStore();
    const onApprove = () => {
        localStorage.setItem(TermsLocalStorageKey, 'true');
        if (uiStore.referrerCategoryID) {
            history.push({
                pathname: Routes.topipros.link,
                search: `?category=${uiStore.referrerCategoryID}`,
                state: { categoryID: uiStore.referrerCategoryID }
            });
        }
        uiStore.setSidebar(null);
        uiStore.setReferrerCategoryID(null);
    };
    return (
        <Sidebar
            isOpen={uiStore.sidebar === AvailableSidebars.TermOfUse}
            title={'TopiPro Terms of use'}
            onClose={() => uiStore.setSidebar(null)}
            actions={
                <PrimaryButton onClick={onApprove} disabled={!checked}>
                    Approve
                </PrimaryButton>
            }>
            <Content />
            <FlexRow style={{ position: 'fixed', bottom: 110, left: 50 }}>
                <CheckboxWithLabel
                    label="I have read and agree to the terms of use"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </FlexRow>
        </Sidebar>
    );
};
export default TermOfUse;
