import axios from 'axios'
import wpConfig  from './config';

export const getPages = async (pageID) => {
    try {
        const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/pages/"+pageID);
        return response.data;
        
    } catch (err) {
      console.log(err);
    }
};
