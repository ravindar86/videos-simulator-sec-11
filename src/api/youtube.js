import axios from 'axios';

const KEY='AIzaSyA31z3KGq5iaN8FOFxfqo8PXNh076s4eRc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        type: 'video'
    }
});