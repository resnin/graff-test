import React from 'react';
import {radioOptions} from "../constants";
import RadioItem from "./RadioItem";
import styles from '../Filters.module.css'

type Props = {
    setAuthor: React.Dispatch<React.SetStateAction<string>>
}

const RadioList = ({setAuthor}: Props) => {
    return (
        <div>
            <label className={styles.label}>Авторы</label>
            <div className={styles.radioList}>
                {radioOptions.map(item =>
                    <RadioItem key={item.value}
                               label={item.label}
                               value={item.value}
                               setAuthor={setAuthor}/>)}
            </div>
        </div>
    );
};

export default RadioList;