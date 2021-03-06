import React, { Component } from 'react';
import  Router  from 'next/router'
import Link from 'next/link';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false,
            dropdownIsOpen: false,
            activeSlug: ''
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }
    componentDidMount(){
        
        this.setState({activeSlug:Router.pathname})
    }
    toggleDropdown() {
        this.setState({ dropdownIsOpen: !this.state.dropdownIsOpen })
    }

    openMenu() {
        this.setState({ menuIsOpen: !this.state.menuIsOpen })
 
        var bodyactive = this.state.menuIsOpen
        if(bodyactive == false){
            document.body.classList.add("overflow-hidden");
        }else{
            document.body.classList.remove("overflow-hidden");
        }
        
    }
    closeMenu() {
        this.setState({ menuIsOpen: false })
    }
    render() {
        return (
            <header>
                <div className={`header_wrapper py-2 ` + (this.state.menuIsOpen ? 'menu-active' : '')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="logo">
                                <Link href="/"><a href=""><img src="/static/images/PSWatch.png" style={{maxWidth:'50%'}}/></a></Link>
                                </div>
                                <div className="nav-wrapper ">
                                    <Link href="/"><a href="" className={`nav-item`+ (this.state.activeSlug == "/" ? ' nav-item_active ' :'')}>หน้าแรก</a></Link>
                                    <Link href={`/category/[slug]`} as={`/category/นาฟิกามือสอง/`} passHref><a href="" className={`nav-item`+ (this.state.activeSlug == "/" ? ' ' :'')}>นาฬิกามือสอง</a></Link>
                                    <Link href="/brand-name"><a href="" className={`nav-item`+ (this.state.activeSlug == "/brand-name" ? ' nav-item_active ' :'')}>รับซื้อนาฬิกาแบรนด์เนม</a></Link>
                                    <Link href="/about-us"><a href="" className={`nav-item`+ (this.state.activeSlug == "/about-us" ? ' nav-item_active ' :'')}>เกี่ยวกับเรา</a></Link>
                                    <a href="callto:063-991-1115" className={`nav-item`}>Call 063-991-1115</a>
                                    <ul className="nav-wrapper_inner">
                                        <li>
                                            <Link href="/"><a href="" className="nav-item ">NEW ARRIVALS</a></Link>
                                        </li>
                                        <li>
                                            <Link href="/"><a href="" className="nav-item ">OUT OF STOCK</a></Link>
                                        </li>
                                        <li>
                                            <Link href="/"><a href="" className="nav-item ">Accessory</a></Link>
                                            <button className={`btn-dd-menu ` + (this.state.dropdownIsOpen ? 'btn-dd-menu_active' : '')} onClick={this.toggleDropdown} ><i className="fas fa-caret-down"></i></button>
                                            <ul className={`dd-menu ` + (this.state.dropdownIsOpen ? 'dd-menu_active' : '')} >
                                                <li><Link href="/"><a href="" className="dd-menu_item">สายนาฬิกา AP</a></Link></li>
                                                <li><Link href="/"><a href="" className="dd-menu_item">สายนาฬิกา Panerai</a></Link></li>
                                                <li><Link href="/"><a href="" className="dd-menu_item">สายนาฬิกา Patek</a></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="icon-menu_wrapper ">
                                    <div className={`warpper-toggle ` + (this.state.menuIsOpen ? 'change' : '')} onClick={this.openMenu} >
                                        <div className="bar1"></div>
                                        <div className="bar2"></div>
                                        <div className="bar3"></div>
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header