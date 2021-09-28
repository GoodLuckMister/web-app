import styled from '@emotion/styled';
import React from 'react';

import { LabelBold } from '.';
import arrow from './arrow.svg';

const Arrow = styled.div`
    width: 12px;
    height: 12px;
    background: url(${arrow}) no-repeat;
`;
type Direction = 'right' | 'left';
interface IBreadcrumbs {
    title: string;
    direction?: Direction;
    onClick?: React.MouseEventHandler;
    style?: React.CSSProperties;
}

export const Breadcrumbs: React.FC<IBreadcrumbs> = ({
    title,
    onClick,
    direction = 'left',
    style
}) => {
    return (
        // eslint-disable-next-line
        <div
            style={{ display: 'flex', cursor: 'pointer', maxWidth: 150, ...style }}
            onClick={onClick}>
            {direction === 'left' && <Arrow />}
            <LabelBold style={{ marginLeft: 4, marginTop: '-5px' }}>{title}</LabelBold>
            {direction === 'right' && <Arrow style={{ transform: 'rotate(180deg)' }} />}
        </div>
    );
};
