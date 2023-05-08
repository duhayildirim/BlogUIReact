import React from "react";
import Input from "../components/Input"

class UserLoginPage extends React.Component {
    state = {
        email: null,
        password: null
    }

    onChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h2 className="card-title text-center mb-5 fw-light">Login</h2>
                                <form>
                                    <Input type="email" name="email" label="Email" placeHolder="asdas@gmail.com" onChange={this.onChange} />
                                    <Input type="password" name="password" label="Password" placeHolder="password" onChange={this.onChange} />
                                    <div className="d-grid mt-5">
                                        <button className="btn btn-login text-uppercase fw-bold" type="submit">
                                            {/* {pendingApiCall ? <div className="spinner-grow mt-2">
                                                <span className="sr-only"></span>
                                            </div> : "Login"} */}
                                            Login
                                        </button>
                                    </div>
                                    <div className="d-grid text-center mt-4">
                                        <a href="#">Forgot your password or e-mail ?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserLoginPage