import React, { useEffect, useState } from 'react';

import { FormHeader, InputWrapper, Select, TextArea } from '../../components';
import { useCategoriesCore } from '../../hooks';
import { Option } from '../../types';
import { OnChange, Overview as OverviewType } from './types';
interface IOverview {
    onChange: OnChange;
    data: OverviewType;
}

const Overview: React.FC<IOverview> = ({ onChange, data }) => {
    const [categories, setCategories] = useState<Option[]>([]);
    const [types, setTypes] = useState<Option[]>([]);

    const [selectCategory, setSelectCategory] = useState<Option>(null);
    const options = useCategoriesCore();

    const onChangeCategory = (op: Option) => {
        if (!op) {
            setTypes([]);
        }
        setSelectCategory(op);
        onChange('category', op?.value);
    };
    useEffect(() => {
        setCategories(options.map((c) => ({ value: c.id, label: c.label })));
    }, [options]);
    useEffect(() => {
        const tmp = options?.find((op) => op.id === selectCategory?.value)?.types;
        tmp && setTypes(Object.values(tmp)?.map((t) => ({ value: t, label: t })));
    }, [selectCategory]);
    return (
        <form>
            <InputWrapper>
                <FormHeader>Category</FormHeader>
                <Select
                    value={data?.category}
                    isDisabled={false}
                    isLoading={categories.length === 0}
                    options={categories}
                    onChange={(value) => onChangeCategory(value)}
                    placeholder="Select category"
                />
            </InputWrapper>
            <InputWrapper>
                <FormHeader>Type</FormHeader>
                <Select
                    value={data?.type}
                    isDisabled={types.length === 0}
                    isLoading={types.length === 0 && selectCategory !== null}
                    options={types}
                    onChange={(v) => onChange('type', v?.value)}
                    placeholder="Select type"
                />
            </InputWrapper>
            <InputWrapper>
                <FormHeader>Add a short overview about yourself</FormHeader>
                <TextArea
                    style={{ width: '100%', minHeight: 165 }}
                    placeholder="Write what you do, your experience, your skills… anything that could help our user to understand who you are and what is the value you can bring"
                    onChange={(e) => onChange('overview', e.target.value)}
                    value={data.overview}
                />
            </InputWrapper>
        </form>
    );
};
export default Overview;
