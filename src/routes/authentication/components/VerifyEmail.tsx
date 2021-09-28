import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

import { PrimaryButton, ProHeader } from '../../../components';
import { useWindowSize } from '../../../hooks';
import { Design } from '../../../Icons';
import firebase from '../../../services/firebase';
import { MainRoute } from '../..';
import { Wrapper } from '..';

const Div = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const VerifyEmail: React.FC<RouteComponentProps & { code: string }> = ({ history, code }) => {
    const [width, height] = useWindowSize();
    useEffect(() => {
        firebase.verifyEmail(code);
    }, [code]);
    return (
        <Div style={{ marginLeft: width > 1500 ? 250 : 90, marginTop: height < 850 ? 30 : 110 }}>
            <ProHeader style={{ textAlign: 'center', marginBottom: 30 }}>
                {'Mail address has been successfully verified'}
            </ProHeader>
            <Design />
            <PrimaryButton
                style={{ marginTop: 40, width: 410 }}
                onClick={() => history.push(MainRoute.link)}>
                Go to application
            </PrimaryButton>
        </Div>
    );
};
export default VerifyEmail;
