import Pages from '../layout/master'
import react, { Component } from "react"
import Link from 'next/link';
class Aboutus extends Component {
    render() {
        return (
            <Pages>
                <div className="about-us">
                    <div className="container">
                        <div className="logo">
                            <img src="https://www.pj-watch.com/wp-content/uploads/2016/10/logo-1-300x300.png" />
                        </div>
                        <div className="content">
                            <div className="title">
                                <h3>About Us</h3>
                            </div>
                            <div className="content-inner">
                                <p>PJ WATCH <a href="">ร้านรับซื้อนาฬิกา</a> ขายนาฬิกา-แลกเปลี่ยน นาฬิกามือสอง แบรนด์เนม Hi-End ทุกรุ่น ไม่ว่าจะเป็น <a href="">รับซื้อ rolex</a> | <a href="">Patek-Philippe</a> | <a href="https://www.pj-watch.com/category/panerai/">Panerai</a> | <a href="https://www.pj-watch.com/category/ap/">AP</a> | <a href="https://www.pj-watch.com/category/omega/">OMEGA</a> | <a href="https://www.pj-watch.com/category/cartier/">Cartier</a> | <a href="https://www.pj-watch.com/category/hublot/">Hublot</a> | <a href="https://www.pj-watch.com/category/iwc/">IWC</a> และแบรนด์ระดับ High-End ติดต่อหาเราได้เลย เราให้ราคาสูง สมเหตุสมผลตามราคาท้องตลาด วิเคราะห์นาฬิกาแบบมืออาชีพ</p>
                                <p>ในส่วนสินค้าของเราก็คัดนาฬิกามือสองมาในสภาพเหมือนของใหม่ สวยทุกเรือน ให้ทุกท่านได้ประทับใจในราคาย่อมเยาว์ เรายังบริการแนะนำและดูแลทุกท่าน อย่างมืออาชีพ ไม่ทอดทิ้งกันหลังการขาย ให้คำปรึกษาตลอด 24 ชม. มีบริการจัดส่งถึงบ้านด้วยตัวเราเองทั้งในกรุงเทพฯ และต่างจังหวัด เพื่อให้ท่านลูกค้าได้รับความสะดวกมากขึ้น</p>
                                <p>เราเปิดกิจการมากว่า 7 ปี แล้วด้วยประการณ์ในวงการนาฬิกาแบรนด์เนมกว่า 15 ปี มั่นใจได้ว่าเราคือมืออาชีพตัวจริง พร้อมให้บริการทุกท่านด้วยความเป็นกันเอง และมีความเป็นมืออาชีพอย่างแน่นอน</p>
                            </div>
                        </div>
                        <div className="img-1">
                            <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/inner_pj-watch.webp" />
                        </div>
                        <div className="img-2">
                            <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/PJ-WATCH-SHOP.webp" />
                        </div>
                    </div>

                </div>

            </Pages>
        )
    }
}
export default Aboutus
