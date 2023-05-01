import React from "react";

class UserSignupPage extends React.Component {
    state = {
        username: null,
        email: null,
        password: null,
        passwordRepeat: null,
    }



    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    onChangeEmail = e => {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    onChangePasswordRepeat = e => {
        this.setState({
            passwordRepeat: e.target.value
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
                                        <input type="text" className="form-control" id="floatingName" placeholder="Name" name="username" onChange={this.onChangeUsername} />
                                        <label htmlFor="floatingName"> Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={this.onChangeEmail} />
                                        <label htmlFor="floatingInput"> Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={this.onChangePassword} />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPasswordRepeat" placeholder="Password Repeat" />
                                        <label htmlFor="floatingPasswordRepeat" name="passwordRepeat" onChange={this.onChangePasswordRepeat}>Password Repeat</label>
                                    </div>
                                    <div className="d-grid mt-5">
                                        <button className="btn btn-login text-uppercase fw-bold" type="submit">Sign
                                            up</button>
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