import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { Breadcrumbs, FlexBox } from '../../../components';
import { Routes } from '../..';

interface IPageHeader {
    nextIProID: string | null;
    category: string;
    style?: React.CSSProperties;
}
const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};

const PageHeader: React.FC<IPageHeader> = ({ nextIProID, category, style }) => {
    const history = useHistory();
    return (
        <>
            <Mobile>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: 450 }}>
                    <Breadcrumbs
                        title="Back to iPro list"
                        onClick={() =>
                            history.push({
                                pathname: Routes.topipros.link,
                                search: `?category=${category}`,
                                state: { categoryID: category }
                            })
                        }
                    />
                    {nextIProID && (
                        <Breadcrumbs
                            title="Next iPro"
                            direction="right"
                            onClick={() =>
                                history.push({
                                    pathname: Routes.singleIPro.link,
                                    search: `?id=${nextIProID}`,
                                    state: { id: nextIProID }
                                })
                            }
                        />
                    )}
                </div>
            </Mobile>
            <Desktop>
                <FlexBox style={style}>
                    <Breadcrumbs
                        title="Back to iPro list"
                        onClick={() =>
                            history.push({
                                pathname: Routes.topipros.link,
                                search: `?category=${category}`,
                                state: { categoryID: category }
                            })
                        }
                    />
                    {nextIProID && (
                        <Breadcrumbs
                            title="Next iPro"
                            direction="right"
                            style={{ marginLeft: 'auto' }}
                            onClick={() =>
                                history.push({
                                    pathname: Routes.singleIPro.link,
                                    search: `?id=${nextIProID}`,
                                    state: { id: nextIProID }
                                })
                            }
                        />
                    )}
                </FlexBox>
            </Desktop>
        </>
    );
};
export default PageHeader;
