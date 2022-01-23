import React, { useEffect, useState } from "react";
import useVideo from "../hooks/useVideo";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, onSearchSubmit] = useVideo('pondicherry');
  //setSelectedVideo(response.data.items[0]);
  
  useEffect(() => {
    setSelectedVideo(videos[0]);
  },[videos]);
  

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onSearchSubmit} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;
