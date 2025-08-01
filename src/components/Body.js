import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

import { useState } from "react";

const Body = () => {
  // state variable - Super powerful variable
  const [resLists, setResLists] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn-filter"
          onClick={() => {
            //filter logic
            const filteredList = resList.filter((res) => res.avgRating > 4);
            setResLists(filteredList);
          }}
        >
          Top Rate Restaurants
        </button>
      </div>
      <div className="res-container">
        {resLists.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
