import { CDN_LINK } from "../utils/constants";


const Card = (props) => {

    const { data } = props;
    let { id,name,cloudinaryImageId,locality,costForTwo,avgRating} = data;

    const image = CDN_LINK + cloudinaryImageId;

    return (
        <div className="card bg-base-100 shadow-accent shadow-md  basis-[25%] h-[500px] text-primary-content">
            <figure>
                <img className="aspect-[4/3] object-fit object-center" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="my-4">{locality}</h2>
                <p>{costForTwo}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{avgRating}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;


// !higher order component1
export const WithPromoted = (Card) => {
    return (props) => {
        return (
            <div className="relative">
                <span className="absolute z-10 left-[80%] indicator-item badge badge-primary">
                    Promoted
                </span>
                <Card {...props} />
            </div>
        );
    };
};
