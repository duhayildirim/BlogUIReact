import React from "react";
import axios from "axios";

class UserSignupPage extends React.Component {
    state = {
        username: null,
        email: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
    }

    onChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    onClickSignup = e => {
        e.preventDefault()

        const { username, email, password } = this.state
        const body = { username, email, password }
        this.setState({ pendingApiCall: true })

        axios.post("/api/1.0/users", body)
            .then((res) => {
                this.setState({ pendingApiCall: false })
            })
            .catch((err) => {
                this.setState({ pendingApiCall: false })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h2 className="card-title text-center mb-5 fw-light">Sign Up</h2>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingName" placeholder="Name" name="username" onChange={this.onChange} />
                                        <label htmlFor="floatingName"> Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={this.onChange} />
                                        <label htmlFor="floatingInput"> Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={this.onChange} />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPasswordRepeat" placeholder="Password Repeat" name="passwordRepeat" onChange={this.onChange} />
                                        <label htmlFor="floatingPasswordRepeat" >Password Repeat</label>
                                    </div>
                                    <div className="d-grid mt-5">
                                        <button className="btn btn-login text-uppercase fw-bold" type="submit" onClick={this.onClickSignup} disabled={this.state.pendingApiCall}>
                                            { this.state.pendingApiCall ? <div className="spinner-grow mt-2">
                                                <span className="sr-only"></span>
                                            </div> : "Sign up"}
                                        </button>
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

export default UserSignupPage;