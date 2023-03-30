import React from 'react';
import Select, {GroupBase, StylesConfig} from "react-select";
import styles from './Select.module.css'
import Option from './Option'

export interface ISelectOptions {
    value: string
    label: string
}

type Props = {
    options: ISelectOptions[]
    onChange: (option: ISelectOptions[]) => void
    label: string
}

const SelectItem = ({options, onChange, label}: Props) => {

    const style: StylesConfig<ISelectOptions, true, GroupBase<ISelectOptions>> = {
        container: (base) => ({
            ...base,
            padding: '1px',
            background: 'linear-gradient(180deg, #BC75FF 0%, #798FFF 100%)',
            borderRadius: '2px',
            marginTop: '6px'
        }),
        control: (base) => ({
            ...base,
            minHeight: '46px',
            background: '#393C46',
            border: '0',
            borderRadius: '2px',
            boxShadow: '0',
            '&:hover': {
                border: '0'
            }
        }),
        indicatorSeparator: (base) => ({
            ...base,
            width: '0'
        }),
        menu: (base) => ({
            ...base,
            background: '#393C46',
        }),
        option: base => ({
            ...base,
            background: '#393C46',
            cursor: 'pointer'
        })
    }


    return (
        <div>
            <label className={styles.label}>{label}</label>
            <Select onChange={onChange}
                    options={options}
                    isMulti
                    closeMenuOnSelect={false}
                    placeholder={false}
                    styles={style}
                    hideSelectedOptions={false}
                    components={{Option}}
            />
        </div>
    );
};

export default SelectItem;