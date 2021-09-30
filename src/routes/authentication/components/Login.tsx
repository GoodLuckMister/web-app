import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
    FlexRow,
    FormHeader,
    Input,
    InputWrapper,
    LinkPretender,
    Loader,
    PasswordInput,
    PrimaryButton
} from '../../../components';
import { isValidEmail } from '../../../utils/string';
import { LoginReq } from '../types';

interface ILogin {
    onChange: (target: keyof LoginReq, value: string | number) => void;
    data: LoginReq;
    onSubmit: (e: React.MouseEvent) => void;
    onForgotPassword: () => void;
    isLoading: boolean;
}
const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};
const Login: React.FC<ILogin> = ({ data, onChange, onSubmit, onForgotPassword, isLoading }) => {
    const canSubmit =
        data?.password &&
        data?.password !== '' &&
        data?.password?.length > 5 &&
        isValidEmail(data?.mailAddress);
    return (
        <form>
            <Mobile>
                <div style={{ marginLeft: 70 }}>
                    <InputWrapper>
                        <FormHeader>Mail address</FormHeader>
                        <Input
                            style={{ width: 290 }}
                            onChange={(e) => onChange('mailAddress', e.target.value)}
                            value={data?.mailAddress ?? ''}
                            placeholder="Enter your mail address"
                            type="email"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <FormHeader>Password</FormHeader>
                        <PasswordInput
                            style={{ width: 290 }}
                            onChange={(e) => onChange('password', e.target.value)}
                            value={data?.password ?? ''}
                            placeholder="Enter password"
                        />
                    </InputWrapper>
                    <FlexRow style={{ justifyContent: 'space-around', width: 300 }}>
                        <InputWrapper>
                            <PrimaryButton
                                style={{ width: 141 }}
                                onClick={onSubmit}
                                disabled={!canSubmit}>
                                Login
                            </PrimaryButton>
                        </InputWrapper>
                        {isLoading && <Loader />}
                        <LinkPretender
                            style={{ marginTop: 20, fontSize: '1em', fontWeight: 600 }}
                            onClick={onForgotPassword}>
                            Forgot password?
                        </LinkPretender>
                    </FlexRow>
                </div>
            </Mobile>
            <Desktop>
                <InputWrapper>
                    <FormHeader>Mail address</FormHeader>
                    <Input
                        style={{ width: 392 }}
                        onChange={(e) => onChange('mailAddress', e.target.value)}
                        value={data?.mailAddress ?? ''}
                        placeholder="Enter your mail address"
                        type="email"
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
                <FlexRow style={{ justifyContent: 'space-between', width: 411 }}>
                    <InputWrapper>
                        <PrimaryButton
                            style={{ width: 141 }}
                            onClick={onSubmit}
                            disabled={!canSubmit}>
                            Login
                        </PrimaryButton>
                    </InputWrapper>
                    {isLoading && <Loader />}
                    <LinkPretender
                        style={{ marginTop: 20, fontSize: '1em', fontWeight: 600 }}
                        onClick={onForgotPassword}>
                        Forgot password?
                    </LinkPretender>
                </FlexRow>
            </Desktop>
        </form>
    );
};
export default Login;
