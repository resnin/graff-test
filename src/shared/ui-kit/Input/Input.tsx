import React from 'react';
import styles from './Input.module.css'

type Props = {
    label: string
    placeholder?:string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({label, placeholder, onChange, value}: Props) => {
    return (
        <div className={styles.inputBlock}>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type="text" placeholder={placeholder}
                   value={value} onChange={onChange}/>
        </div>
    );
};

export default Input;