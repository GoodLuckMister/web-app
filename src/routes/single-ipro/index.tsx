import qs from 'qs';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { RouteComponentProps } from 'react-router';

import { FlexBox } from '../../components';
import BlogContainer from '../../containers/Blog';
import { useIPros } from '../../hooks';
import PageHeader from './components/PageHeader';
import UserContainer from './components/UserContainer';

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};

const SingleIPro: React.FC<RouteComponentProps> = ({ location }) => {
    const [id, setID] = React.useState<string>((location.state as any)?.id);
    useEffect(() => {
        const _id = (location?.state as any)?.id;
        if (_id !== id) {
            setID(_id);
        }
    }, [location, id]);
    const [idHash, setIDHash] = React.useState<string>(
        qs.parse(location.hash, { ignoreQueryPrefix: true })['#/ipro?id'] as string
    );
    useEffect(() => {
        const _id = qs.parse(location.hash, { ignoreQueryPrefix: true })['#/ipro?id'] as string;
        if (_id !== idHash) {
            setIDHash(_id);
        }
    }, [location, idHash]);
    const allProbes = useIPros(); //all categories.
    const pro = allProbes?.find((p) => p.id === id || p.id === idHash);
    const pros = allProbes?.filter((p) => p.category === pro?.category);
    const iProIndex = pros?.findIndex((pro) => pro?.id === id || pro?.id === idHash);
    const nextIProID = iProIndex + 1 >= pros?.length ? null : pros && pros[iProIndex + 1].id;
    const iPro = pros && pros[iProIndex];
    return (
        <>
            <Mobile>
                <div>
                    <PageHeader nextIProID={nextIProID} category={pro?.category} />

                    <UserContainer ipro={iPro} />
                    <BlogContainer flexing={true} />
                </div>
            </Mobile>
            <Desktop>
                <div style={{ marginLeft: 15 }}>
                    <PageHeader nextIProID={nextIProID} category={pro?.category} />
                    <FlexBox style={{ marginTop: 60 }}>
                        <UserContainer ipro={iPro} />
                        <BlogContainer />
                    </FlexBox>
                </div>
            </Desktop>
        </>
    );
};
export default SingleIPro;
