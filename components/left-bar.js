import react, { Component } from "react"
import Link from 'next/link';
class Leftbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.sideber
        }
    }
    render() {
        const { category } = this.state
        console.log(category)
        return (
            <div className="col-md-12 col-lg-3">
                <section className="search-bar p-3 bg-white text-dark py-2 mb-3">
                    <div className="container">
                        <div className="row">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="category-menu bg-white text-dark py-2 mb-3 ">
                    <div className="container">
                        <div className="row">
                            <div className="title-section col-12 text-center py-2 ">
                                <h5 className="">CATEGORIES</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="category-nav">
                                    {
                                        category.map((cat, i) => {
                                            return (
                                                <li>
                                                    <a href="">{cat.name}<span>{cat.count}</span></a>
                                                    {
                                                        cat.submenu.length != 0 ?
                                                            <ul>
                                                                {
                                                                    cat.submenu.map((sub, i) => {
                                                                        return <li><a href="">{sub.name}<span>{sub.count}</span></a></li>
                                                                    })
                                                                }

                                                            </ul>
                                                            :
                                                            ''
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="category-content bg-white text-dark py-3 mb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h5>PJ WATCH ร้านรับซื้อนาฬิกา ขายนาฬิกา-แลกเปลี่ยน นาฬิกามือสอง แบรนด์เนม Hi-End ทุกรุ่น ทุกยี่ห้อ ไม่ว่าจะเป็นรับซื้อ rolex, AP, Breitling, Corum, Cartier,  Franck Muller, Hublot, IWC, JLC, Omega, Oris, Panerai, Patek-Philippe, Tag Heuer, Zenith และแบรนด์ดังอื่นๆ อีกมากมาย มาหาเราได้เลย เราให้ราคาสูง สมเหตุสมผลตามราคาท้องตลาด วิเคราะห์แบบมืออาชีพ</h5>
                                <br />
                                <p>ในส่วนสินค้าของเราก็คัดมาในสภาพเหมือนของใหม่ สวยๆทุกเรือน ให้ทุกท่านได้ประทับใจ โดยทุกเรือนเรารับประกันคุณภาพ เป็นสินค้ามือสองที่ราคาย่อมเยาว์ และให้บริการแนะนำและดูแลทุกท่าน อย่างมืออาชีพ ไม่ทอดทิ้งกันหลังการขายแน่นอน เรามีบริการให้คำปรึกษา 24 ชม. มีบริการจัดส่งถึงบ้านด้วยตัวเราเองทั้งในกรุงเทพฯ และต่างจังหวัด เพื่อให้ท่านลูกค้าได้รับความสะดวกมากขึ้น หรือจะเดินทางมาที่ร้าน PJ-WATCH ที่ศูนย์การค้า The Up พระราม 3 ชั้น 2 ข้างบันไดทางขึ้น เราดูแลเองทุกขั้นตอน รับประกันสินค้าทุกชิ้น รับซื่อคืนทุกเรือน อยากขาย อยากซื้อ อยากเปลี่ยน โทรปรึกษาเราก่อนบริการด้วยใจไม่กดราคา ไม่กดดันให้ขายสนใจโทรหาเราได้เลยที่</p>
                                <br />
                                <h5>062-429-2968  (คุณโย)</h5>
                                <h5>ช่องทางติดตามเราได้ที่</h5>
                                <h5>www.pj-watch.com</h5>
                                <a href=""><h5>www.facebook.com/pjwatchbra</h5></a>
                                <p>Instrgram: pjwatch</p>
                                <br />
                                <p>ID line: @pjwatch (มี @ ด้วย)</p>
                                <br />
                                <img src="https://www.pj-watch.com/wp-content/uploads/2020/07/QR-Yo-PJ-Watch.webp" />
                                <br />
                                <br />
                                <img src="https://www.pj-watch.com/wp-content/uploads/2018/02/IMG_20180215_135837-420x747.jpg" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="tag-cloud bg-white text-dark py-3 mb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <button type="button " className="btn btn-secondary">Light1</button>
                                <button type="button" className="btn btn-secondary">Light2</button>
                                <button type="button " className="btn btn-secondary">Light3</button>
                                <button type="button" className="btn btn-secondary">Light</button>
                                <button type="button " className="btn btn-secondary">Light</button>
                                <button type="button" className="btn btn-secondary">Light</button>
                                <button type="button " className="btn btn-secondary">Light</button>
                                <button type="button" className="btn btn-secondary">Light</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Leftbar
