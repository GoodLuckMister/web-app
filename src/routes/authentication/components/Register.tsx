import React from 'react';

import {
    FormHeader,
    Input,
    InputWrapper,
    Loader,
    PasswordInput,
    PrimaryButton
} from '../../../components';
import { isValidEmail } from '../../../utils/string';
import { RegisterReq } from '../types';

interface IRegister {
    onChange: (target: keyof RegisterReq, value: string | number) => void;
    data: RegisterReq;
    onSubmit: (e: React.MouseEvent) => void;
    isLoading: boolean;
}
const Register: React.FC<IRegister> = ({ data, onChange, onSubmit, isLoading }) => {
    const canSubmit =
        data?.fullName &&
        data?.fullName !== '' &&
        data?.fullName?.length > 3 &&
        data?.password !== '' &&
        data?.password?.length > 5 &&
        isValidEmail(data?.mailAddress);
    return (
        <form>
            <InputWrapper>
                <FormHeader>Full name</FormHeader>
                <Input
                    style={{ width: 392 }}
                    onChange={(e) => onChange('fullName', e.target.value)}
                    value={data?.fullName ?? ''}
                    placeholder="Enter your full name"
                />
            </InputWrapper>
            <InputWrapper>
                <FormHeader>Mail address</FormHeader>
                <Input
                    style={{ width: 392 }}
                    onChange={(e) => onChange('mailAddress', e.target.value)}
                    value={data?.mailAddress ?? ''}
                    placeholder="Enter your mail address"
                />
            </InputWrapper>
            <InputWrapper>
                <FormHeader>Password</FormHeader>
                <PasswordInput
                    style={{ width: 392 }}
                    onChange={(e) => onChange('password', e.target.value)}
                    value={data?.password ?? ''}
                    placeholder="Enter password"
                />
            </InputWrapper>
            <InputWrapper>
                <PrimaryButton style={{ width: 411 }} onClick={onSubmit} disabled={!canSubmit}>
                    Register
                </PrimaryButton>
            </InputWrapper>
            <div style={{ marginLeft: 190, marginTop: 20 }}>{isLoading && <Loader />}</div>
        </form>
    );
};
export default Register;
