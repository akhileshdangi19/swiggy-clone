import { useEffect, useState } from "react";
import { MENU_API } from "../ustills/constants";
import { useDispatch } from "react-redux";
import {addItem} from '../ustills/cartSlice'
const useCards = () => {
  const dispatch=useDispatch()
  const [resInfo, setResInfo] = useState(null);
  const fetchData = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    setResInfo(json.data);
    dispatch(addItem(json.data))
    console.log(json.data)
  };

  useEffect(() => {
    fetchData();
  }, []);
  return resInfo;
};

export default useCards;
