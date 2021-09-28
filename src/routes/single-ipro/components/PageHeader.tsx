import React from 'react';
import { useHistory } from 'react-router-dom';

import { Breadcrumbs, FlexBox } from '../../../components';
import { Routes } from '../..';

interface IPageHeader {
    nextIProID: string | null;
    category: string;
    style?: React.CSSProperties;
}

const PageHeader: React.FC<IPageHeader> = ({ nextIProID, category, style }) => {
    const history = useHistory();
    return (
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
    );
};
export default PageHeader;
