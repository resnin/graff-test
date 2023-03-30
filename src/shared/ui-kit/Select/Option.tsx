import {components} from "react-select";
import React from "react";
import checkboxPicked from '../../assets/icons/CheckBox_Yes.svg'
import checkboxEmpty from '../../assets/icons/CheckBox_No.svg'
import styles from './Select.module.css'

const Option = props => {
    return (
        <components.Option {...props}>
            <div className={styles.option}>
                <img src={props.isSelected ? checkboxPicked : checkboxEmpty} alt=""/>
                <label>{props.label}</label>
            </div>
        </components.Option>
    );
};

export default Option