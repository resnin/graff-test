import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getQuote} from "../../redux/slices/card";
import Loader from "../../shared/ui-kit/Loader/Loader";
import styles from './CardContent.module.css'

type Props = {
    id: string
}

const CardContent = ({id}: Props) => {
    const dispatch = useAppDispatch()
    const {loading, author, content,
        dateAdded, tags, length} = useAppSelector(state => state.card)

    useEffect(() => {
        dispatch(getQuote(id))
    }, [])

    if (loading) return <Loader/>

    return (
        <div className={styles.content}>
            <div className={`${styles.author} ${styles.item}`}>
                Автор <span>{author}</span>
            </div>
            <div className={`${styles.tags} ${styles.item}`}>
                Тэги <span>{tags}</span>
            </div>
            <div className={`${styles.dateAdded} ${styles.item}`}>
                Дата <span>{dateAdded}</span>
            </div>
            <div className={`${styles.length} ${styles.item}`}>
                Длина <span>{length}</span>
            </div>
            <div className={`${styles.quote} ${styles.item}`}>
                Цитата <span>{content}</span>
            </div>
        </div>
    );
};

export default CardContent;