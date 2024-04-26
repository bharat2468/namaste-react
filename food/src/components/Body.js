import Card from "./card";
import mockdata from "../utils/mockdata";
import SearchBox from "./SearchBox";
import { useState } from "react";

const Body = () => {
    const [listOfProducts, setListOfProducts] = useState(mockdata.products);

    function filter() {
        let filtered_list = listOfProducts.filter((product) => {
            return  product.rating > 4;
        });
        setListOfProducts(filtered_list);
    }


    return (
        <>
            <div className="p-20 w-screen">
                {/* /* search_div */}
                <div className="search_div mb-10 w-full">
                    <SearchBox />
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
