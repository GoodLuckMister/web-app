import React from 'react';

import { FlexColumn, ProHeader, SubLargeText } from '..';

interface IKeyValueColumn {
    label: string;
    value: string | number | React.ReactNode;
}

export const KeyValueColumn: React.FC<IKeyValueColumn> = ({ label, value }) => {
    return (
        <FlexColumn>
            {React.isValidElement(value) ? (
                value
            ) : (
                <ProHeader style={{ textAlign: 'center' }}>{value}</ProHeader>
            )}
            <SubLargeText style={{ fontSize: '0.75em', textAlign: 'center' }}>{label}</SubLargeText>
        </FlexColumn>
    );
};
