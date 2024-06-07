import { useEffect, useState } from "react";

const SearchBar = ({ listOfProducts, onSearch }) => {
    const [searchText, setSearchText] = useState("");
    const [showTooltip, setShowTooltip] = useState(false);

    const handleSearch = () => {
        if (searchText.trim() === "") {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2000);
            return;
        }

        const searchedProducts = listOfProducts.filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
        );
        onSearch(searchedProducts);
    };

    const handleClearSearch = () => {
        setSearchText("");
        onSearch(listOfProducts);
    };


    const handleClearText = () => {
        if(searchText == "")
            onSearch(listOfProducts);
    }

    useEffect(() => {
        handleClearText();
    },[searchText])

    return (
        <div className="flex">
            <input
                type="text"
                placeholder="Type here"
                className="ml-8 input input-bordered w-full max-w-xs"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            {showTooltip && (
                <div
                    className="tooltip tooltip-open tooltip-error"
                    data-tip="Search field is empty!!"
                ></div>
            )}
            <button
                className="ml-4 btn bg-blue-700"
                onClick={handleClearSearch}
            >
                X
            </button>
            <button className="ml-4 btn bg-blue-700" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;