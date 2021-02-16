import Pages from '../layout/master'
import react, { Component } from "react"
import Link from 'next/link';
import { getPages } from '../service/Pageservice'
import { getCategory } from '../service/Productservice'
class Home extends Component {
  constructor(props) {
    super(props)
  }
  rawMarkupremove(e) {
    var rawMarkup = e
    return { __html: rawMarkup.replace(/(<\/?(?:a|p|img)[^>]*>)|<[^>]+>/ig, '') };
  }
  rawMarkup(detail) {
    var rawMarkup = detail
    return { __html: rawMarkup };
  }
  render() {
    const { newarrivals } = this.props
    console.log(this.props.footerzone)
    return (
      <Pages>
        <section className="block-1 py-4" style={{ backgroundImage: 'url(' + this.props.banner.images + ')' }} dangerouslySetInnerHTML={this.rawMarkup(this.props.banner.content.rendered)} />
        <section className="block-2 py-4" dangerouslySetInnerHTML={this.rawMarkup(this.props.warranty.content.rendered)} />
        <section className="block-3 py-4">
          <div className="title-section text-center pb-5 ">
            <h1 className="text-dark bg-white py-3">{newarrivals.name}</h1>
          </div>
          <div className="container">
            <div className="row new-product_group">
              {
                newarrivals.items.length != 0 && newarrivals.items.map((items, i) => {
                  return (
                    <div className={"mb-4 " + (i === 0 ? "col-md-12" : "col-md-6")}>
                      <div className="row">
                        <div className="col-md-6 text-center">
                          <img className="w-100" src={items.images} />
                        </div>
                        <div className="col-md-6 align-self-center py-3">
                          <h2 className="mb-4" dangerouslySetInnerHTML={this.rawMarkupremove(items.excerpt.rendered)} />
                          <p className="mb-3" dangerouslySetInnerHTML={this.rawMarkupremove(items.title.plaintext)} />
                          <Link href={`/blog/[slug]`} as={`/blog/${items.slug}/`} key={i} passHref><a href="" className="btn btn-warning"><span>ดูข้อมูลเพิ่มเติม</span></a></Link>

                        </div>
                      </div>
                    </div>)
                })
              }
            </div>
          </div>
        </section>
       
        <article dangerouslySetInnerHTML={this.rawMarkup(this.props.footerzone.content.rendered)}>
          
        </article>

      </Pages>
    )
  }
}
Home.getInitialProps = async (ctx) => {
  const sectionWarranty = await getPages(34)
  const sectionBanner = await getPages(30)
  const sectionFooter = await getPages(189)
  const sectionNew = await getCategory('new-arrivals')
  return {
    warranty: sectionWarranty,
    banner: sectionBanner,
    newarrivals: sectionNew,
    footerzone: sectionFooter,
  }
}
export default Home