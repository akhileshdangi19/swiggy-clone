import React from "react";
import useCards from "../hooks/useCards";
import FilterNavRestro from "./FilterNavRestro";
import FavouriteRestro from "./FavouriteRestro";
import TopRestro from "./TopRestro";
import GoodCard from "./GoodCard";
const MainContainer = () => {
  const data = useCards();
  const facetList = data?.cards[3]?.card?.card?.facetList;
  const restro = data?.cards[3]?.card?.card?.gridElements?.infoWithStyle.restaurants
  // console.log(facetList,restro,"restro,factlist")
  return (
    <>
      <FilterNavRestro factlist={facetList} />
      <FavouriteRestro RestroRentdata={restro}/>
      <GoodCard/>
      <TopRestro/>
    </>
  );
};

export default MainContainer;
