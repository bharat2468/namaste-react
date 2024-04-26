import Card from "./card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfProducts, setListOfProducts] = useState([]);

    // const [searchText,setSearchText] = useState("");


    function filter() {
        let filtered_list = listOfProducts.filter((product) => {
            return product.rating.rate > 4;
        });
        setListOfProducts(filtered_list);
    }

    async function getData() {
        const API_LINK = "https://fakestoreapi.com/products?limit=10";
        const data = await fetch(API_LINK);
        const json_data = await data.json();
        setListOfProducts(json_data);
    }

    useEffect(() => {
        getData();
    }, []);



    return listOfProducts.length == 0 ? <Shimmer /> : (
        <>
            <div className="p-20 w-screen">
                {/* /* search_div */}
                <div className="search_div mb-10 w-full">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="ml-8 input input-bordered w-full max-w-xs"
                        // value={searchText}
                        // onChange={(e) => {setSearchText(e.target.value)}}
                    />

                    <button
                        className="btn ml-10"
                        onClick={() => {
                            filter();
                        }}
                    >
                        Show Top Rated products
                    </button>
                </div>

                {/* /*restraunt div */}
                <div className="card_container flex justify-start flex-wrap gap-10 w-full">
                    {listOfProducts.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Body;
