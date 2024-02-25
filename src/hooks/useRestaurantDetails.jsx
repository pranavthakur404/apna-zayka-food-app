import { useEffect, useState } from "react";

const useRestaurantDetails = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetching = async () => {
    const res = await fetch(url);
    const resData = await res.json();
    setData(resData?.data?.cards);
    setLoading(false);
  };
  useEffect(() => {
    fetching();
  }, []);
  return { data, loading };
};

export default useRestaurantDetails;
