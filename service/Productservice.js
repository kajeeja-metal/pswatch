import axios from 'axios'
import wpConfig  from './config';

export const getCategory = async (cat_slug) => {
    try {
        const responsecat = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/categories?slug="+cat_slug);
        const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/posts?per_page=100&orderby=menu_order&order=asc&category_name="+cat_slug);
        const array = []
        responsecat.data[0]['items'] = response.data
        return responsecat.data[0]
        
    } catch (err) {
      console.log(err);
    }
};
export const getleftCategory = async (cat_slug) => {
  try {
      const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/categories");
      const array=[]
      response.data.map(async (items,i)=>{
        if(items.parent !== 0){
          const responseSub = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/categories?parent="+items.parent);
          items['subMenu'] = responseSub.data
          array.push(items)
        }else{
          array.push(items)
        }
      })
      console.log(array)
      // const responseSub = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/posts?per_page=100&orderby=menu_order&order=asc&category_name="+cat_slug);
      // console.log(response.data)
  } catch (err) {
    console.log(err);
  }
};