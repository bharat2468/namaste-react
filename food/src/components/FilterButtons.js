const FilterButtons = ({ listOfProducts, onFilter }) => {
    const handleFilter = () => {
        const filteredProducts = listOfProducts.filter(
            (product) => product.info.avgRating > 4
        );
        onFilter(filteredProducts);
    };

    const handleResetFilter = () => {
        onFilter(listOfProducts);
    };

    return (
        <div>
            <button className="btn bg-secondary text-secondary-content" onClick={handleFilter}>
                Show Top Rated Restaurants
            </button>
            <button
                className="ml-4 btn bg-secondary text-secondary-content"
                onClick={handleResetFilter}
            >
                Reset Filter
            </button>
        </div>
    );
};

export default FilterButtons;