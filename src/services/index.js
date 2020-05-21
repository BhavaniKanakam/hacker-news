import axios from 'axios';

export const getNewsData = async (page = 0) => {
    const result = await axios.get(`https://hn.algolia.com/api/v1/search?&page=${page}&hitsPerPage=50`).then(item => item)
    return result
}