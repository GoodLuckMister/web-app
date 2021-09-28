import React from 'react';
import { useHistory } from 'react-router-dom';

import { Breadcrumbs, TextLightGrey, TitleBold } from '../../../components';
import { Blog } from '../../../types/blog';
import { getStyledDate } from '../../../utils/date';

const Header: React.FC<Omit<Blog, 'id' | 'images' | 'texts'>> = ({ author, name, date }) => {
    const history = useHistory();
    return (
        <div>
            <Breadcrumbs title="Back to Blog" onClick={() => history.goBack()} />
            <TitleBold style={{ marginTop: 20 }}>{name}</TitleBold>
            {/* <TextLightGrey style={{ marginTop: 10 }}>{`${author} (${getStyledDate(
                date
            )})`}</TextLightGrey> */}
        </div>
    );
};
export default Header;
