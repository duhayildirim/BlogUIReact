import React from "react";
import { signup } from "../api/apiCalls"
import Input from "../components/Input"

class UserSignupPage extends React.Component {
    state = {
        username: null,
        email: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
        errors: {}
    }

    onChange = e => {
        const { name, value } = e.target
        const errors = { ... this.state.errors }
        errors[name] = undefined

        this.setState({
            [name]: value,
            errors
        })
    }

    onClickSignup = async e => {
        e.preventDefault()

        const { username, email, password } = this.state
        const body = { username, email, password }
        this.setState({ pendingApiCall: true })

        try {
            const response = await signup(body)
        } catch (err) {
            if (err.response.data.validationErrors) {
                this.setState({ errors: err.response.data.validationErrors })
            }
        }

        this.setState({ pendingApiCall: false })
    }

    render() {
        const { pendingApiCall, errors } = this.state
        const { username, email } = errors

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h2 className="card-title text-center mb-5 fw-light">Sign Up</h2>
                                <form>
                                    <Input type="text" error={username} name="username" onChange={this.onChange} label="Name" placeHolder="Mark"/>
                                    <Input type="email" error={email} name="email" onChange={this.onChange} label="Email" placeHolder="asdas@gmail.com"/>  
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={this.onChange} />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPasswordRepeat" placeholder="Password Repeat" name="passwordRepeat" onChange={this.onChange} />
                                        <label htmlFor="floatingPasswordRepeat" >Password Repeat</label>
                                    </div>
                                    <div className="d-grid mt-5">
                                        <button className="btn btn-login text-uppercase fw-bold" type="submit" onClick={this.onClickSignup} disabled={pendingApiCall}>
                                            {pendingApiCall ? <div className="spinner-grow mt-2">
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