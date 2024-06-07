const FilterButtons = ({ listOfProducts, onFilter }) => {
    const handleFilter = () => {
        const filteredProducts = listOfProducts.filter(
            (product) => product.rating.rate > 4
        );
        onFilter(filteredProducts);
    };

    const handleResetFilter = () => {
        onFilter(listOfProducts);
    };

    return (
        <div>
            <button className="btn" onClick={handleFilter}>
                Show Top Rated Products
            </button>
            <button
                className="ml-4 btn bg-blue-700"
                onClick={handleResetFilter}
            >
                Reset Filter
            </button>
        </div>
    );
};

export default FilterButtons;