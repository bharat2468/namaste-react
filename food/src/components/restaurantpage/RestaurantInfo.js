import { CDN_LINK } from "../../utils/constants";

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
                <img className="hidden lg:block" src={image} alt={`${name} Image`} />
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

export default RestaurantInfo;