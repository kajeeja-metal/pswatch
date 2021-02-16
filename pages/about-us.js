import Pages from '../layout/master'
import react, { Component } from "react"
import Link from 'next/link';
import { getPages } from '../service/Pageservice'
class Aboutus extends Component {
    constructor(props) {
    super(props)
    }
      rawMarkup(detail) {
        var rawMarkup = detail
        return { __html: rawMarkup };
      }
    render() {
        return (
            <Pages>
                <div className="about-us" >
                <article dangerouslySetInnerHTML={this.rawMarkup(this.props.aboutUs.content.rendered)}>
          
                </article>
                </div>
            </Pages>
        )
    }
}
Aboutus.getInitialProps = async (ctx) => {
    const sectionAbout = await getPages(202)
    return {
      aboutUs: sectionAbout,
    }
  }
export default Aboutus
