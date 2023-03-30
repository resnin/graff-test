import React from 'react';
import {Link, useParams} from "react-router-dom";
import arrowIcon from '../../shared/assets/icons/Arrow_Left.svg'
import styles from './Card.module.css'
import CardContent from "../../components/CardContent/CardContent";

const Card = () => {
    const {id} = useParams()

    return (
        <div className={styles.card}>
            <Link to={'/'} className={styles.back}>
                <img src={arrowIcon} alt="arrow"/> Вернуться
            </Link>

            <CardContent id={id}/>
        </div>
    );
};

export default Card;