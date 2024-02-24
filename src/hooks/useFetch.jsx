import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState(true);

  const fetching = async () => {
    const res = await fetch(url);
    const resData = await res.json();
    setData(
      resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterData(
      resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setLoading(false);
  };

  useEffect(() => {
    fetching();
  }, []);

  return { data, setData, filterData, loading };
};

export default useFetch;
