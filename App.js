import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNl1WcEr1Wv0VlscNKDZKcM-x0WkVFKNn2Zg&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, veg } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{veg} </h4>
    </div>
  );
};

const resList = [
  {
    id: "151649",
    name: "Hotel Sai Nath & Sai Restaurant",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
    locality: "railway station",
    areaName: "Chhindwara Locality",
    costForTwo: "₹200 for two",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "101802",
    avgRatingString: "4.3",
    totalRatingsString: "1.0K+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 11.3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "11.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-01 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹33",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "151650",
    name: "Hotel Sai Nath & Sai Restaurant",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
    locality: "railway station",
    areaName: "Chhindwara Locality",
    costForTwo: "₹200 for two",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "101802",
    avgRatingString: "4.3",
    totalRatingsString: "1.0K+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 11.3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "11.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-01 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹33",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "151651",
    name: "Hotel Sai Nath & Sai Restaurant",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
    locality: "railway station",
    areaName: "Chhindwara Locality",
    costForTwo: "₹200 for two",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "101802",
    avgRatingString: "4.3",
    totalRatingsString: "1.0K+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 11.3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "11.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-01 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹33",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "151652",
    name: "Hotel Sai Nath & Sai Restaurant",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
    locality: "railway station",
    areaName: "Chhindwara Locality",
    costForTwo: "₹200 for two",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "101802",
    avgRatingString: "4.3",
    totalRatingsString: "1.0K+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 11.3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "11.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-01 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹33",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "151653",
    name: "Hotel Sai Nath & Sai Restaurant",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
    locality: "railway station",
    areaName: "Chhindwara Locality",
    costForTwo: "₹200 for two",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "101802",
    avgRatingString: "4.3",
    totalRatingsString: "1.0K+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 11.3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "11.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-01 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹33",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "151654",
    name: "Hotel Sai Nath & Sai Restaurant",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
    locality: "railway station",
    areaName: "Chhindwara Locality",
    costForTwo: "₹200 for two",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "101802",
    avgRatingString: "4.3",
    totalRatingsString: "1.0K+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 11.3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "11.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-01 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹33",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "151655",
    name: "Hotel Sai Nath & Sai Restaurant",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
    locality: "railway station",
    areaName: "Chhindwara Locality",
    costForTwo: "₹200 for two",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "101802",
    avgRatingString: "4.3",
    totalRatingsString: "1.0K+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 11.3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "11.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-01 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹33",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "151656",
    name: "Hotel Sai Nath & Sai Restaurant",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
    locality: "railway station",
    areaName: "Chhindwara Locality",
    costForTwo: "₹200 for two",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "101802",
    avgRatingString: "4.3",
    totalRatingsString: "1.0K+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 11.3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "11.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-01 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹33",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
