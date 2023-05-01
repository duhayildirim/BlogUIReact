import React from "react";

class UserSignupPage extends React.Component {
    render() {
        return (
            <body>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body p-4 p-sm-5">
                                    <h2 className="card-title text-center mb-5 fw-light">Sign Up</h2>
                                    <form>
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput"> Email address</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div>

                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                            <label class="form-check-label" for="rememberPasswordCheck">
                                                Remember password
                                            </label>
                                        </div>
                                        <div class="d-grid mt-5">
                                            <button class="btn btn-login text-uppercase fw-bold" type="submit">Sign
                                                in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default UserSignupPage;