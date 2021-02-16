import Pages from '../../layout/master'
import Leftbar from '../../components/left-bar'
import react, { Component } from "react"
import { getPages } from '../../service/Pageservice'
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
                        <Leftbar sideber={this.props.leftsideber}  PlugIn={this.props.PlugInsideber}/>
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
    const sectionPlug = await getPages(217)
    const sectionleft = await getleftCategory()
    return {
      leftsideber: sectionleft,
      post: sectionNew,
      PlugInsideber: sectionPlug,
    }
  }
export default Postdetail
