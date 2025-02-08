import React from "react";
import { MENU_API } from "../../constants.ts";
import { useParams } from "react-router";
import "../RestaurantMenu/RestaurantMenu.css";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory.tsx";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const { resId } = useParams();

  const filteredCategories =
    menuData?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (eachCard: any) =>
        eachCard?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const fetchApi = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setMenuData(data);
  };

  const toggleSelectedIndex = (index: number) => {
    setSelectedIndex((prevIndex: number) =>
      prevIndex === index ? null : index
    );
  };

  React.useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="menu-page-container">
      <h1>{menuData?.data?.cards?.[0]?.card?.card?.text}</h1>
      {filteredCategories?.map((eachItem: any, index: number) => (
        <RestaurantCategory
          data={eachItem}
          key={eachItem?.card?.card?.categoryId}
          showAccordian={index === selectedIndex ? true : false}
          setSelectedIndex={() => toggleSelectedIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
