import Pages from '../layout/master'
import Leftbar from '../components/left-bar'
import react, { Component } from "react"
import Link from 'next/link';
import  Router  from 'next/router'
import { getPages } from '../service/Pageservice'
import { getFullCategory,getleftCategory } from '../service/Productservice'
class Brandname extends Component {
  render() {
    const { post } = this.props
    return (post !== null ?
      <Pages>
        {
          post.map((items,i)=>{
            return(
              <>
              <section className="block-1 py-4" style={{ backgroundImage: 'url('+items.bgImages+')' }}>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-images text-md-center mb-5 mb-lg-0 col-md-12 col-lg-5">
                      <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/ร้านรับซื้อ-rolex-pj-watch.webp" />
                    </div>
                    <div className="col-content col-md-12 col-lg-7">
                      <h2 className="mb-3 text-center text-lg-left text-warning">{items.name}</h2>
                      <p className="mb-3">{items.description}</p>
                      {/* <h2 className="mb-3 text-center text-lg-left text-warning">รับซื้อ Rolex รุ่นยอดนิยม</h2> */}
                    </div>
                  </div>
                </div>
              </section>
              <section className="group-brandName py-3">
              <div className="container">
                <div className="row justify-content-center">
                {
                  items.items.length !== 0 ? 
                  items.items.map((post,i)=>{
                    return(
                      <Link  href={`/blog/[slug]`} as={`/blog/${post.slug}/`} key={i} passHref>
                        <a href="" className="brandName-item col-6 col-lg-3">
                          <img src={post.images} />
                          <h6>{post.title.plaintext}</h6>
                        </a>
                      </Link>
                    )
                  })
                  :''
                }
                </div>
              </div>
              </section>
              
              </>
            )
          })
        }
        <section className="group-brandName py-3">
          <div className="container">
            <div className="row justify-content-center">
              <Link href="/">
                <a href="" className="brandName-item col-6 col-lg-3">
                  <img src="https://www.pj-watch.com/wp-content/uploads/2020/08/PJ-Watch-Panerai-Luminor-Base-8-Days-Acciaio.webp" />
                  <h6>Marina 1950 3 Days</h6>
                </a>
              </Link>
              <Link href="/">
                <a href="" className="brandName-item col-6 col-lg-3">
                  <img src="https://www.pj-watch.com/wp-content/uploads/2020/08/PJ-Watch-Panerai-Luminor-Base-8-Days-Acciaio.webp" />
                  <h6>Marina 1950 3 Days</h6>
                </a>
              </Link>
              <Link href="/">
                <a href="" className="brandName-item col-6 col-lg-3">
                  <img src="https://www.pj-watch.com/wp-content/uploads/2020/08/PJ-Watch-Panerai-Luminor-Base-8-Days-Acciaio.webp" />
                  <h6>Marina 1950 3 Days</h6>
                </a>
              </Link>
              <Link href="/">
                <a href="" className="brandName-item col-6 col-lg-3">
                  <img src="https://www.pj-watch.com/wp-content/uploads/2020/08/PJ-Watch-Panerai-Luminor-Base-8-Days-Acciaio.webp" />
                  <h6>Marina 1950 3 Days</h6>
                </a>
              </Link>
              <Link href="/">
                <a href="" className="brandName-item col-6 col-lg-3">
                  <img src="https://www.pj-watch.com/wp-content/uploads/2020/08/PJ-Watch-Panerai-Luminor-Base-8-Days-Acciaio.webp" />
                  <h6>Marina 1950 3 Days</h6>
                </a>
              </Link>

            </div>
          </div>
        </section>
      </Pages>: ''
    )
  }
}
Brandname.getInitialProps = async (ctx) => {
  const sectionNew = await getFullCategory()
  const sectionleft = await getleftCategory()
  return {
    leftsideber: sectionleft,
    post: sectionNew
  }
}
export default Brandname
