import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer";

import useRestaurantData from "../../utils/useRestaurantData";
import RestaurantInfo from "./RestaurantInfo";
import FoodItems from "./FoodItems";


// Main component for the restaurant page
const RestaurantPage = () => {
    const { id } = useParams();
    const { resInfo, foodCategories } = useRestaurantData(id);

    // Show loading shimmer if data is not yet available
    if (resInfo === null || foodCategories === null) return <Shimmer />;

    console.log(foodCategories);

    return (
        <>
            <RestaurantInfo resInfo={resInfo} />
            <FoodItems foodCategories={foodCategories} />
        </>
    );
};


export default RestaurantPage;
