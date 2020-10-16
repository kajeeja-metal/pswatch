import axios from 'axios'
import wpConfig  from './config';

export const getCategory = async (catID) => {
    try {
        const responsecat = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/categories/"+catID);
        const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/posts?per_page=100&categories="+catID);
        responsecat.data['items'] = response.data
        return responsecat.data
        
    } catch (err) {
      console.log(err);
    }
};
