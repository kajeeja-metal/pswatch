import Pages from '../../layout/master'
import Leftbar from '../../components/left-bar'
import react, { Component } from "react"
import Link from 'next/link';
import  Router  from 'next/router'
import { getPages } from '../../service/Pageservice'
import { getCategory,getleftCategory } from '../../service/Productservice'
class Category extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    rawMarkupremove(e){
        var rawMarkup = e
        return { __html: rawMarkup.replace(/\n/g, '') };
    }
    rawMarkup(detail) {
        var rawMarkup = detail
        return { __html: rawMarkup };
    }
    render() {
        const {category} = this.props
        return (
        <Pages>
            <section className="result-Category bg-white my-3">
            <div className="container">
                <div className="row">
                <div className="col-12 text-center">
                    <h3 className="text-dark  py-2">CATEGORY: {category.name}</h3>
                </div>
                </div>
            </div>
            </section>
            <div className="container">
                <div className="row result-Category_wrapper">
                    <Leftbar sideber={this.props.leftsideber} />
                    <div className="col-md-12 col-lg-9 px-0">
                        <section className="block-8">
                            <div className="container">
                                <div className="row new-product_group">
                                {
                                    category.items.length != 0 && category.items.map((items,i)=>{
                                    return (
                                    <div className={"mb-4 " + (i === 0 ? "col-md-12": "col-md-6")} key={i}>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <img className="w-100" src={items.images} />
                                            </div>
                                            <div className="col-md-12 align-self-center">
                                                <div className="detail-product p-3">
                                                    <div className="hashtag-group">
                                                        {
                                                            items.categories_group !== null && items.categories_group.map((items,i)=>{
                                                            
                                                            return <Link href={`/category/[slug]`} as={`/category/${decodeURI(items.slug)}/`} key={i} passHref><a href=""><span>{items.category_name}</span></a></Link>
                                                            })
                                                        }
                                                    </div>
                                                    <h2 className="mb-2" dangerouslySetInnerHTML={this.rawMarkupremove(items.title.rendered)}/>
                                                    <div className="mb-3 block-descript" dangerouslySetInnerHTML={this.rawMarkupremove(items.content.plaintext)}/>
                                                    <button type="button" className="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> )
                                    })
                                }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Pages>
        )
    }
}
Category.getInitialProps = async (ctx) => {
    
    const sectionNew = await getCategory(encodeURI(ctx.query.slug))
    const sectionleft = await getleftCategory()
    return {
      category: sectionNew,
      leftsideber: sectionleft
    }
  }
export default Category
