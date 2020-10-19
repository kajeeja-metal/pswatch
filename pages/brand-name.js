import Pages from '../layout/master'
import Leftbar from '../components/left-bar'
import react, { Component } from "react"
import Link from 'next/link';
class Brandname extends Component {
  render() {
    return (
      <Pages>
        <section className="block-1 py-4" style={{ backgroundImage: 'url(https://www.pj-watch.com/wp-content/uploads/2020/07/372726-scaled.jpg)' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-images text-md-center mb-5 mb-lg-0 col-md-12 col-lg-5">
                <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/ร้านรับซื้อ-rolex-pj-watch.webp" />
              </div>
              <div className="col-content col-md-12 col-lg-7">
                <h1 className="mb-3 text-center text-lg-left text-warning">รับซื้อนาฬิกา Rolex ของแท้ทุกรุ่น</h1>
                <p className="mb-3">นาฬิกา Rolex ชื่อนี้โดดเด่นและเป็นเอกลักษณ์เฉพาะ เริ่มก่อตั้งมานานตั้งแต่ปี 1905 จนถึงปัจจุบัน ได้รับการออกแบบที่ปราณีต แบบฉบับของ Rolex ทั้งวัสดุที่เลือกใช้ละกรรมวิธีการผลิตต่างๆ ที่เรียกได้ว่า ของปลอมยังทำให้เหมือนได้ยากและไม่คุ้มที่จะลงทุน จนทำให้ใครต่อหลายคนอยากที่จับต้องเป็นผู้ครอบครอง อีกทั้งหากจะซื้อเพื่อเกร็งกำไรก็ทำได้ดีในตลาด ยิ่งบางรุ่นที่ Discontinue ด้วยแล้ว อนาคตราคาเพิ่มขึ้นอย่างแน่นอน</p>
                <p className="mb-3">ท่านใดที่มีนาฬิกา Rolex อยู่แล้ว อยากจะขายหรือเช็คราคา หรือคำแนะนำอื่นๆสามารถสอบถามเราเข้ามาได้เลย</p>
                <h2 className="mb-3 text-center text-lg-left text-warning">รับซื้อ Rolex รุ่นยอดนิยม</h2>
              </div>
            </div>
          </div>
        </section>
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
        

      </Pages>
    )
  }
}
export default Brandname
