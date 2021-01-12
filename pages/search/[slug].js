import Pages from '../../layout/master'
import Leftbar from '../../components/left-bar'
import react, { Component } from "react"
import Link from 'next/link';
import  Router  from 'next/router'
import { getleftCategory,getSearch } from '../../service/Productservice'
class Search extends Component {
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
        const {category,slug} = this.props
         return (category.length != 0 ?
        <Pages>
            <section className="result-Category bg-white my-3">
            <div className="container">
                <div className="row">
                <div className="col-12 text-center">
                    <h3 className="text-dark  py-2">Search: {slug}</h3>
                </div>
                </div>
            </div>
            </section>
            <div className="container">
                <div className="row result-Category_wrapper">
                    <Leftbar sideber={this.props.leftsideber} />
                    <div className="col-md-12 col-lg-9 px-0">
                        <section className="block-8">
                                <div className="row new-product_group">
                                {
                                    category.length != 0 && category.map((items,i)=>{
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
                                                            return <Link href={`/category/[slug]`} as={`/category/${items.slug}/`} key={i} passHref><a href=""><span>{items.category_name}</span></a></Link>
                                                            })
                                                        }
                                                    </div>
                                                    <h2 className="mb-2" dangerouslySetInnerHTML={this.rawMarkupremove(items.title.rendered)}/>
                                                    {/* <div className="mb-3 block-descript" dangerouslySetInnerHTML={this.rawMarkupremove(items.content.plaintext)}/> */}
                                                    <Link href={`/blog/[slug]`} as={`/blog/${items.slug}/`} key={i} passHref>
                                                        <a href="" className="btn btn-warning">ดูข้อมูลเพิ่มเติม</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div> )
                                    })
                                }
                                </div>
                        </section>
                    </div>
                </div>
            </div>
        </Pages>: 
        <Pages>
            <section className="result-Category bg-white my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="text-dark  py-2">SEACRH : ไม่มีหมวดหมู่ข้อมูล</h3>
                        </div>
                    </div>
                </div>
                
            </section>
            <div className="container">
                    <div className="row result-Category_wrapper">
                        <Leftbar sideber={this.props.leftsideber} />
                        <div className="col-md-12 col-lg-9 px-0">
                            <section className="block-8">
                            <div className="detail-product p-5">
                                ไม่มีหมวดหมู่ข้อมูล
                            </div>
                            </section>
                        </div>
                    </div>
                </div>
        </Pages>
        )
    }
}
Search.getInitialProps = async (ctx) => {

    const sectionNew = await getSearch(ctx.query.slug)
    const sectionleft = await getleftCategory()
    return {
      category: sectionNew,
      leftsideber: sectionleft,
      slug:ctx.query.slug,
    }
  }
export default Search
