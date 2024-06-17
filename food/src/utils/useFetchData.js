// !fetches data of the body component that is the list of products
import { API_LINK } from "./constants";
import { useState, useEffect } from "react";


const useFetchData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchData = async () => {
        const response = await fetch(API_LINK);
        const jsonData = await response.json();
        const resData = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(resData);
        setData(resData);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading };
};

export default useFetchData;