import Pages from '../layout/master'
import react, { Component } from "react"
import Link from 'next/link';
import { getPages } from '../service/Pageservice'
import { getCategory } from '../service/Productservice'
class Home extends Component {
  constructor(props) {
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
    const {newarrivals} = this.props
    console.log(newarrivals)
    return (
      <Pages>
        <section className="block-1 py-4" style={{ backgroundImage: 'url('+this.props.banner.images+')' }}  dangerouslySetInnerHTML={this.rawMarkup(this.props.banner.content.rendered)}/>
        <section className="block-2 py-4" dangerouslySetInnerHTML={this.rawMarkup(this.props.warranty.content.rendered)} />
        <section className="block-3 py-4">
          <div className="container">
            <div className="row ">
              <div className="title-section col-12 text-center pb-5 ">
                <h1 className="text-dark bg-white py-3">{newarrivals.name}</h1>
              </div>
            </div>
            <div className="row new-product_group">
              {
                newarrivals.items.length != 0 && newarrivals.items.map((items,i)=>{
                  return (
                  <div className={"mb-4 " + (i === 0 ? "col-md-12": "col-md-6")}>
                    <div className="row">
                      <div className="col-md-6 text-center">
                        <img className="w-100" src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Chronograph-GMT-Titatium-42mm-1-420x560.jpg" />
                      </div>
                      <div className="col-md-6 align-self-center py-3">
                        <h2 className="mb-4" dangerouslySetInnerHTML={this.rawMarkupremove(items.excerpt.rendered)}/>
                        <p className="mb-3" dangerouslySetInnerHTML={this.rawMarkupremove(items.title.plaintext)}/>
                        <button type="button" className="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                      </div>
                    </div>
                  </div> )
                })
              }
            </div>
          </div>
        </section>

        <section className="block-3 py-4">
          <div className="container">
            <div className="row ">
              <div className="title-section col-12 text-center pb-5 ">
                <h1 className="text-dark bg-white py-3">Accessory</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/08/PJ-watch-สายนาฬิกา-744x419.jpg" />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <h2 className="mb-3">สายนาฬิกา</h2>
                    <p className="mb-1">สายนาฬิกา Rolex</p>
                    <p className="mb-1">สายนาฬิกา Patek</p>
                    <p className="mb-1">สายนาฬิกา AP</p>
                    <p className="mb-4">สสายนาฬิกา PAM</p>
                    <button type="button" className="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/08/Buckle-PAM-420x315.jpg" />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <h2 className="mb-3">Buckle</h2>
                    <p className="mb-1">บัคเคิล rolex</p>
                    <p className="mb-1">บัคเคิล patek</p>
                    <p className="mb-1">บัคเคิล AP</p>
                    <p className="mb-1">บัคเคิล PAM</p>
                    <p className="mb-4">บัคเคิล Omega</p>
                    <button type="button" className="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block-4 ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-6 py-4">
                <div className="row py-2">
                  <div className="col-md-12 text-center">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/Pj-Watch_New_logo-420x126.webp" />
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-md-12 text-center py-4">
                    <h3>ร้านรับซื้อนาฬิกา แบรนด์เนมของแท้ ให้ราคาดี เราคืออันดับหนึ่ง เรื่องความไว้วางใจ</h3>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-md-12 text-center">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/Top-Luxury-Watches-PJ-WATCH.webp" />
                  </div>
                </div>
                <div className="row group-btn ">
                  <div className="col-md-6 py-2">
                    <button type="button" className="btn btn-success w-100 ">
                      <i className="fab fa-line mr-3" />
                      <span>@PJWATCH</span>
                    </button>
                  </div>
                  <div className="col-md-6 py-2">
                    <button type="button" className="btn btn-success w-100">
                      <i className="fas fa-phone-square-alt mr-3" />
                      <span>062-429-2968</span>
                    </button>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-md-12 text-center py-3">
                    <h4>เชื่อถือได้ 100% เรามีหน้าร้านที่ตั้งชัดเจน</h4>
                  </div>
                  <div className="col-md-12 text-center">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/PJ-WATCH-SHOP.webp" />
                    <h3 className="pt-4">ดูที่อยู่ร้านเราได้ที่นี้</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 poppular-group bg-white text-dark py-4">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2 className="py-5">นาฬิกาแบรนด์ดังรุ่นยอดนิยม</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-5">
                    <div className="row">
                      <div className="col-4 col-md-3">
                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/รับซื้อ-rolex-daytona-pj-watch.png" />
                      </div>
                      <div className="col-7 col-md-6">
                        <h5 className="pb-3">รับซื้อ Rolex</h5>
                        <p>Daytona / Submariner / Datejust / Day-Date / GMT Master / Yacht-Master / Explorer / Sea Dweller / etc.</p>
                      </div>
                      <div className="col-12 col-md-3 text-center align-self-end px-0">
                        <button type="button" className="btn btn-outline-warning mt-3">Read More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-5">
                    <div className="row">
                      <div className="col-4 col-md-3">
                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/รับซื้อ-rolex-daytona-pj-watch.png" />
                      </div>
                      <div className="col-7 col-md-6">
                        <h5 className="pb-3">รับซื้อ Rolex</h5>
                        <p>Daytona / Submariner / Datejust / Day-Date / GMT Master / Yacht-Master / Explorer / Sea Dweller / etc.</p>
                      </div>
                      <div className="col-12 col-md-3 text-center align-self-end px-0">
                        <button type="button" className="btn btn-outline-warning mt-3">Read More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-5">
                    <div className="row">
                      <div className="col-4 col-md-3">
                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/รับซื้อ-rolex-daytona-pj-watch.png" />
                      </div>
                      <div className="col-7 col-md-6">
                        <h5 className="pb-3">รับซื้อ Rolex</h5>
                        <p>Daytona / Submariner / Datejust / Day-Date / GMT Master / Yacht-Master / Explorer / Sea Dweller / etc.</p>
                      </div>
                      <div className="col-12 col-md-3 text-center align-self-end px-0">
                        <button type="button" className="btn btn-outline-warning mt-3">Read More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-5">
                    <div className="row">
                      <div className="col-4 col-md-3">
                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/รับซื้อ-rolex-daytona-pj-watch.png" />
                      </div>
                      <div className="col-7 col-md-6">
                        <h5 className="pb-3">รับซื้อ Rolex</h5>
                        <p>Daytona / Submariner / Datejust / Day-Date / GMT Master / Yacht-Master / Explorer / Sea Dweller / etc.</p>
                      </div>
                      <div className="col-12 col-md-3 text-center align-self-end px-0">
                        <button type="button" className="btn btn-outline-warning mt-3">Read More</button>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block-5 py-4">
          <div className="container">
            <div className="row">
              <div className="title-section col-12 text-center pb-3 ">
                <h1 className="text-warning mb-3">ขายนาฬิกาง่ายๆ แค่ 3 ขั้นตอน</h1>
                <p>อยากขายนาฬิกากับเราไม่ใช่เรื่องยาก แค่ทำตามขั้นตอนต่อไปนี้ก็สามารถรับเงินได้ทัน ลูกค้าโปรดอ่านรายละเอียดหรือสามารถสอบถามเราได้โดยตรงทันที</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center py-3">
                <img className="mb-3" src="https://www.pj-watch.com/wp-content/uploads/2020/07/addline-pjwatch.png" />
                <p>ส่งรูปถ่ายนาฬิกา ของท่านมาที่<span className="text-success">LINE : @pjwatch (มี @ ด้วยครับ)</span> พร้อมระบุยี่ห้อ รุ่นหรือปีผลิต พร้อมราคาที่ท่านต้องการมาหาเราได้เลย ไม่ต้องเกรงใจ เรายินดีให้บริการทุกท่าน</p>
              </div>
              <div className="col-md-4 text-center py-3">
                <img className="mb-3" src="https://www.pj-watch.com/wp-content/uploads/2020/07/appraise-watch-pj-watch.png" />
                <p>เมื่อทางได้รับข้อมูลแล้ว ทางเราจะประเมินราคานาฬิกาของท่านอย่างเป็นธรรม ตามสภาพแบบมืออาชีพ และแจ้งราคาให้ท่านทราบโดยเร็วที่สุด</p>
              </div>
              <div className="col-md-4 text-center py-3">
                <img className="mb-3" src="https://www.pj-watch.com/wp-content/uploads/2020/08/จ่ายเงินสด.webp" />
                <p>ลูกค้าตกลงราคาเป็นที่พอใจ นัดวันเวลารับสินค้า เมื่อเราได้ตรวจสอบสินค้าเรียบร้อยแล้ว ทางเราก็พร้อมมอบเงินให้ท่านทันที </p>
              </div>
            </div>
          </div>
        </section>
        <section className="block-6 py-4">
          <div className="container">
            <div className="row">
              <div className="title-section col-12 text-center pb-5 ">
                <h4 className="text-warning">โปรดตรวจสอบ</h4>
                <h1 className="text-secondary py-3">แบรนด์นาฬิกา ที่เรารับซื้อเท่านั้น</h1>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-12 text-center">
                <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/Our-Brands-We-Buy-Sell.png" />
              </div>

            </div>
            <div className="row py-3">
              <div className="col-12 text-center">
                <Link href="/">
                  <img src="https://www.pj-watch.com/wp-content/uploads/2020/08/Ads_pj-watch_query-new-744x496.webp" />
                </Link>
              </div>

            </div>
          </div>
        </section>
        <section className="block-7">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center py-3">
                <div id="fb-root"></div>

                <div className="fb-page" data-href="https://www.facebook.com/pswatch9168" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/pswatch9168" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pswatch9168">นาฬิกา Rolex มือสอง ของแท้ 100% By PSwatch</a></blockquote></div>

              </div>
              <div className="col-md-6 py-3">
                <div className="row mb-4">
                  <div className="col-6  justify-content-center d-flex align-items-center">
                    <h3>Follow Me</h3>
                  </div>
                  <div className="col-6  group-icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <p>อยากขายนาฬิกา มือสอง แบรนด์เนม ให้ได้ราคาสูง คิดถึงเรา ที่ร้าน PJ-WATCH เรายินดีให้บริการและคำปรึกษาฟรี เพียงแค่ท่าน ส่งรูปถ่ายนาฬิกาของท่านมาที่ <span className="text-success">LINE : @pjwatch (มี @ ด้วย)</span> หรือโทรสอบถามหาเราได้ทันที ตลอด 24 ชม.</p>
                  </div>
                </div>
                <div className="row py-4">
                  <div className="col-6 text-center">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/addline-pjwatch.png" />
                  </div>
                  <div className="col-6 align-self-center">
                    <button type="button " className="btn btn-success"><i className="fas fa-phone-square-alt mr-3"></i><span>062-429-2968</span></button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 hashtag-group">
                    <Link href="/"><span>patek มือสอง</span></Link>
                    <Link href="/"><span>patek มือสอง</span></Link>
                    <Link href="/"><span>patek มือสอง</span></Link>
                    <Link href="/"><span>patek มือสอง</span></Link>
                    <Link href="/"><span>patek มือสอง</span></Link>
                    <Link href="/"><span>patek มือสอง</span></Link>
                    <Link href="/"><span>patek มือสอง</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Pages>
    )
  }
}
Home.getInitialProps = async (ctx) => {
  const sectionWarranty = await getPages(34)
  const sectionBanner = await getPages(30)
  const sectionNew = await getCategory(9)
  return {
    warranty: sectionWarranty,
    banner: sectionBanner,
    newarrivals: sectionNew,
  }
}
export default Home