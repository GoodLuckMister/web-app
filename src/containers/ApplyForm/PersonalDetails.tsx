import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { FormHeader, Input, InputWrapper, Select } from '../../components';
import { countries } from '../../consts/countries';
import { languages } from '../../consts/languages';
import { useWindowSize } from '../../hooks';
import firebase from '../../services/firebase';
import { OnChange, PersonalDetails as PersonalDetailsType } from './types';
import UploadImage from './UploadImage';
const countriesOptions = countries.map((c) => ({ value: c.name, label: c.name }));
const languagesOptions = languages.map((l) => ({ value: l.name, label: `${l.name} (${l.code})` }));

interface IPersonalDetails {
    onChange: OnChange;
    formData: PersonalDetailsType;
}

const PersonalDetails: React.FC<IPersonalDetails> = ({ formData, onChange }) => {
    const [, height] = useWindowSize();
    return (
        <form style={{ marginTop: height < 800 ? '-20px' : 0 }}>
            <InputWrapper>
                <FormHeader>Full name</FormHeader>
                <Input
                    style={{ width: 392 }}
                    onChange={(e) => onChange('name', e.target.value)}
                    value={formData?.name ?? ''}
                    placeholder="Enter your full name"
                />
            </InputWrapper>
            <InputWrapper>
                <FormHeader>Country</FormHeader>
                <Select
                    value={formData?.country}
                    isDisabled={false}
                    isLoading={countriesOptions.length === 0}
                    options={countriesOptions}
                    placeholder="Select country"
                    onChange={(value) => onChange('country', value?.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <FormHeader>Email address</FormHeader>
                <Input
                    style={{ width: 392 }}
                    onChange={(e) => onChange('email', e.target.value)}
                    value={formData?.email ?? ''}
                    placeholder="Add email address"
                />
            </InputWrapper>
            <InputWrapper>
                <FormHeader>Language</FormHeader>
                <Select
                    value={formData?.language}
                    isDisabled={false}
                    isLoading={languagesOptions.length === 0}
                    options={languagesOptions}
                    placeholder="Select language"
                    onChange={(value) => onChange('language', value?.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <FormHeader>Phone number</FormHeader>
                <Input
                    style={{ width: 392 }}
                    onChange={(e) => onChange('phoneNumber', e.target.value)}
                    value={formData?.phoneNumber ?? ''}
                    placeholder="Add a phone number"
                />
            </InputWrapper>
            <UploadImage onChange={onChange} />
        </form>
    );
};
export default PersonalDetails;
