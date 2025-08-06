import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

const Body = () => {
  // state variable - Super powerful variable
  const [resLists, setResLists] = useState(resList);
  const [showData, setShowData] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState(resList);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2753406&lng=73.0072986&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();
  //   console.log(json);
  //   // optional chaining
  //   // setResLists(json?.data?.cards[2]?.card?.card);
  // };

  useEffect(() => {
    // simulate API delay
    const timer = setTimeout(() => {
      setResLists(resList);
      setShowData(true);
    }, 800);

    return () => clearTimeout(timer); // cleanup
  }, []);

  // conditional Rendering
  if (!showData) {
    return <Shimmer />; // show shimmer until timer finishes
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restaurant cards and update the UI
              // SearchText
              console.log(searchText);

              const filteredRes = resLists.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn-filter"
          onClick={() => {
            //filter logic
            const baseList = searchText.trim() === "" ? resLists : filteredRes;
            const filteredList = baseList.filter((res) => res.avgRating > 4);
            setFilteredRes(filteredList);
          }}
        >
          Top Rate Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
