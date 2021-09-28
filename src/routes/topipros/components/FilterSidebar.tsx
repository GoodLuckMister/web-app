import { useObserver } from 'mobx-react';
import React, { useState } from 'react';

import {
    Accordion,
    CheckboxWithLabel,
    GridList,
    PrimaryButton,
    Sidebar
} from '../../../components';
import { useUIStore } from '../../../contexts/UIContext';
import { useTypePerCategory } from '../../../hooks';

interface IFilterSidebar {
    isOpen: boolean;
    category: string;
    onFilter: (filters: Record<string, string[]>) => void;
}

const FilterSidebar: React.FC<IFilterSidebar> = ({ isOpen, category, onFilter }) => {
    const [filters, setFilters] = useState<Record<string, string[]>>({ type: [] });
    const types = useTypePerCategory(category);
    const uiStore = useUIStore();
    const onClose = () => uiStore.setSidebar(null);
    const onClick = () => {
        onFilter(filters);
        onClose();
    };
    return useObserver(() => (
        <Sidebar
            isOpen={isOpen}
            title={`Filter ${category}`}
            actions={<PrimaryButton onClick={onClick}>Filter</PrimaryButton>}
            onClose={onClose}>
            <div>
                <Accordion
                    title={`${category} type`}
                    initialIsOpen={true}
                    content={
                        <GridList style={{ padding: '20px 20px 20px 20px' }} num={5}>
                            {types?.map((t) => (
                                <CheckboxWithLabel
                                    key={t}
                                    checked={filters.type.includes(t)}
                                    onChange={() => {
                                        if (filters.type.includes(t)) {
                                            filters.type.filter((type) => type !== t);
                                            setFilters({
                                                ...filters,
                                                type: filters.type.filter((type) => type !== t)
                                            });
                                        } else {
                                            setFilters({
                                                ...filters,
                                                type: [...filters.type, t]
                                            });
                                        }
                                    }}
                                    label={t}
                                />
                            ))}
                        </GridList>
                    }
                />
            </div>
        </Sidebar>
    ));
};
export default FilterSidebar;
