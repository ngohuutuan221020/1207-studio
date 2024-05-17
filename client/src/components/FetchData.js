
import { useState, useEffect } from "react";

const FetchData = () => {
    const [imagesData, setImagesData] = useState([]);
    const url = "https://ngohuutuan221020.github.io/API-1207/listImage.json";
    const fetchDataInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((data) => setImagesData(data))
            .catch((error) => console.error("Error fetching data:", error));
    };

    useEffect(() => {
        fetchDataInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return imagesData;
};

export default FetchData;