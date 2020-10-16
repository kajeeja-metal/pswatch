import Pages from '../../layout/master'
import Leftbar from '../../components/left-bar'
import react, { Component } from "react"
import Link from 'next/link';
class Category extends Component {
  render() {
    return (
      <Pages>
        <section className="result-Category py-3">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h3 className="text-dark bg-white py-2">CATEGORY: CHARRIOL</h3>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">

            <Leftbar />
            <div className="col-md-12 col-lg-8 px-0">
              <section className="block-8">
                <div className="container">
                  <div className="row new-product_group">

                    <div className="col-md-12 mb-4 ">
                      <div className="row">
                        <div class="col-md-12 text-center">
                          <img className="w-100" src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Chronograph-GMT-Titatium-42mm-1-420x560.jpg" />
                        </div>
                        <div class="col-md-12 align-self-center">
                          <div className="detail-product p-3">
                            <div class="hashtag-group">
                              <Link href="/"><span>patek มือสอง</span></Link>
                              <Link href="/"><span>patek มือสอง</span></Link>
                              <Link href="/"><span>patek มือสอง</span></Link>
                              <Link href="/"><span>patek มือสอง</span></Link>
                            </div>
                            <h2 className="mb-2">BVLGARI</h2>
                            <p className="mb-3">BVLGARI Octo Finissimo Extra Thin Manual-winding Skeleton Dial Black Ceramic Men’s Watch</p>
                            <button type="button" class="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="row">
                        <div class="col-md-12 text-center">
                          <img className="w-100" src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Chronograph-GMT-Titatium-42mm-1-420x560.jpg" />
                        </div>
                        <div class="col-md-12 align-self-center">
                          <div className="detail-product p-3">
                            <div class="hashtag-group">
                              <Link href="/"><span>patek มือสอง</span></Link>
                              <Link href="/"><span>patek มือสอง</span></Link>
                              <Link href="/"><span>patek มือสอง</span></Link>
                              <Link href="/"><span>patek มือสอง</span></Link>
                            </div>
                            <h2 className="mb-2">BVLGARI</h2>
                            <p className="mb-3">BVLGARI Octo Finissimo Extra Thin Manual-winding Skeleton Dial Black Ceramic Men’s Watch</p>
                            <button type="button" class="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="row">
                        <div class="col-md-12 text-center">
                          <img className="w-100" src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Chronograph-GMT-Titatium-42mm-1-420x560.jpg" />
                        </div>
                        <div class="col-md-12 align-self-center">
                          <div className="detail-product p-3">
                            <div class="hashtag-group">
                              <Link href="/"><span>patek มือสอง</span></Link>
                              <Link href="/"><span>patek มือสอง</span></Link>
                              <Link href="/"><span>patek มือสอง</span></Link>
                              <Link href="/"><span>patek มือสอง</span></Link>
                            </div>
                            <h2 className="mb-2">BVLGARI</h2>
                            <p className="mb-3">BVLGARI Octo Finissimo Extra Thin Manual-winding Skeleton Dial Black Ceramic Men’s Watch</p>
                            <button type="button" class="btn btn-warning">ดูข้อมูลเพิ่มเติม</button>
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
export default Category
