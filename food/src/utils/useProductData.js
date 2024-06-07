import { useState,useEffect } from "react";

const useProductData = (id) => {
    const [productData,setProductData] = useState(null);

    useEffect(() => {
        fetch_data();
    }, []);

    const fetch_data = async () => {
        const API_LINK = "https://fakestoreapi.com/products/" + id;
        const data = await fetch(API_LINK);
        const json_data = await data.json();
        setProductData(json_data);

    }

    return productData;
}

export default useProductData;


