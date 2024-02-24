import { RESTAURANT_IMG_URL } from "../utils/contant";
import { IoIosStar } from "react-icons/io";

const RestaurantCard = ({ data }) => {
  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    avgRating,
    sla,
    cuisines,
    areaName,
  } = data;
  return (
    <div className="w-[24%] border shadow-lg overflow-clip rounded-lg hover:scale-[0.9] duration-300 cursor-pointer">
      {/* image container */}
      <div className="w-full relative">
        <img
          src={RESTAURANT_IMG_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-[155px]"
        />
        <h2 className="absolute bottom-1 text-white font-bold left-2 z-10">
          {aggregatedDiscountInfoV3?.header}
          {aggregatedDiscountInfoV3?.subHeader}
        </h2>
        <div className="bg-black opacity-[0.7] z-0 absolute top-0 left-0 bottom-0 right-0"></div>
      </div>

      {/* info container */}
      <div className="p-2">
        <h3 className="text-sm font-semibold">{name}</h3>
        <div className="flex gap-1 items-center font-semibold text-xs mt-1">
          <span className="flex gap-1 items-center">
            <IoIosStar /> {avgRating} .
          </span>
          <span>{sla.slaString}</span>
        </div>
        <p className="text-xs mt-1">{cuisines.join(", ")}</p>
        <p className="text-xs mt-1">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
