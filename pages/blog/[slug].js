import Pages from '../../layout/master'
import Leftbar from '../../components/left-bar'
import react, { Component } from "react"
import Link from 'next/link';
import { getleftCategory,getPostfind } from '../../service/Productservice'
class Postdetail extends Component {
    constructor(props){
        super(props)
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
        
        const {post} = this.props
        return (
            <Pages>
                <div className="container">
                    <div className="row postdetail_wrapper">
                        <Leftbar sideber={this.props.leftsideber}/>
                        <div className="col-md-12 col-lg-8 px-0">
                            <section className="block-8">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 mb-4 ">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <img className="w-100" src={post.images} />
                                                </div>
                                                <div className="col-md-12 align-self-center">
                                                    <div className="detail-product p-3">
                                                        <div className="hashtag-group">
                                                            {
                                                                post.categories_group !== null && post.categories_group.map((items,i)=>{
                                                                return <Link href={`/category/[slug]`} as={`/category/${items.slug}/`} key={i} passHref><a href=""><span>{items.category_name}</span></a></Link>
                                                                })
                                                            }
                                                        </div>
                                                        <h2 className="mb-2" dangerouslySetInnerHTML={this.rawMarkupremove(post.title.rendered)}/>
                                                        <div className="mb-3  text-left" dangerouslySetInnerHTML={this.rawMarkupremove(post.content.plaintext)}/>
                                                    </div>
                                                    <div className="postdetail_nav-links">
                                                        <div className="postdetail_nav-links_wrapper">

                                                            <Link href="/">
                                                                <a href="" className="col-6 nav-previous">Rolex Sea Dweller 4000ft ขอบฟิล์ม</a>
                                                            </Link>
                                                            <Link href="/">
                                                                <a href="" className="col-6 nav-next">BVLGARI Octo Finissimo Extra Thin Manual-winding Skeleton Dial Black Ceramic Men’s Watch</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="related-posts">
                                                        <div className=" text-center">
                                                            <h5 className="bg-white text-dark pb-4">RELATED POSTS</h5>
                                                        </div>
                                                        <div className="related-posts_wrapper">
                                                            {
                                                                post.related_post !== null && post.related_post.map((items,i)=>{
                                                                return (
                                                                    <div className="related-posts-item">
                                                                        <Link href={`/blog/[slug]`} as={`/blog/${items.post_name}/`} key={i} passHref>
                                                                            <a href="">
                                                                                <img src={items.images} />
                                                                                <h6 className="p-name">{items.post_title}</h6>
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                                })
                                                            }
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
Postdetail.getInitialProps = async (ctx) => {
    const sectionNew = await getPostfind(encodeURI(ctx.query.slug))
    const sectionleft = await getleftCategory()
    return {
      leftsideber: sectionleft,
      post: sectionNew
    }
  }
export default Postdetail
