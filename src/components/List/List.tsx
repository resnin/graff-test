import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getQuotes} from "../../redux/slices/app";
import styles from './List.module.css'
import Loader from "../../shared/ui-kit/Loader/Loader";

const List = () => {
    const {data, loading, error} = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getQuotes({}))
    }, [])

    if (loading) return <Loader/>

    if (error) return <div style={{color: 'red'}}>{error}</div>

    if (!data.length) return <div className={styles.nothing}>
        Ничего не найдено
    </div>

    return (
        <div className={styles.list}>
            {data.map(item => <div key={item._id} className={styles.item}>
                <Link to={`/${item._id}`} className={styles.quote}>{item.content}</Link>
                <div className={styles.subtitle}>
                    <div className={styles.attribute}>Автор: <span>{item.author}</span></div>
                    <div className={styles.attribute}>Тэги: <span>{item.tags.join(', ')}</span></div>
                </div>
            </div>)}
        </div>
    );
};

export default List;