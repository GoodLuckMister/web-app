import styled from '@emotion/styled';
import qs from 'qs';
import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Wrapper } from '..';
import ChangePassword from './ChangePassword';
import VerifyEmail from './VerifyEmail';

const Div = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const RedirectFlow: React.FC<RouteComponentProps> = ({ history }) => {
    const [code] = React.useState<string>(
        qs.parse(history.location.hash, { ignoreQueryPrefix: true })?.oobCode as string
    );
    const [mode] = React.useState<string>(
        qs.parse(history.location.hash, { ignoreQueryPrefix: true })?.mode as string
    );
    const [email] = React.useState<string>(
        qs.parse(history.location.hash, { ignoreQueryPrefix: true })[
            '#/redirectFlow?email'
        ] as unknown as string
    );
    return (
        <div>
            {mode === 'verifyEmail' && (
                <VerifyEmail history={history} code={code} location={null} match={null} />
            )}
            {mode === 'resetPassword' && (
                <ChangePassword
                    history={history}
                    code={code}
                    email={email}
                    location={null}
                    match={null}
                />
            )}
        </div>
    );
};
export default RedirectFlow;
