import React, { useContext } from "react";
import { IMG_ID } from "../../constants.ts";
import "../RestaurentCard/RestaurentCard.css";
import { Link } from "react-router";
import UserContext from "../../context.ts";

interface Props {
  data: any;
  key: number;
}

const RestaurentCard = ({ data }: Props) => {
  const restaurant = data?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <img
        src={IMG_ID + restaurant?.cloudinaryImageId}
        alt="restaurant"
        width="300"
        height="250"
      />
      <div className="res-name">{restaurant?.name}</div>
      <div className="rating-container">
        <span>*</span>
        <span>{restaurant?.avgRatingString}</span>
        <span>.</span>
        <span>{restaurant?.sla?.slaString}</span>
      </div>
      <div className="cuisine-container">
        {restaurant?.cuisines?.map(
          (eachCuisine: any, id: number) => eachCuisine + " ,"
        )}
      </div>
      <p>{restaurant?.areaName}</p>
      <p>{`User : ${loggedInUser}`}</p>
    </div>
  );
};

export default RestaurentCard;
