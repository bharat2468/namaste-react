
const Card = (props) => {
    const {data} = props
    let {title,price,rating,image} = data;

    return (
        <div className="card bg-base-100 shadow-[2px_2px_5px_4px_#343D4F] basis-[25%] h-[500px]">
            <figure><img className="h-[200px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{rating.rate}</div>
                </div>
            </div>
        </div>
    );
}

export default Card; 