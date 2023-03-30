import React from 'react';
import ListWrapper from "../../components/ListWrapper/ListWrapper";
import Filters from "../../components/Filters/Filters";
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <ListWrapper/>
            <Filters/>
        </div>
    );
};

export default Main;