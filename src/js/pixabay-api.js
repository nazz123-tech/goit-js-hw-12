import axios from "axios";
export async function getImagesByQuery(query) {
    const baseURL = 'https://pixabay.com/api/';

    const params = {
        key: '53454682-c39aa10f124dd5ded9ba537e3',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    const response = await axios.get(baseURL,{params});
    return response.data;
}

