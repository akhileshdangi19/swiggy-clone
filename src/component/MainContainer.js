import useCards from "../hooks/useCards";
import FilterNavRestro from "./FilterNavRestro";
import FavouriteRestro from "./FavouriteRestro";
import TopRestro from "./TopRestro";
import GoodCard from "./GoodCard";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
const MainContainer = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const data = useCards();
  const facetList = data?.cards[3]?.card?.card?.facetList;
  const restro =
    data?.cards[3]?.card?.card?.gridElements?.infoWithStyle.restaurants;
  const navigateToContacts = () => {
    navigate("/Todo");
  };
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {/* {loading &&  */}
        <>
          {/* <LoadingScreen /> */}
          <button onClick={navigateToContacts}>Todo</button>
          <FilterNavRestro factlist={facetList} />
          <FavouriteRestro RestroRentdata={restro} />
          <GoodCard />
          <TopRestro />
         
        </>
       {/* }   */}
    </>
  );
};

export default MainContainer;
