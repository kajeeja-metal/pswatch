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
export const getFullCategory = async (cat_slug) => {
  try {
      const responsecat = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/categories?parent=1&orderby=menu_order");
      const array = []
      responsecat.data.map(async (cat,i)=>{
        cat['items'] = []
        array.push(cat)
        array.map(async (main,i)=>{ 
          const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/posts?per_page=100&orderby=menu_order&order=asc&category_name="+main.slug+"");
            main['items'] = response.data
          
        })
      })
      
      return array
      
  } catch (err) {
    console.log(err);
  }
};
export const getTagsfind = async (slug) => {
  try {
      
      const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/tags?slug="+slug);
      const responsepost = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/posts?per_page=100&orderby=menu_order&order=asc&tags[]="+response.data[0].id);
      const array = []
      response.data[0]['items'] = responsepost.data
      console.log(response.data[0])
      return response.data[0]
      
  } catch (err) {
    console.log(err);
  }
};
export const getSearch = async (key) => {
  try {
      const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/posts?per_page=99&search="+encodeURI(key));
      return response.data
      
  } catch (err) {
    console.log(err);
  }
};
export const getAlltags = async (key) => {
  try {
      const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/tags");
      return response.data
      
  } catch (err) {
    console.log(err);
  }
};
export const getPostfind = async (slug) => {
  try {
      const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/posts?slug="+slug);
      const responseRelated = await axios.get(wpConfig.endpoint + "/wp-json/sections/v1/post/related/"+response.data[0].id);
      response.data[0]['related_post'] = responseRelated.data
      return response.data[0]
      
  } catch (err) {
    console.log(err);
  }
};
export const getleftCategory = async () => {
  try {
      const response = await axios.get(wpConfig.endpoint + "/wp-json/wp/v2/categories");// ข้อมูล Category ทั้งหมด
      const array=[] // array ว่าง
      const resData = response.data // ประกาศ ตัวแปร resData แทน response.data ที่ได้ถึงมาจาก Axios
      await resData.map((items,i)=>{ // loop ข้อมูลที่ ได้มา
        if(items.parent === 0){ // เงื่อนไข คือ ข้อมูลที่ได้มา parent ต้อง เท่ากับ 0 ถึง จะเป็นจริง
          items['submenu'] = []; // แทรกค่า submenu ใน api ที่เราได้ ดึงมา และ ค่าเริ่มต้น เท่ากับ array ว่าง 
          array.push(items) // เอาข้อมูลที่ได้มา ใส่ไว้ใน ตัวแปร array ที่ได้ประกาศ ไว้นอก loop และ เงื่อนไข ค่าที่ใส่เข้าไปจะเป็นค่าที่ มี parent เท่ากับ 0 เท่านั้น 
        }
      })
      await resData.map((sub,i)=>{// ประกาศ ตัวแปร resData แทน response.data ที่ได้ถึงมาจาก Axios 
        if(sub.parent !== 0){ // เงื่อนไข คือ ข้อมูลที่ได้มา parent ต้อง ไม่เท่ากับ 0 ถึง จะเป็นจริง
          array.map((main,i)=>{ // เอาตัวแปรที่มีชื่อว่า array มาทำการ loop
            if(sub.parent === main.id){ // เงื่อนไข (subcategory.parent === maincategory.id)
              main['submenu'] = [sub] // ทำการเพิ่มข้อมูลลงไปใน api ที่มีชื่อว่า submenu
            }
          })
        }
      })
      return array // ส่งค่า array
  } catch (err) {
    console.log(err);
  }
};