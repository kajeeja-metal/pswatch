import react, { Component } from "react"
import Link from 'next/link';
import { getAlltags } from '../service/Productservice'
import Router, {withRouter} from 'next/router'
import { getPages } from '../service/Pageservice'
class Leftbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.sideber,
            tags: [],
            keyword : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount = async () =>{
        const sectionNew = await getAlltags()
        this.setState({tags:sectionNew})
    }
    handleChange(e) {
        this.setState({keyword: e.target.value});
    }
    handleSubmit(e) {
        event.preventDefault();
        Router.push({
            pathname: '/search/'+this.state.keyword,
            query: { name: this.state.keyword }
        })
    }
    rawMarkup(detail) {
        var rawMarkup = detail
        return { __html: rawMarkup };
      }
    render() {
        const { category,tags } = this.state
        return (
            <div className="col-md-12 col-lg-3">
                <section className="search-bar p-3 bg-white text-dark py-2 mb-3">
                    <div className="container">
                        <div className="row">
                            
                            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit} >
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search" name="search" placeholder="Search.." value={this.state.value} onChange={this.handleChange} />
                                <button className="btn bg-danger my-2 my-sm-0" type="submit"><i className="fas fa-search text-white"></i></button>
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
                                            if(cat.id != 1 && cat.count != 0){
                                                return (
                                                    <li  key={i}>
                                                        <Link href={`/category/[slug]`} as={`/category/${cat.slug}/`} passHref>
                                                            <a href="">{cat.name}<span>{cat.count}</span></a>
                                                        </Link>
                                                        {
                                                            cat.submenu.length != 0 ?
                                                                <ul>
                                                                    {
                                                                        cat.submenu.map((sub, i) => {
                                                                            return <li key={i}><Link href={`/category/[slug]`} as={`/category/${sub.slug}/`} passHref><a href="">{sub.name}<span>{sub.count}</span></a></Link></li>
                                                                        })
                                                                    }
    
                                                                </ul>
                                                                :
                                                                ''
                                                        }
                                                    </li>
                                                )
                                            }
                                            
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="category-content bg-white text-dark py-3 mb-3"  dangerouslySetInnerHTML={this.rawMarkup(this.props.PlugIn.content.rendered)}>
                    
                </section>
                <section className="tag-cloud bg-white text-dark py-3 mb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {
                                    tags.map((items,i)=>{
                                        return <Link key={i} href={`/tags/[slug]`} as={`/tags/${items.slug}/`} passHref><a className="btn btn-secondary">{items.name}</a></Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    
}
export default Leftbar
