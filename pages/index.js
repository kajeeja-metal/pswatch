import Pages from '../layout/master'
import react, { Component } from "react"
class Home extends Component {
  render() {
    return (
      <Pages>
        <section className="block-1 py-5" style={{ backgroundImage: `url("https://www.pj-watch.com/wp-content/uploads/2020/07/inner_pj-watch.jpg")` }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-images text-md-center mb-5 mb-lg-0 col-md-12 col-lg-6">
                <img src="/static/images/block_1.webp" />
              </div>
              <div className="col-content col-md-12 col-lg-6">
                <h1 className="mb-3 text-center text-lg-left">ร้านรับซื้อนาฬิกา</h1>
                <p className="mb-3">ร้านรับซื้อนาฬิกา – รับซื้อ rolex Patek Panarai AP Omega IWC Cartier และ นาฬิกา มือสอง แบรนด์เนม ดังระดับ Hi-End ของแท้ ทุกรุ่น จ่ายเงินสด ให้ราคาดียุติธรรม</p>
                <p className="mb-3">เราบริการแบบมืออาชีพ มั่นใจได้เรากล้าการันตี เปิดให้บริการลูกค้ามากว่า 7 ปี และด้วยประสบการณ์มากกว่า 15 ปี ได้รับการยอมรับจากลูกค้าทั่วประเทศ</p>
                <p className="mb-3"> <span className="text-success">เรามีบริการไปรับสินค้าด้วยตัวพ่อค้าเอง ทั้งในกรุงเทพ และต่างจังหวัด</span><br />
                       ประหยัดเวลา ปลอดภัย หมดกังวลจากพวกที่แฝงตัวเป็นมิจฉาชีพ เพราะเราให้สำคัญเรื่องความไว้วางใจ มาเป็นอันดับหนึ่ง</p>
              </div>
            </div>
          </div>
        </section>
        <section className="block-2 py-5">
          <div className="container">
            <div className="row ">
              <div className="title-section col-12 text-center pb-5">
                <h1>ขายนาฬิกาแบรนด์ กับ PJ-WATCH ดีอย่างไร</h1>
              </div>
            </div>
            <div className="row">
              <div className="warranty-item col-12 col-md-4 text-center mb-5 mb-md-0">
                <div className="circle-icon mb-4">
                  <i class="fa fa-balance-scale" aria-hidden="true"></i>
                </div>
                <h3 className="mb-3">ให้ราคาดียุติธราม</h3>
                <p>เรามีทีมงานมืออาชีพ ที่สามารถให้ราคาท่านได้อย่างสมเหตุสมผล ตามราคาในตลาดปัจจุบัน ไม่กดราคา</p>
              </div>
              <div className="warranty-item col-12 col-md-4 text-center mb-5 mb-md-0">
                <div className="circle-icon mb-4">
                  <i class="fa fa-shield" aria-hidden="true"></i>
                </div>
                <h3 className="mb-3">ปลอดภัยจากมิจฉาชีพ</h3>
                <p> และมีที่ตั้งหน้าร้านชัดเจน หมดกังวลจากกลุ่มมิจฉาชีพ และเราไม่เปิดเผยข้อมูลลูกค้า</p>
              </div>
              <div className="warranty-item col-12 col-md-4 text-center mb-5 mb-md-0">
                <div className="circle-icon mb-4">
                  <i class="fa fa-comments" aria-hidden="true"></i>
                </div>
                <h3 className="mb-3">พ่อค้าคุยง่ายใจดี</h3>
                <p>ท่านสามารถเสนอราคาขาย กับทางพ่อค้าได้เลย เพื่อให้ลูกค้าได้รับความพึงพอใจที่สุด</p>
              </div>
            </div>
          </div>
        </section>
        <section className="block-3 py-5">
          <div className="container">
            <div className="row ">
              <div className="title-section col-12 text-center pb-5 ">
                <h1 className="text-dark bg-white py-3">สินค้ามาใหม่ (NEW ARRIVALS)</h1>
              </div>
            </div>
            <div className="row new-product_group">
              <div className="col-md-12 mb-4">
                <div className="row">
                  <div class="col-md-6">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Chronograph-GMT-Titatium-42mm-1-420x560.jpg" />
                  </div>
                  <div class="col-md-6 align-self-center">
                    <h2 className="mb-4">BVLGARI</h2>
                    <p className="mb-3">BVLGARI Octo Finissimo Extra Thin Manual-winding Skeleton Dial Black Ceramic Men’s Watch</p>
                    <button type="button" class="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div class="col-md-6">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Manual-winding-Skeleton-Dial-Black-Ceramic-Mens-Watch-1-420x560.jpg" />
                  </div>
                  <div class="col-md-6 align-self-center">
                    <h2 className="mb-4">BVLGARI</h2>
                    <p className="mb-3">BVLGARI Octo Finissimo Extra Thin Manual-winding Skeleton Dial Black Ceramic Men’s Watch</p>
                    <button type="button" class="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div class="col-md-6">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2019/04/56401974_2277226955929404_2424319853872545792_n-420x451.jpg" />
                  </div>
                  <div class="col-md-6 align-self-center">
                    <h2 className="mb-4">BVLGARI</h2>
                    <p className="mb-3">BVLGARI Octo Finissimo Extra Thin Manual-winding Skeleton Dial Black Ceramic Men’s Watch</p>
                    <button type="button" class="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div class="col-md-6">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Manual-winding-Skeleton-Dial-Black-Ceramic-Mens-Watch-1-420x560.jpg" />
                  </div>
                  <div class="col-md-6 align-self-center">
                    <h2 className="mb-4">BVLGARI</h2>
                    <p className="mb-3">BVLGARI Octo Finissimo Extra Thin Manual-winding Skeleton Dial Black Ceramic Men’s Watch</p>
                    <button type="button" class="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div class="col-md-6">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Manual-winding-Skeleton-Dial-Black-Ceramic-Mens-Watch-1-420x560.jpg" />
                  </div>
                  <div class="col-md-6 align-self-center">
                    <h2 className="mb-4">BVLGARI</h2>
                    <p className="mb-3">BVLGARI Octo Finissimo Extra Thin Manual-winding Skeleton Dial Black Ceramic Men’s Watch</p>
                    <button type="button" class="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block-3 py-5">
          <div className="container">
            <div className="row ">
              <div className="title-section col-12 text-center pb-5 ">
                <h1 className="text-dark bg-white py-3">Accessory</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div class="col-md-6">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/08/PJ-watch-สายนาฬิกา-744x419.jpg" />
                  </div>
                  <div class="col-md-6 align-self-center">
                    <h2 className="mb-3">สายนาฬิกา</h2>
                    <p className="mb-1">สายนาฬิกา Rolex</p>
                    <p className="mb-1">สายนาฬิกา Patek</p>
                    <p className="mb-1">สายนาฬิกา AP</p>
                    <p className="mb-4">สสายนาฬิกา PAM</p>
                    <button type="button" class="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div class="col-md-6">
                    <img src="https://www.pj-watch.com/wp-content/uploads/2020/08/Buckle-PAM-420x315.jpg" />
                  </div>
                  <div class="col-md-6 align-self-center">
                    <h2 className="mb-3">Buckle</h2>
                    <p className="mb-1">บัคเคิล rolex</p>
                    <p className="mb-1">บัคเคิล patek</p>
                    <p className="mb-1">บัคเคิล AP</p>
                    <p className="mb-1">บัคเคิล PAM</p>
                    <p className="mb-4">บัคเคิล Omega</p>
                    <button type="button" class="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blick-4 py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-6">

              </div>
              <div className="col-md-12 col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <h2>นาฬิกาแบรนด์ดังรุ่นยอดนิยม</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="row">
                      <div className="col-3">
                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/รับซื้อ-rolex-daytona-pj-watch.png" />
                      </div>
                      <div className="col-6">
                        <h3>รับซื้อ Rolex</h3>
                        <p>Daytona / Submariner / Datejust / Day-Date / GMT Master / Yacht-Master / Explorer / Sea Dweller / etc.</p>
                      </div>
                      <div className="col-3 align-self-end">
                        <button type="button" class="btn btn-outline-warning ">Read More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="row">
                      <div className="col-3">
                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/รับซื้อ-rolex-daytona-pj-watch.png" />
                      </div>
                      <div className="col-6">
                        <h3>รับซื้อ Rolex</h3>
                        <p>Daytona / Submariner / Datejust / Day-Date / GMT Master / Yacht-Master / Explorer / Sea Dweller / etc.</p>
                      </div>
                      <div className="col-3 align-self-end">
                        <button type="button" class="btn btn-outline-warning ">Read More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="row">
                      <div className="col-3">
                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/รับซื้อ-rolex-daytona-pj-watch.png" />
                      </div>
                      <div className="col-6">
                        <h3>รับซื้อ Rolex</h3>
                        <p>Daytona / Submariner / Datejust / Day-Date / GMT Master / Yacht-Master / Explorer / Sea Dweller / etc.</p>
                      </div>
                      <div className="col-3 align-self-end">
                        <button type="button" class="btn btn-outline-warning ">Read More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="row">
                      <div className="col-3">
                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/รับซื้อ-rolex-daytona-pj-watch.png" />
                      </div>
                      <div className="col-6">
                        <h3>รับซื้อ Rolex</h3>
                        <p>Daytona / Submariner / Datejust / Day-Date / GMT Master / Yacht-Master / Explorer / Sea Dweller / etc.</p>
                      </div>
                      <div className="col-3 align-self-end">
                        <button type="button" class="btn btn-outline-warning ">Read More</button>
                      </div>
                    </div>
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
export default Home