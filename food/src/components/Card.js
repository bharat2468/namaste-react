

const Card = (props) => {
    const {product} = props
    let {title,description,price,rating,images} = product;
    images = images[0];

    return (
        <div className="card bg-base-100 shadow-xl basis-[25%]">
            <figure><img src={images} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{rating}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;