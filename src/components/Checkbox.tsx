import styled from '@emotion/styled';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { colors } from '../themes/colors';
import { FlexRow, Label } from '.';

const size = 24;
const Input = styled.input`
    width: ${size}px;
    height: ${size}px;
    border-radius: 3px;
    border: solid 1px ${colors.warmGrey};
    background-color: transparent;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    &:checked {
        background: ${colors.fuchsia};
        border: solid 1px ${colors.warmGrey};
    }
    &:focus {
        outline-offset: ;
    }
`;
Input.defaultProps = { type: 'checkbox' };
export interface ICheckbox {
    checked: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void;
    style?: React.CSSProperties;
    args?: React.ComponentProps<'input'>;
    disabled?: boolean;
    readOnly?: boolean;
}
const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return isMobile ? children : null;
};

export const Checkbox: React.FC<ICheckbox> = ({
    checked,
    onChange,
    style,
    disabled = false,
    readOnly = false,
    ...args
}) => {
    return (
        <Input
            {...args}
            readOnly={readOnly}
            style={{ ...style, cursor: disabled ? 'not-allowed' : '' }}
            checked={checked}
            onChange={onChange}
            onClick={(event: React.MouseEvent<HTMLInputElement>) => event.stopPropagation()}
        />
    );
};

interface ICheckboxWithLabel extends ICheckbox {
    label: string;
    disabled?: boolean;
    labelColor?: string;
    dataTest?: string;
    style?: React.CSSProperties;
    readOnly?: boolean;
}

export const CheckboxWithLabel: React.FC<ICheckboxWithLabel> = ({
    label,
    dataTest,
    style,
    disabled = false,
    labelColor = colors.slateGrey,
    readOnly = false,
    ...rest
}) => {
    return (
        <>
            <Mobile>
                <FlexRow style={style}>
                    <Checkbox readOnly={readOnly} disabled={disabled} {...rest} />
                    <Label
                        data-test={dataTest}
                        style={{ marginLeft: '10px', fontSize: '13px', color: labelColor }}>
                        {label}
                    </Label>
                </FlexRow>
            </Mobile>

            <Desktop>
                <FlexRow style={style}>
                    <Checkbox readOnly={readOnly} disabled={disabled} {...rest} />
                    <Label
                        data-test={dataTest}
                        style={{ marginLeft: '10px', fontSize: '16px', color: labelColor }}>
                        {label}
                    </Label>
                </FlexRow>
            </Desktop>
        </>
    );
};
