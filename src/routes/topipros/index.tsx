import { useObserver } from 'mobx-react';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { RouteComponentProps } from 'react-router';

import avatar from '../../assets/img/avatar.png';
import { FlexBox, FlexWrap, Label, Loader, Message } from '../../components';
import BlogContainer from '../../containers/Blog';
import { useUIStore } from '../../contexts/UIContext';
import { useCategoriesCore, useIPros, useWindowSize } from '../../hooks';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import { AvailableSidebars } from '../../types/global';
import { Routes } from '..';
import FilterSidebar from './components/FilterSidebar';
import Header from './components/Header';
import IProCard from './components/IProCard';

const middleStyle: React.CSSProperties = { position: 'fixed', top: '50%', left: '40%' };

const TopIPros: React.FC<RouteComponentProps> = ({ location, history }) => {
    const [, height] = useWindowSize();
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState<Record<string, string[]>>({ type: [] });
    const [category, setCategory] = React.useState<string>((location.state as any)?.categoryID);
    useEffect(() => {
        const _category = (location?.state as any)?.categoryID;
        if (_category !== category) {
            setCategory(_category);
        }
    }, [location, category]);
    const [categoryHash, setCategoryHash] = React.useState<string>(
        qs.parse(location.hash, { ignoreQueryPrefix: true })['#/topipros?category'] as string
    );
    useEffect(() => {
        const _id = qs.parse(location.hash, { ignoreQueryPrefix: true })[
            '#/topipros?category'
        ] as string;
        if (_id !== categoryHash) {
            setCategoryHash(_id);
        }
    }, [location, categoryHash]);
    const uiStore = useUIStore();
    const unFilteredIPros = useIPros()?.filter(
        (p) => p.category === category || p.category === categoryHash
    );
    const iPros = unFilteredIPros
        ?.filter((p) => p.category === category || p.category === categoryHash)
        .filter((pro) => pro.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        .filter((pro) => {
            if (filters?.type?.length > 0) {
                return filters.type?.includes(pro.type);
            }
            return true;
        });
    const categoryDisplayName = useCategoriesCore().find(
        (c) => c.id === categoryHash || c.id === category
    )?.label;
    const isLoading = !unFilteredIPros;
    const showMessage = unFilteredIPros && unFilteredIPros.length === 0;
    return useObserver(() => (
        <div>
            {uiStore.sidebar === AvailableSidebars.FilterPros && (
                <FilterSidebar
                    isOpen={uiStore.sidebar === AvailableSidebars.FilterPros}
                    category={categoryDisplayName}
                    onFilter={(_filters) => setFilters(_filters)}
                />
            )}
            <Header
                category={categoryDisplayName}
                onChangeQuery={(e) => setSearchTerm(e.target.value)}
                filters={filters?.type}
                onFilterRemove={(filter: string) =>
                    setFilters({ type: filters?.type?.filter((f) => f !== filter) })
                }
            />
            <div>
                {isLoading && <Loader size={25} style={middleStyle} />}
                {showMessage && (
                    <div style={{ ...middleStyle, left: '27%' }}>
                        <Message>No iPros found in this category</Message>
                        <Label style={{ textAlign: 'center' }}>
                            Go back and search in other category
                        </Label>
                    </div>
                )}
            </div>
            <FlexBox style={{ marginTop: 60 }}>
                <Scrollbars
                    style={{ height: height < 850 ? '65vh' : '71vh', width: '70vw' }}
                    hideTracksWhenNotNeeded
                    renderThumbVertical={({ ...props }) => (
                        <div {...props} style={scrollbarsStyle} />
                    )}>
                    <FlexWrap style={{ marginTop: '-10px', marginLeft: '-20px' }}>
                        {iPros?.map((pro, index) => (
                            <IProCard
                                key={index}
                                image={pro.imageURL ? pro.imageURL : avatar}
                                type={pro.type}
                                score={pro.score}
                                reviews={pro.reviews.length}
                                spoq={pro.spoq.spoq}
                                name={pro.name}
                                onClick={() =>
                                    history.push({
                                        pathname: Routes.singleIPro.link,
                                        search: `?id=${pro.id}`,
                                        state: { id: pro.id }
                                    })
                                }
                            />
                        ))}
                    </FlexWrap>
                </Scrollbars>
                <BlogContainer />
            </FlexBox>
        </div>
    ));
};
export default TopIPros;
