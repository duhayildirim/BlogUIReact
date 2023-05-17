import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class TopBar extends React.Component {

    state = {
        isLoggedIn: true,
        username: 'duha'
    }

    render() {
        const { isLoggedIn, username } = this.state
        let links = (<div className="ml-auto">
            <Link to="/login" className="btn btn-login btn-sm text-uppercase fw-bold">
                LOGIN
            </Link>
            <Link to="/signup" style={{ marginLeft: '8px' }} className="btn btn-login btn-sm text-uppercase fw-bold">
                SIGN UP
            </Link>
        </div>)

        if (isLoggedIn) {
            links = (<div className="ml-auto">
                <Link to={`/user/${username}`} className="btn btn-login btn-sm text-uppercase fw-bold">
                    {username}
                </Link>
                <Link style={{ marginLeft: '8px' }} className="btn btn-login btn-sm text-uppercase fw-bold">
                    LOGOUT
                </Link>
            </div>)
        }

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
                                    {links}
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
