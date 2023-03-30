import React, {useEffect, useRef, useState} from 'react';
import styles from './Filters.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getQuotes, setFilters, showFilter} from "../../redux/slices/app";
import Search from "./Search/Search";
import SelectItem, {ISelectOptions} from "../../shared/ui-kit/Select/Select";
import {SelectOptions} from "./constants";
import RadioList from "./RadioList/RadioList";
import arrowIcon from '../../shared/assets/icons/Arrow_Left.svg'

const Filters = () => {
    const dispatch = useAppDispatch()
    const {showFilters} = useAppSelector(state => state.app)

    const [tags, setTags] = useState<ISelectOptions[]>([])
    const [author, setAuthor] = useState<string>('')

    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        const tagsStr = tags.map(tag => tag.value).join(',')

        dispatch(setFilters({tags: tagsStr, author: author}))

        const promise = dispatch(getQuotes({tags: tagsStr, author: author}))

        return () => promise.abort()
    }, [tags, author])

    const closeFilters = () => {
        dispatch(showFilter(false))
    }

    return (
        <div className={styles.filters} style={showFilters ? {display: 'block'}: {}}>
            <h2 className={styles.title} onClick={closeFilters}>
                <img src={arrowIcon}/> Фильтры
            </h2>

            <div className={styles.filterItems}>

                <Search/>

                <SelectItem options={SelectOptions}
                            onChange={setTags} label={'Тэги'}/>

                <RadioList setAuthor={setAuthor}/>
            </div>
        </div>
    );
};

export default Filters;