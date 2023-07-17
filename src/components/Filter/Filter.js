import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { filterActions } from "redux/Filter/filterSlice";
import { selectFilter } from '../../redux/Filter/filterSelectors';
import css from './Filter.module.css';


function Filter() {
    const filterInputId = nanoid();
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
    const changeFilter = e => { dispatch(filterActions(e.target.value)) };

    return (
        <div className={css.filterBox}>
            <label className={css.filterLabel} htmlFor={filterInputId}>Find contacts by name</label>
            <input
                 className={css.filterInput} 
                id={filterInputId} 
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" 
                value={filter} 
                onChange={changeFilter} 
            />
        </div>
    
    );
}

export default Filter;