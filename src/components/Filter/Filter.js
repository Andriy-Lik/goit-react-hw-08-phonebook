import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "redux/Filter/filterSlice";
import { selectFilter } from '../../redux/Filter/filterSelectors';
import css from './Filter.module.css';


function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
    const changeFilter = e => { dispatch(filterActions(e.target.value)) };

    return (
        <div className={css.filterBox}>
            <label className={css.filterLabel} htmlFor="filter"></label>
            <input
                className={css.filterInput}
                type="text"
                name="filter"
                id="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" 
                value={filter} 
                onChange={changeFilter}
                placeholder="Find contacts by name" 
            />
        </div>
    
    );
}

export default Filter;