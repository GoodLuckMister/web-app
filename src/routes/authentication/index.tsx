import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Ripple from 'react-ripples';
import { RouteComponentProps } from 'react-router';
import { toast } from 'react-toastify';
import { useImmer } from 'use-immer';

import { FlexRow, ProHeader, Text } from '../../components';
import { useWindowSize } from '../../hooks';
import firebase from '../../services/firebase';
import { colors } from '../../themes/colors';
import { MainRoute } from '..';
import ForgotPassword from './components/ForgotPassword';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { AuthView, AvailableAuthView, LoginReq, RegisterReq } from './types';

export const Wrapper = styled.div`
    width: 831px;
    margin: 108px 250px 0 250px;
    padding: 35px 72px 40px 25px;
    border-radius: 6px;
    box-shadow: 2px 2px 8px 1px rgba(21, 20, 59, 0.1);
    background-color: #ffffff;
`;
const initialLogin = {
    mailAddress: undefined,
    password: undefined
};
const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return isMobile ? children : null;
};
const Authentication: React.FC<RouteComponentProps> = ({ history }) => {
    const [width, height] = useWindowSize();
    const [activeView, setActiveView] = useState(AvailableAuthView.Login);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string>(null);
    const [login, setLogin] = useImmer<LoginReq>({ ...initialLogin });
    const [register, setRegister] = useImmer<RegisterReq>({
        fullName: undefined,
        ...initialLogin
    });
    const [reset, setReset] = useState<string>(undefined);
    const onChangeLogin = <T extends keyof LoginReq>(target: T, value: LoginReq[T]) => {
        setLogin((draft) => {
            draft[target] = value;
        });
    };
    const onChangeRegister = <T extends keyof RegisterReq>(target: T, value: RegisterReq[T]) => {
        setRegister((draft) => {
            draft[target] = value;
        });
    };
    const onSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            switch (activeView) {
                case AvailableAuthView.Register:
                    await firebase.register(
                        register.mailAddress,
                        register.password,
                        register.fullName
                    );
                    history.push(MainRoute.link);
                    setLoading(false);
                    toast.success('Validation Email has been sent!');
                    return;
                case AvailableAuthView.Login:
                    await firebase.login(login.mailAddress, login.password);
                    history.push(MainRoute.link);
                    setLoading(false);
                    return;
                case AvailableAuthView.ForgotPassword:
                    await firebase.resetPassword(reset);
                    setLoading(false);
                    return;
            }
        } catch (e) {
            setMessage(e?.message);
        }
    };
    const views: Record<AvailableAuthView, AuthView> = {
        [AvailableAuthView.Login]: {
            name: AvailableAuthView.Login,
            component: (
                <Login
                    onChange={onChangeLogin}
                    data={login}
                    onSubmit={onSubmit}
                    onForgotPassword={() => setActiveView(AvailableAuthView.ForgotPassword)}
                    isLoading={loading}
                />
            )
        },
        [AvailableAuthView.Register]: {
            name: AvailableAuthView.Register,
            component: (
                <Register
                    onChange={onChangeRegister}
                    data={register}
                    onSubmit={onSubmit}
                    isLoading={loading}
                />
            )
        },
        [AvailableAuthView.ForgotPassword]: {
            name: AvailableAuthView.ForgotPassword,
            component: (
                <ForgotPassword onChange={setReset} mailAddress={reset} onSubmit={onSubmit} />
            )
        }
    };
    return (
        <>
            <Mobile>
                <div style={{ textAlign: 'center', width: '475px' }}>
                    <div style={{ marginBottom: 10 }}>
                        <Header />
                    </div>
                    <FlexRow style={{ justifyContent: 'center' }}>
                        {Object.keys(AvailableAuthView)
                            .filter((v) => v !== AvailableAuthView.ForgotPassword)
                            .map((key) => (
                                <Ripple
                                    key={key}
                                    onClick={() => {
                                        setActiveView(key as AvailableAuthView);
                                        setMessage(null);
                                    }}>
                                    <Text
                                        style={{
                                            color:
                                                activeView === key
                                                    ? colors.fuchsia
                                                    : colors.slateGrey,
                                            borderBottom:
                                                activeView === key
                                                    ? `2px solid ${colors.fuchsia}`
                                                    : 'initial',
                                            paddingBottom: 5,
                                            marginRight: 10,
                                            cursor: 'pointer',
                                            fontSize: '1.25em'
                                        }}>
                                        {key}
                                    </Text>
                                </Ripple>
                            ))}
                    </FlexRow>
                </div>
                <div style={{ paddingLeft: 20 }}>
                    <ProHeader style={{ marginTop: 20, color: colors.strongPink, width: 412 }}>
                        {message}
                    </ProHeader>
                    {views[activeView].component}
                </div>
            </Mobile>
            <Desktop>
                <Wrapper
                    style={{
                        marginLeft: width > 1500 ? 250 : 90,
                        marginTop: height < 850 ? 30 : 110
                    }}>
                    <div style={{ marginLeft: 215 }}>
                        <Header />
                        <FlexRow style={{ marginTop: height < 850 ? 15 : 40 }}>
                            {Object.keys(AvailableAuthView)
                                .filter((v) => v !== AvailableAuthView.ForgotPassword)
                                .map((key) => (
                                    <Ripple
                                        key={key}
                                        onClick={() => {
                                            setActiveView(key as AvailableAuthView);
                                            setMessage(null);
                                        }}>
                                        <Text
                                            style={{
                                                color:
                                                    activeView === key
                                                        ? colors.fuchsia
                                                        : colors.slateGrey,
                                                borderBottom:
                                                    activeView === key
                                                        ? `2px solid ${colors.fuchsia}`
                                                        : 'initial',
                                                paddingBottom: 5,
                                                marginRight: 10,
                                                cursor: 'pointer',
                                                fontSize: '1.25em'
                                            }}>
                                            {key}
                                        </Text>
                                    </Ripple>
                                ))}
                        </FlexRow>
                    </div>
                    <div style={{ marginLeft: 215 }}>
                        <ProHeader style={{ marginTop: 20, color: colors.strongPink, width: 412 }}>
                            {message}
                        </ProHeader>
                        {views[activeView].component}
                    </div>
                </Wrapper>
            </Desktop>
        </>
    );
};
export default Authentication;
