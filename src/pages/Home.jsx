import SearchRestaurant from "../components/SearchRestaurant";
import useFetch from "../hooks/useFetch";
import { ALL_RESTAURANT } from "../utils/contant";
import Shimmer from "../components/Shimmer";
import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";

const Home = () => {
  const { data, setData, filterData, loading } = useFetch(ALL_RESTAURANT);
  return (
    <div className="w-full py-9">
      {loading ? (
        <Shimmer />
      ) : (
        <div>
          <SearchRestaurant
            data={data}
            setData={setData}
            filterData={filterData}
          />
          <div className="py-10 w-full flex justify-between flex-wrap gap-3">
            {data.map((list) => {
              return <RestaurantCard key={list.info.id} data={list?.info} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
