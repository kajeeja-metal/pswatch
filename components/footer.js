import React, {Component} from 'react';
import Link from 'next/link';
class Footer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer>
                <div className="footer_wrapper">
                    <div className="container text-center py-3">
                    <p>&copy;{new Date().getFullYear()} PS-Watch.com. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer