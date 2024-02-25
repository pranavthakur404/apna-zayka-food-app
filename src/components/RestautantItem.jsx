import RestaurantItemDetails from "./RestaurantItemDetails";
import { FaAngleDoubleDown } from "react-icons/fa";

const RestautantItem = ({ data, showing, updateShowData }) => {
  const { title, itemCards } = data.card.card;

  const handleClick = () => {
    updateShowData();
  };

  return (
    <div className="bg-white w-full mb-2 py-2">
      <div className="flex justify-between items-center">
        <span>
          {title} ({itemCards.length})
        </span>

        <span onClick={handleClick}>
          <FaAngleDoubleDown />
        </span>
      </div>
      <div>
        {showing &&
          itemCards.map((card) => {
            console.log(card);
            return (
              <RestaurantItemDetails
                key={card?.card?.info?.id}
                data={card?.card?.info}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RestautantItem;
