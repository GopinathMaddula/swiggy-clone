import React from "react";
import RestaurentCard from "../../components/RestaurentCard/RestaurentCard.tsx";
import "../RestaurentsSection/RestaurentsSection.css";
import { Link } from "react-router";
import UserContext from "../../context.ts";

interface Props {
  data: any;
}

const RestaurentsSection = ({ data }: Props) => {
  const title = data?.[0]?.card?.card?.title || "Default Title";
  const restaurants =
    data?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  const { loggedInUser, setUserData } = React.useContext(UserContext);

  return (
    <div className="body-main-container">
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "16px",
          gap: "8px",
        }}
      >
        <span>Username : </span>
        <input
          type="text"
          value={loggedInUser}
          onChange={(e: any) => setUserData(e.target.value)}
          style={{ padding: "8px" }}
        />
      </div>
      <div className="res-main-container">
        {restaurants?.map((eachRes: any, id: number) => (
          <Link
            to={"restaurant/" + eachRes?.info?.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RestaurentCard data={eachRes} key={eachRes?.info?.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurentsSection;
