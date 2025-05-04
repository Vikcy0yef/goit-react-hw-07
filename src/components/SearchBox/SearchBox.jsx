import React from 'react'
import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css"

const SearchBox = () => {
  
   const filterId = useId();
  const dispath = useDispatch();

  const onFilter = (filter) => {
    dispath(changeFilter(filter));
  };

  return (
    <div className={s.form}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        name="filter"
        id={filterId}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};


export default SearchBox