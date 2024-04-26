import Card from "./card";
import mockdata from "../utils/mockdata";
import SearchBox from "./SearchBox";


const Body = () => {




    return (
        <>
            <div className="p-20 w-screen">

                {/* /* search_div */}
                <div className="search_div mb-10 w-full">
                    <SearchBox/>
                    <button className="btn ml-10">Show Top Rated products</button>
                </div>

                {/* /*restraunt div */}
                <div className="card_container flex justify-start flex-wrap gap-10 w-full">
                    {
                        mockdata.products.map((product) =>
                            (<Card key = {product.id} product = {product}/>)
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default Body;