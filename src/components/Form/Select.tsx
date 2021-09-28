import React from 'react';
import ReactSelect from 'react-select';

import { colors } from '../../themes/colors';
import { Option } from '../../types';

interface ISelect {
    value: string | number;
    onChange: (value: Option) => void;
    isLoading: boolean;
    options: Option[];
    isDisabled: boolean;
    placeholder: string;
}

export const Select: React.FC<ISelect> = ({
    value,
    onChange,
    isLoading,
    options,
    isDisabled,
    placeholder
}) => {
    return (
        <ReactSelect
            styles={{
                container: (provided) => ({
                    ...provided,
                    width: 412,
                    cursor: 'pointer',
                    fontFamily: 'Poppins !important',
                    backgroundColor: value ? colors.white : colors.inputGrey
                }),
                control: (provided) => ({
                    ...provided,
                    fontFamily: 'Poppins !important',
                    backgroundColor: value ? colors.white : colors.inputGrey
                }),
                singleValue: (provided) => ({
                    ...provided,
                    fontFamily: 'Poppins !important',
                    backgroundColor: value ? colors.white : colors.inputGrey,
                    color: colors.blueyGrey
                }),
                placeholder: (provided) => ({
                    ...provided,
                    fontFamily: 'Poppins !important',
                    backgroundColor: value ? colors.white : colors.inputGrey,
                    color: colors.blueyGrey
                }),
                input: (provided) => ({
                    ...provided,
                    fontFamily: 'Poppins !important',
                    backgroundColor: value ? colors.white : colors.inputGrey
                })
            }}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={true}
            isSearchable={true}
            options={options}
            onChange={(value) => onChange(value)}
            placeholder={placeholder}
        />
    );
};
