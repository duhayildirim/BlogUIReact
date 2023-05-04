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

        if (name === "password" || name === "passwordRepeat") {
            if (name === "password" && value !== this.state.passwordRepeat) {
                errors.passwordRepeat = "Password mismatch"
            } else if (name === "passwordRepeat" && value !== this.state.password) {
                errors.passwordRepeat = "Password mismatch"
            } else {
                errors.passwordRepeat = undefined
            }
        }

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
        const { username, email, password, passwordRepeat } = errors

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h2 className="card-title text-center mb-5 fw-light">Sign Up</h2>
                                <form>
                                    <Input type="text" error={username} name="username" onChange={this.onChange} label="Name" placeHolder="Mark" />
                                    <Input type="email" error={email} name="email" onChange={this.onChange} label="Email" placeHolder="asdas@gmail.com" />
                                    <Input type="password" error={password} name="password" onChange={this.onChange} label="Password" placeHolder="password" />
                                    <Input type="password" error={passwordRepeat} name="passwordRepeat" onChange={this.onChange} label="Password Repeat" placeHolder="password" />
                                    <div className="d-grid mt-5">
                                        <button className="btn btn-login text-uppercase fw-bold" type="submit" onClick={this.onClickSignup}
                                            disabled={pendingApiCall || passwordRepeat !== undefined}>
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