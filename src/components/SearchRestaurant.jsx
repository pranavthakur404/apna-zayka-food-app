import React, { useState } from "react";

const SearchRestaurant = ({ filterData, setData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setData(() => {
      return filterData.filter((data) => {
        return data.info.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
    console.log(filterData[0].info);
  }

  return (
    <div className="w-[300px] border">
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Restaurant..."
          className="outline-none w-full p-1 border-0 border-gray-950"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchRestaurant;
