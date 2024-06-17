import { useState,useEffect } from "react";
import { FETCH_MENU_API_FIRST_PART,FETCH_MENU_API_SECOND_PART } from "./constants";

const useRestaurantData = (id) => {
    const [resInfo,setResInfo] = useState(null);
    const [foodCategories,setFoodCategories] = useState(null);

    useEffect(() => {
        fetch_data();
    }, []);

    const fetch_data = async () => {
        const API_LINK = FETCH_MENU_API_FIRST_PART + id + FETCH_MENU_API_SECOND_PART;
        const data = await fetch(API_LINK);
        const json_data = await data.json();
        const info = json_data?.data?.cards[2]?.card?.card?.info;
        let items = json_data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        items = items.filter((item) => {
            return item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        });

        setResInfo(info);
        setFoodCategories(items);
    }

    return {resInfo,foodCategories};
}

export default useRestaurantData;


