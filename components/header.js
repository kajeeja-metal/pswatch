import React, { Component } from 'react';
import Link from 'next/link';
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <div className="header_wrapper py-2">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="logo">
                                <img src="/static/images/Pjlogo.webp" />
                            </div>
                            <div className="nav-wrapper">
                                <Link href="/"><div className="nav-item nav-item_active">HOME</div></Link>
                                <Link href="/"><div className="nav-item">นาฬิกามือสอง</div></Link>
                                <Link href="/"><div className="nav-item">รับซื้อนาฬิกาแบรนด์เนม</div></Link>
                                <Link href="/"><div className="nav-item">ABOUT US</div></Link>
                                <Link href="/"><div className="nav-item text-warning">Call 062-429-2968</div></Link>
                            </div>
                            <div className="icon-menu_wrapper">
                                <div className="icon-menu" >
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