import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class TopBar extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8 mx-auto">
                        <div className="card border-0 shadow rounded-3 mt-5 mb-3">
                            <nav className="navbar navbar-expand-lg bg-white shadow rounded-3 ">
                                <div className="container">
                                    <Link to="/" className="navbar-brand">
                                        <img src={logo} alt="duha web site" />
                                    </Link>
                                    <div className="ml-auto">
                                        <Link to="/login" className="btn btn-login text-uppercase fw-bold">
                                            LOGIN
                                        </Link>
                                        <Link to="/signup" style={{marginLeft :'8px'}} className="btn btn-login text-uppercase fw-bold">
                                            SIGNUP
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar
