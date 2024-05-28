
const Card = (props) => {
    const {data} = props
    let {title,description,price,rating,image} = data;
    description = description.substring(0,30);

    return (
        <div className="card bg-base-100 shadow-xl basis-[25%]">
            <figure><img className=" h-80" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{rating.rate}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;