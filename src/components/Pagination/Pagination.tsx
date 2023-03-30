import React from 'react';
import styles from './Pagination.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import arrowRight from '../../shared/assets/icons/Chevron_Right.svg'
import arrowLeft from '../../shared/assets/icons/Chevron_Left.svg'
import {getQuotes, searchQuotes} from "../../redux/slices/app";

const Pagination = () => {
    const {currentPage, totalPages, loading,
        searchValue, currentAuthor, currentTags} = useAppSelector(state => state.app)

    const dispatch = useAppDispatch()

    //т.к. для пагинации результатов поиска нужно пользоваться другим рестом,
    // приходится при изменении номера страницы проверять на наличие searchValue
    const changePage = (page: number) => {
        if (searchValue) {
            dispatch(searchQuotes({page: page, query: searchValue}))
        } else {
            dispatch(getQuotes({page: page, author: currentAuthor, tags: currentTags}))
        }
    }

    return (
        <div className={styles.paging}>
            <button disabled={currentPage === 1 || loading} className={styles.arrow}
                    onClick={() => changePage(currentPage - 1)}>
                <img src={arrowLeft}/>
            </button>

            <div>{currentPage}</div>

            <button disabled={currentPage === totalPages || loading} className={styles.arrow}
                    onClick={() => changePage(currentPage + 1)}>
                <img src={arrowRight}/>
            </button>
        </div>
    );
};

export default Pagination;