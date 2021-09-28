import { action, makeObservable, observable } from 'mobx';

import { AvailableSidebars } from '../types/global';

export class UIStore {
    sidebar: AvailableSidebars = null;
    referrerCategoryID: string = null;
    constructor() {
        makeObservable(this, {
            sidebar: observable,
            setSidebar: action,
            referrerCategoryID: observable,
            setReferrerCategoryID: action
        });
    }
    setSidebar(_sidebar: AvailableSidebars) {
        this.sidebar = _sidebar;
    }
    setReferrerCategoryID(id: string) {
        this.referrerCategoryID = id;
    }
}
