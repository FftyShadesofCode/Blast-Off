import React, {Component} from 'react'

class Header extends Component {
    render() {
        return (
            <nav>
                <dav className="nav-wrapper">
                    <a className="left brand-logo">
                        <img src="../BlastOff.png" alt="Blast Off Logo" style={{width: "85px"}}/>
                    </a>
                    <ul className="right">
                        <li>
                            <a>Blast Off with Google</a>
                        </li>
                    </ul>
                </dav>
            </nav>
        )
    }
}

export default Header

