import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card, { WithPromoted } from "./Card";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";
import useFetchData from "../utils/useFetchData";
import OnlineStatus from "./OnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineError from "./OfflineError";

const Body = () => {
    const { data: listOfProducts, isLoading } = useFetchData();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showSearchError, setShowSearchError] = useState(false);
    const status = useOnlineStatus();

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
        <div className="p-20 w-screen">
            <div className="mb-10 w-full flex justify-between">
                <SearchBar
                    listOfProducts={listOfProducts}
                    onSearch={handleSearch}
                />
                <OnlineStatus />
                <FilterButtons
                    listOfProducts={listOfProducts}
                    onFilter={handleFilter}
                />
            </div>
            <div className="card_container flex justify-center flex-wrap gap-10 w-full">
                {status ? (
                    showSearchError ? (
                        <div role="alert" className="alert alert-error">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
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
                            <span>No items match your search!!</span>
                        </div>
                    ) : (
                        filteredProducts.map((product) => (
                            <Link
                                className="basis-1/4"
                                to={`/products/${product.id}`}
                            >
                                {product.id % 4 == 0 ? 
                                    <PromotedCard key={product.id} data={product} />
                                 : 
                                    <Card key={product.id} data={product} />
                                }
                            </Link>
                        ))
                    )
                ) : (
                    <OfflineError />
                )}
            </div>
        </div>
    );
};

export default Body;
