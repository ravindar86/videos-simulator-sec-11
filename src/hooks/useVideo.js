import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const useVideo = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onSearchSubmit(defaultTerm);
      }, [defaultTerm]);

    const onSearchSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
            q: term,
            },
        });

        setVideos(response.data.items);    
    };

    return [videos, onSearchSubmit];
}

export default useVideo;