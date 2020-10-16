import axios from 'axios'
import wpConfig  from './config';

export const getCategory = async (cat_slug) => {
    try {
        const responsecat = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/categories?slug="+cat_slug);
        const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/posts?per_page=100&orderby=menu_order&order=asc&category_name="+cat_slug);
        const array = []
        response.data[0]['123456']='asdad'
        responsecat.data[0]['items'] = response.data
        return responsecat.data[0]
        
    } catch (err) {
      console.log(err);
    }
};
