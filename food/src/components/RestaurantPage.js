import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";
import useRestaurantData from "../utils/useRestaurantData";

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




// Component to display restaurant information
const RestaurantInfo = ({ resInfo }) => {
    const {
        name,
        city,
        areaName,
        costForTwoMessage,
        cuisines,
        avgRating,
        cloudinaryImageId,
    } = resInfo;

    const image = CDN_LINK + cloudinaryImageId;

    return (
        <div className="card m-10 h-72 text-primary-content lg:card-side bg-base-100 shadow-accent shadow-lg">
            <figure>
                <img src={image} alt={`${name} Image`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="my-2">
                    <div className="badge badge-accent badge-outline">
                        {areaName}, {city}
                    </div>
                </h2>
                <h2 className="my-2">{costForTwoMessage}</h2>
                <ul className="menu rounded-lg menu-horizontal text-purple-500 bg-base-200">
                    {cuisines.map((cuisine) => (
                        <li key={cuisine} className="mx-2">
                            {cuisine}
                        </li>
                    ))}
                </ul>
                <div className="my-2 badge badge-accent badge-outline">
                    Rating: {avgRating}
                </div>
            </div>
        </div>
    );
};





// Component to display the list of food categories
const FoodItems = ({ foodCategories }) => {
    return foodCategories.map((category) => (
        <DisplayCategory key={category.card.card.title} category={category} />
    ));
};




// Component to display a single food category
const DisplayCategory = ({ category }) => {
    const { card } = category?.card;
    if (
        card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
        const title = card?.title;
        const items = card?.itemCards;

        return (
            <div className="mx-10 my-2 text-primary-content">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        {title}
                    </div>
                    <div className="collapse-content">
                        {items.map((dish) => {
                            const {
                                id,
                                name,
                                description,
                                imageId,
                                defaultPrice,
                                price,
                            } = dish.card.info;

                            const finalPrice = price || defaultPrice;

                            return (
                                <div
                                    key={id}
                                    className="my-10 mx-20 h-fit card card-side bg-base-100 shadow-xl flex"
                                >
                                    {imageId && (
                                        <figure className="flex-shrink-0 max-h-[60%] w-[300px] m-10">
                                            <img
                                                src={CDN_LINK + imageId}
                                                alt={`${name} Image`}
                                                className="object-cover h-full w-full rounded-3xl"
                                            />
                                        </figure>
                                    )}
                                    <div className="card-body">
                                        <h2 className="card-title">{name}</h2>
                                        <p>{description}</p>
                                        <h2 className="card-title">
                                            Rs. {finalPrice / 100}
                                        </h2>
                                        <div className="card-actions justify-end">
                                            <button className=" btn btn-secondary text-secondary-content">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default RestaurantPage;
