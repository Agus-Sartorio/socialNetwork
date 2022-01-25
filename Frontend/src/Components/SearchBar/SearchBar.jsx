import React, { useState, useEffect } from "react";
import { getUsers } from "../../actions";
import { StyledForm } from "./styles";
import Search from "../Icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchBar({_id}) {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  console.log(users);

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    event.preventDefault();
    const searchWord = event.target.value;
    const newFilter = users.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
  <StyledForm>
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
</>
  );
}