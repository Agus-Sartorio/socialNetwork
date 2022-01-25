import React, { useState, useEffect } from "react";
import { getPeopleByName } from "../../actions";
import { StyledForm } from "./styles";
import Search from "../Icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();

  const users = useSelector((state => state.search));
  console.log(users, 'search');

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    event.preventDefault();
    const searchWord = event.target.value;
    const newFilter = users.filter((value) => {
      return value.fullname.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  useEffect(() => {
    dispatch(getPeopleByName(filteredData))
}, [])

  return (
    <>
<<<<<<< HEAD
      <form>
=======
  <StyledForm>
>>>>>>> 08e70142b381843444100059d94959bd1b3e8014
        <button type="submit">
          <Search />
        </button>
        <input type="text" placeholder="Search" onChange={handleFilter} />
      </StyledForm>
      {filteredData.length !== 0 && (
        <div>
          {filteredData.map((value, key) => {
            return (
                <Link to={`/profile/` + value.id} >
              <a href={value.id}>
                <p>{value.fullname}</p>
              </a>
              </Link>
            );
          })}
        </div>
      )}
<<<<<<< HEAD
    </>
=======
</>
>>>>>>> 08e70142b381843444100059d94959bd1b3e8014
  );
}