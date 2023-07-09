import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { FilterDiv, FilterLabel, FilterInput } from './Filter.styled';
import { filterActions } from "redux/filterSlice";
import { selectFilter } from '../../redux/selectors';


function Filter() {
    const filterInputId = nanoid();
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
    const changeFilter = e => { dispatch(filterActions(e.target.value)) };

    return (
        <FilterDiv>
            <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
            <FilterInput 
                id={filterInputId} 
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" 
                value={filter} 
                onChange={changeFilter} 
            />
        </FilterDiv>
    
    );
}

export default Filter;