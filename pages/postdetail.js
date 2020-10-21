import Pages from '../layout/master'
import Leftbar from '../components/left-bar'
import react, { Component } from "react"
import Link from 'next/link';
import { getleftCategory } from '../service/Productservice'
class Postdetail extends Component {
    constructor(props){
        super(props)
    }
    render() {
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
                                                    <img className="w-100" src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Chronograph-GMT-Titatium-42mm-1-420x560.jpg" />
                                                </div>
                                                <div className="col-md-12 align-self-center">
                                                    <div className="detail-product p-3">
                                                        <div className="hashtag-group">
                                                            <Link href="/"><a href="">patek มือสอง</a></Link>
                                                            <Link href="/"><a href="">patek มือสอง</a></Link>
                                                            <Link href="/"><a href="">patek มือสอง</a></Link>
                                                            <Link href="/"><a href="">patek มือสอง</a></Link>
                                                        </div>
                                                        <h2 className="mb-2">BVLGARI</h2>
                                                        <p className="mb-3 text-left">เรือนนี้ตัวเคสเป็นเซรามิกสีดำ ขนาด 40mm ด้านหลังเป็นกระจกใสโชว์เครื่อง รุ่นนี้ถูกออกแบบให้มีความบางเป็นพิเศษ หน้าปัด ชั่วโมง นาที วินาที และบอกพลังงานสำรอง สามารถกันน้ำลึกได้ 30 เมตร มาพร้อมกล่องใบรับประกันครบชุดครับ สภาพสวยเหมือนได้ของใหม่</p>
                                                        <img className="w-100 mb-3" src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Manual-winding-Skeleton-Dial-Black-Ceramic-Mens-Watch-2.jpg" />
                                                        <img className="w-100 mb-3" src="https://www.pj-watch.com/wp-content/uploads/2020/10/Bulgari-Octo-Finissimo-Extra-Thin-Manual-winding-Skeleton-Dial-Black-Ceramic-Mens-Watch-2.jpg" />
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
                                                            <div className="related-posts-item">
                                                                <Link href="/">
                                                                    <a href="">
                                                                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/10/Tudor-GLAMOUR-DATE-DAY-56003-1-265x265.jpg" />
                                                                        <h6 className="p-name">RELATED POSTS Tudor GLAMOUR DATE-DAY 56003</h6>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="related-posts-item">
                                                                <Link href="/">
                                                                    <a href="">
                                                                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/10/Tudor-GLAMOUR-DATE-DAY-56003-1-265x265.jpg" />
                                                                        <h6 className="p-name">Tudor GLAMOUR DATE 31mm 53003</h6>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="related-posts-item">
                                                                <Link href="/">
                                                                    <a href="">
                                                                        <img src="https://www.pj-watch.com/wp-content/uploads/2020/10/Tudor-GLAMOUR-DATE-DAY-56003-1-265x265.jpg" />
                                                                        <h6 className="p-name">BVLGARI Octo Finissimo Extra Thin Manual-winding Skeleton Dial Black Ceramic Men’s Watch</h6>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            
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
    const sectionleft = await getleftCategory()
    return {
      leftsideber: sectionleft
    }
  }
export default Postdetail
