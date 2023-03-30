import React, {useEffect, useRef, useState} from 'react';
import {useAppDispatch} from "../../../hooks/redux";
import useDebounce from "../../../hooks/useDebounce";
import {getQuotes, searchQuotes, setSearchVal} from "../../../redux/slices/app";
import Input from "../../../shared/ui-kit/Input/Input";

const Search = () => {
    const dispatch = useAppDispatch()

    const [searchValue, setSearchValue] = useState('')

    const debouncedSearchValue = useDebounce<string>(searchValue);

    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        let promise
        if (debouncedSearchValue) {
            dispatch(setSearchVal(debouncedSearchValue))
            promise = dispatch(searchQuotes({query: debouncedSearchValue}))
        } else {
            promise = dispatch(getQuotes({}))
        }

        return () => promise.abort()
    }, [debouncedSearchValue])

    return (
        <Input label={'Название'}
               value={searchValue}
               onChange={(e) => {setSearchValue(e.target.value)}}/>
    );
};

export default Search;