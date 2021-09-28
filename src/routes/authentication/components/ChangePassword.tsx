import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { toast } from 'react-toastify';

import {
    FormHeader,
    InputWrapper,
    Loader,
    PasswordInput,
    PrimaryButton
} from '../../../components';
import { useWindowSize } from '../../../hooks';
import firebase from '../../../services/firebase';
import { MainRoute } from '../..';
import { Wrapper } from '..';
import Header from './Header';

const ChangePassword: React.FC<RouteComponentProps & { email: string; code: string }> = ({
    history,
    email,
    code
}) => {
    const [width, height] = useWindowSize();
    const [password, setPassword] = useState<string>(undefined);
    const [rpassword, setRPassword] = useState<string>(undefined);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            await firebase.contResetPassword(code, password);
            await firebase.login(email, password);
            history.push(MainRoute.link);
            toast.success('Password changed successfully!');
        } catch (err) {
            toast.error(err?.message);
        } finally {
            setLoading(false);
        }
    };
    const canSubmit = password === rpassword && password !== '' && password && password?.length > 5;
    return (
        <Wrapper
            style={{ marginLeft: width > 1500 ? 250 : 90, marginTop: height < 850 ? 30 : 110 }}>
            <div style={{ marginLeft: 215 }}>
                <Header />
                <form>
                    <InputWrapper>
                        <FormHeader>Password</FormHeader>
                        <PasswordInput
                            style={{ width: 392 }}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password ?? ''}
                            placeholder="Enter password"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <FormHeader>Retype Password</FormHeader>
                        <PasswordInput
                            style={{ width: 392 }}
                            onChange={(e) => setRPassword(e.target.value)}
                            value={rpassword ?? ''}
                            placeholder="Retype password"
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <PrimaryButton
                            style={{ width: 411 }}
                            onClick={onSubmit}
                            disabled={!canSubmit}>
                            Confirm
                        </PrimaryButton>
                        <div style={{ marginLeft: 190, marginTop: 20 }}>
                            {loading && <Loader />}
                        </div>
                    </InputWrapper>
                </form>
            </div>
        </Wrapper>
    );
};
export default ChangePassword;
