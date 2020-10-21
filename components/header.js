import React, { Component } from 'react';
import Link from 'next/link';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false,
            dropdownIsOpen: false,
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        this.toggleDropdown = this.toggleDropdown.bind(this);
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
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="logo">
                                <img src="/static/images/Pjlogo.webp" />
                            </div>
                            <div className="nav-wrapper">
                                <Link href="/"><a href="" className="nav-item nav-item_active">HOME</a></Link>
                                <Link href="/"><a href="" className="nav-item">นาฬิกามือสอง</a></Link>
                                <Link href="/"><a href="" className="nav-item">รับซื้อนาฬิกาแบรนด์เนม</a></Link>
                                <Link href="/"><a href="" className="nav-item">ABOUT US</a></Link>
                                <Link href="/"><a href="" className="nav-item text-warning">Call 062-429-2968</a></Link>
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
                                    <li>
                                        <Link href="/"><a href="" className="nav-item">Audemars Piguet</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a href="" className="nav-item ">Breitling</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="icon-menu_wrapper">
                                <div className={`warpper-toggle ` + (this.state.menuIsOpen ? 'change' : '')} onClick={this.openMenu} >
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
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