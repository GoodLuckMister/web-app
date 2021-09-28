import React from 'react';
import Ripple from 'react-ripples';
import { Link } from 'react-router-dom';

import { colors } from '../themes/colors';
import { Text } from '.';

interface ITab {
    text: string;
    active?: boolean;
    link: string;
}

const Tab: React.FC<ITab> = ({ text, active = false, link }) => {
    return (
        <Ripple>
            <Link
                style={{ cursor: 'pointer', margin: '0 15px', textDecorationLine: 'none' }}
                to={{
                    pathname: link
                }}>
                <Text
                    style={{
                        color: active ? colors.fuchsia : 'white',
                        borderBottom: active ? `2px solid ${colors.fuchsia}` : 'initial',
                        paddingBottom: 5
                    }}>
                    {text}
                </Text>
            </Link>
        </Ripple>
    );
};
export default Tab;
