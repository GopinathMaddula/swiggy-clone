import React from "react";
import RestaurantItem from "../RestaurantItem/RestaurantItem.tsx";
import "./RestaurantCategory.css";

interface Props {
  data: any;
  key: "string";
  showAccordian: boolean;
  setSelectedIndex: () => void;
}

const RestaurantCategory = ({
  data,
  showAccordian,
  setSelectedIndex,
}: Props) => {
  const handleClick = () => {
    setSelectedIndex();
  };
  return (
    <div className="category-item-container">
      <div
        onClick={handleClick}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 12px",
        }}
      >
        <h2>{`${data?.card?.card?.title} (${data?.card?.card?.itemCards?.length})`}</h2>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>{">"}</span>
      </div>

      {showAccordian &&
        data?.card?.card?.itemCards?.map((eachcard: any) => (
          <RestaurantItem data={eachcard} key={eachcard?.card?.info?.id} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
