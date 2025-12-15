import React from "react";

const EnhancedRestaurantCard = (RestaurantCard) => {
  return function Wrapper(props) {

    console.log("props", props)
    console.log("props with spread op" , {...props})
    return (
      <>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default EnhancedRestaurantCard;

