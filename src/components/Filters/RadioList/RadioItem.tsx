import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import radioPicked from '../../../shared/assets/icons/RadioButton_Yes.svg'
import radioEmpty from '../../../shared/assets/icons/RadioButton_No.svg'
import styles from '../Filters.module.css'

type Props = {
    setAuthor: React.Dispatch<React.SetStateAction<string>>
    value: string
    label: string
}

const RadioItem = ({setAuthor, value, label}: Props) => {
    const {currentAuthor} = useAppSelector(state => state.app)

    const check = value === currentAuthor

    const onCLick = () => {
        check ? setAuthor('') : setAuthor(value)
    }

    return (
        <div className={styles.radioItem} onClick={onCLick}>
            <img src={check ? radioPicked : radioEmpty} alt="radio"/>
            <div className={styles.radioLabel}>{label}</div>
        </div>
    );
};

export default RadioItem;