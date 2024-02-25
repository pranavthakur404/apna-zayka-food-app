import { useParams } from "react-router-dom";
import { RESTAURANT_DETAILS_URL } from "../utils/contant";
import useRestaurantDetails from "../hooks/useRestaurantDetails";
import Shimmer from "../components/Shimmer";
import { IoMdStar } from "react-icons/io";
import RestautantItem from "../components/RestautantItem";
import { useState } from "react";

const RestaurantDetails = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();
  const { data, loading } = useRestaurantDetails(RESTAURANT_DETAILS_URL + id);

  const itemCategories =
    data[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((data) => {
      return (
        data.card.card["@type"].includes("ItemCategory") ||
        data.card.card["@type"].includes("NestedItemCategory")
      );
    });

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="w-[80%] my-0 mx-auto py-10">
      <h3 className="font-bold">{data[2]?.card?.card?.info?.name}</h3>
      <div className="w-full flex justify-between border-b border-dotted border-slate-950">
        <div className="my-5">
          <h4 className="text-base">{data[2]?.card?.card?.info?.name}</h4>
          <p className="text-xs text-slate-400">
            {data[2]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <p className="text-xs text-slate-400">
            {data[2]?.card?.card?.info?.areaName}{" "}
            {data[2]?.card?.card?.info?.sla?.lastMileTravelString}
          </p>
          <p className="text-xs text-slate-400 mt-2">
            {data[2]?.card?.card?.info?.feeDetails?.message}
          </p>
        </div>
        <div className="border p-2 shadow self-center">
          <span className="flex items-center justify-center text-emerald-600 text-xs">
            {<IoMdStar />} {data[2]?.card?.card?.info?.avgRating}
          </span>
          <span className="text-xs">
            <hr className="my-1" />
            {data[2]?.card?.card?.info?.totalRatingsString}
          </span>
        </div>
      </div>

      {/* restaurant items lists */}
      <div className="mt-5 bg-gray-100">
        {itemCategories &&
          itemCategories.map((category, index) => {
            return (
              <RestautantItem
                key={category?.card?.card?.title}
                data={category}
                showing={showIndex == index ? true : false}
                updateShowData={() => {
                  if (index == showIndex) {
                    setShowIndex(null);
                  } else {
                    setShowIndex(index);
                  }
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
