import React, { useState, useEffect, useRef } from "react";
import { getPeopleByName } from "../../actions";
import { StyledForm } from "./styles";
import Search from "../Icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchBar() {

  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();

  const users = useSelector((state => state.search));

  const [filteredData, setFilteredData] = useState([]);

  const overlay = useRef();
  const event = (e) => {
    if (e.key === 'Escape') {
      setIsFocus(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', event)
    return () => {
      window.removeEventListener('keydown', event)
    }
  })

  const handleOverlayClick = (e) => {
    if (e.target === overlay.current) {
      setIsFocus(false);
    }
  }


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    if (!searchWord) {
      setFilteredData([]);
    }
    else {
      const newFilter = users.filter((value) => {
        return value.fullname.toLowerCase().includes(searchWord.toLowerCase());
      });
      setFilteredData(newFilter);
    }
  };
  useEffect(() => {
    dispatch(getPeopleByName(filteredData))
  }, [dispatch, filteredData])

  return (
    <StyledForm>
      <button type="submit">
        <Search />
      </button>
      <input
        type="text"
        placeholder="Search"
        onChange={handleFilter}
        onFocus={() => setIsFocus(true)}
      />
      {filteredData.length !== 0 && isFocus && (
        <>
          <div className='overlay-searchBar' ref={overlay} onClick={handleOverlayClick} />
          <div className='datalist'>
            {filteredData.map((value) => {
              return (
                <p className='name' key={value.id}>
                  <img className='user-img' src={value.profile} alt={value.fullname} />
                  <Link to={`/profile/` + value.id} >
                    {value.fullname}
                    <span className='email'>{value.email}</span>
                    <span className='span-link' />
                  </Link>
                </p>
              );
            })}
          </div>
        </>
      )}
    </StyledForm>
  );
}