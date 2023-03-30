import React from 'react';
import List from "../List/List";
import styles from './ListWrapper.module.css'
import Pagination from "../Pagination/Pagination";
import filterIcon from '../../shared/assets/icons/Filters.svg'
import {useAppDispatch} from "../../hooks/redux";
import {showFilter} from "../../redux/slices/app";

const ListWrapper = () => {
    const dispatch = useAppDispatch()

    const toggleFilter = () => {
        dispatch(showFilter(true))
    }

    return (
        <div className={styles.listWrapper}>
            <h1 className={styles.title}>Цитаты известных личностей</h1>

            <button className={styles.showFilter} onClick={toggleFilter}>
                <img src={filterIcon} alt="filter"/> Фильтры
            </button>

            <List/>

            <Pagination/>
        </div>
    );
};

export default ListWrapper;