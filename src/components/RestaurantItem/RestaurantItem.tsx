import React from "react";
import { IMG_ID } from "../../constants.ts";
import "../RestaurantItem/RestaurantItem.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/slice.ts";

interface Props {
  data: any;
  key: any;
}

const RestaurantItem = ({ data }: Props) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addItem(data));
  };

  return (
    <div className="res-item-main-container">
      <div>
        <h3>{data?.card?.info?.name}</h3>
        <h4>
          ₹
          {data?.card?.info?.price / 100 ||
            data?.card?.info?.defaultPrice / 100}
        </h4>
        <p>{data?.card?.info?.ratings?.aggregratedRating?.rating}</p>
        <p>{data?.card?.info?.description}</p>
      </div>
      <div className="res-item-img-container">
        <div style={{ position: "relative" }}>
          <img
            src={IMG_ID + data?.card?.info?.imageId}
            alt="img"
            style={{
              height: 144,
              width: 156,
              borderRadius: "16px",
            }}
          />
          <button className="add-button" onClick={handleCart}>
            ADD +
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
