import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { FormHeader, Input, InputWrapper, PrimaryButton, ProHeader } from '../../../components';
import { isValidEmail } from '../../../utils/string';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
`;
interface IForgotPassword {
    onChange: (value: string) => void;
    mailAddress: string;
    onSubmit: (e: React.MouseEvent) => void;
}
const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};
const ForgotPassword: React.FC<IForgotPassword> = ({ mailAddress, onChange, onSubmit }) => {
    const [showMessage, setShowMessage] = useState(false);
    const onClick = (e: React.MouseEvent) => {
        setShowMessage(true);
        onSubmit(e);
    };
    const canSubmit = isValidEmail(mailAddress);
    return (
        <div>
            <Mobile>
                <div style={{ marginLeft: 60 }}>
                    {!showMessage && (
                        <form>
                            <InputWrapper>
                                <FormHeader>Mail address</FormHeader>
                                <Input
                                    style={{ width: 290 }}
                                    onChange={(e) => onChange(e.target.value)}
                                    value={mailAddress ?? ''}
                                    placeholder="Enter your mail address"
                                />
                            </InputWrapper>

                            <InputWrapper>
                                <PrimaryButton
                                    style={{ width: 300 }}
                                    onClick={onClick}
                                    disabled={!canSubmit}>
                                    Reset password
                                </PrimaryButton>
                            </InputWrapper>
                        </form>
                    )}
                    {showMessage && (
                        <Div>
                            <ProHeader style={{ marginBottom: 10 }}>
                                {'Mail has with reset instructions has been sent to your inbox'}
                            </ProHeader>
                        </Div>
                    )}
                </div>
            </Mobile>
            <Desktop>
                {!showMessage && (
                    <form>
                        <InputWrapper>
                            <FormHeader>Mail address</FormHeader>
                            <Input
                                style={{ width: 392 }}
                                onChange={(e) => onChange(e.target.value)}
                                value={mailAddress ?? ''}
                                placeholder="Enter your mail address"
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <PrimaryButton
                                style={{ width: 411 }}
                                onClick={onClick}
                                disabled={!canSubmit}>
                                Reset password
                            </PrimaryButton>
                        </InputWrapper>
                    </form>
                )}
                {showMessage && (
                    <Div>
                        <ProHeader style={{ marginBottom: 30 }}>
                            {'Mail has with reset instructions has been sent to your inbox'}
                        </ProHeader>
                    </Div>
                )}
            </Desktop>
        </div>
    );
};
export default ForgotPassword;
