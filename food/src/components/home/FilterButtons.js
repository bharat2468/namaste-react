import React, { useState } from "react";

const FilterButtons = ({ listOfProducts, onFilter }) => {
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    const handleFilter = () => {
        const filteredProducts = listOfProducts.filter(
            (product) => product.info.avgRating > 4
        );
        onFilter(filteredProducts);
        setIsFilterApplied(true);
    };

    const handleResetFilter = () => {
        onFilter(listOfProducts);
        setIsFilterApplied(false);
    };

    return (
        <div>
            <button className="btn bg-secondary text-secondary-content" onClick={handleFilter}>
                Show Top Rated Restaurants
            </button>
            {isFilterApplied && (
                <button
                    className="ml-4 btn bg-secondary text-secondary-content"
                    onClick={handleResetFilter}
                >
                    Reset Filter
                </button>
            )}
        </div>
    );
};

export default FilterButtons;
