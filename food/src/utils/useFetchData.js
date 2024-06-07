// !fetches data of the body component that is the list of products

import { useState, useEffect } from "react";

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchData = async () => {
        const API_LINK = "https://fakestoreapi.com/products?limit=20";
        const response = await fetch(API_LINK);
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading };
};

export default useFetchData;