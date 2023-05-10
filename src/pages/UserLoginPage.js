import React from "react";
import Input from "../components/Input"
import { login } from "../api/apiCalls"
import axios from "axios";

class UserLoginPage extends React.Component {
    state = {
        email: null,
        password: null,
        pendingApiCall: false,
        error: null
    }

    componentDidMount() {
        axios.interceptors.request.use((request) => {
            this.setState({
                pendingApiCall: true
            })

            return request
        })

        axios.interceptors.response.use((res) => {
            this.setState({
                pendingApiCall: false
            })

            return res
        }, (err) => {
            this.setState({
                pendingApiCall: false
            })

            throw err
        })
    }

    onChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value,
            error: null
        })
    }

    onClickLogin = async e => {
        e.preventDefault()
        const { email, password } = this.state
        const creds = {
            username: email,
            password: password
        }
        this.setState({
            error: null
        })
        try {
            await login(creds)
            this.props.history.push("/")
        } catch (err) {
            this.setState({
                error: "Incorrect email or password. Try again."

            })
        }

    }

    render() {
        const { email, password, pendingApiCall } = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8 mx-auto shadow rounded-3">
                        <div className="card border-0 shadow rounded-3">
                            <div className="card-body p-4 p-sm-5">
                                <h2 className="card-title text-center mb-5 fw-light">Login</h2>
                                <form>
                                    <Input type="email" name="email" label="Email" placeHolder="asdas@gmail.com" onChange={this.onChange} />
                                    <Input type="password" name="password" label="Password" placeHolder="password" onChange={this.onChange} />
                                    <div className="d-grid mt-5">
                                        <button className="btn btn-login text-uppercase fw-bold" type="submit" onClick={this.onClickLogin} disabled={pendingApiCall}>
                                            {pendingApiCall ? <div className="spinner-grow mt-2">
                                                <span className="sr-only"></span>
                                            </div> : "Login"}
                                        </button>
                                    </div>
                                    {this.state.error && <div className="d-grid text-center mt-4">
                                        <a className="loginError">{this.state.error}</a>
                                    </div>}
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