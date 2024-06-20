import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card, { WithPromoted } from "./Card";
import Shimmer from "../Shimmer";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";
import useFetchData from "../../utils/useFetchData";
import OnlineStatus from "./OnlineStatus";

const Body = () => {
    const { data: listOfProducts, isLoading } = useFetchData();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showSearchError, setShowSearchError] = useState(false);

    const PromotedCard = WithPromoted(Card);

    useEffect(() => {
        setFilteredProducts(listOfProducts);
    }, [listOfProducts]);

    const handleSearch = (searchedProducts) => {
        if (searchedProducts.length === 0) {
            setShowSearchError(true);
        } else {
            setShowSearchError(false);
            setFilteredProducts(searchedProducts);
        }
    };

    const handleFilter = (filteredProducts) => {
        setFilteredProducts(filteredProducts);
    };

    return isLoading ? (
        <Shimmer />
    ) : (
        <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div className="mb-6 md:mb-10 flex flex-col md:flex-row justify-between items-center">
                <SearchBar
                    listOfProducts={listOfProducts}
                    onSearch={handleSearch}
                />
                <div className="hidden md:block">
                    <OnlineStatus />
                    
                </div>
                <div className="hidden md:block">
                <FilterButtons
                    listOfProducts={listOfProducts}
                    onFilter={handleFilter}
                />
                </div>

                
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-10">
                {showSearchError && (
                    <div role="alert" className="alert alert-error text-center col-span-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="ml-2">No items match your search!!</span>
                    </div>
                )}
                {filteredProducts.map((product) => (
                    <Link
                        key={product.info.id}
                        className="w-full"
                        to={`/products/${product.info.id}`}
                    >
                        {product.info.avgRating > 4.5 ? (
                            <PromotedCard data={product.info} />
                        ) : (
                            <Card data={product.info} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
