import Card from "./card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [showSearchError, setShowSearchError] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    function search_fun() {
        console.log(searchText);
        if (searchText.trim() === "") {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2000);
            return;
        }

        let searched_list = listOfProducts.filter((product) => {
            return product.title
                .toLowerCase()
                .includes(searchText.toLowerCase());
        });
        if (searched_list.length == 0) setShowSearchError(1);
        else setListOfProducts(searched_list);
    }

    function close_search() {
        console.log(searchText);
        if (searchText === "") {
            getData();
            setShowSearchError(0);
        }
    }

    function filter() {
        let filtered_list = listOfProducts.filter((product) => {
            return product.rating.rate > 4;
        });
        setListOfProducts(filtered_list);
    }

    async function getData() {
        const API_LINK = "https://fakestoreapi.com/products?limit=20";
        const data = await fetch(API_LINK);
        const json_data = await data.json();

        setListOfProducts(json_data);
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        close_search();
    }, [searchText]);

    return listOfProducts.length == 0 && showSearchError == 0 ? (
        <Shimmer />
    ) : (
        <>
            <div className="p-20 w-screen">
                {/* /* search_div */}
                <div className="search_div mb-10 w-full flex justify-between">
                    {/* search buttons */}
                    <div className="flex">
                        {/* search field */}
                        <input
                            type="text"
                            placeholder="Type here"
                            className="ml-8 input input-bordered w-full max-w-xs"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key == "Enter") {
                                    search_fun();
                                }
                            }}
                        />
                        {showTooltip && (
                            <div
                                className="tooltip tooltip-open tooltip-error"
                                data-tip="Seach field is empty!!"
                            >
                            
                            </div>
                        )}

                        <button
                            className="ml-4 btn bg-blue-700"
                            onClick={() => {
                                setSearchText("");
                            }}
                        >
                            X
                        </button>

                        <button
                            className="ml-4 btn bg-blue-700"
                            onClick={() => {
                                search_fun();
                            }}
                        >
                            Search
                        </button>
                    </div>

                    {/* filter buttons */}
                    <div>
                        <button
                            className="btn"
                            onClick={() => {
                                filter();
                            }}
                        >
                            Show Top Rated products
                        </button>

                        <button
                            className="ml-4 btn bg-blue-700"
                            onClick={() => {
                                getData();
                            }}
                        >
                            Close Filter
                        </button>
                    </div>
                </div>

                {/* /*restraunt div */}
                <div className="card_container flex justify-start flex-wrap gap-10 w-full">
                    {showSearchError == 1 ? (
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
                        listOfProducts.map((product) => (
                            <Card key={product.id} data={product} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Body;
